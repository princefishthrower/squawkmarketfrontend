import { useEffect } from "react";
import { onFeedMessage } from "../utils/onFeedMessage";
import { HubConnectionState } from "@microsoft/signalr";
import { AppDispatch } from "../redux/store";

export const useConnectToFeedByName = (
  volume: number,
  connectionRef: React.MutableRefObject<signalR.HubConnection>,
  feed: string,
  connect: boolean,
  dispatch: AppDispatch
) => {
  useEffect(() => {
    // ensure that connection is in 'Connected' state
    if (
      connectionRef.current.state === HubConnectionState.Connected &&
      connect
    ) {
      connectionRef.current.invoke(
        "AddToGroup",
        feed,
        connectionRef.current.connectionId
      );
      connectionRef.current.on(feed, (item) =>
        onFeedMessage(volume, item, dispatch)
      );
    }
    if (
      connectionRef.current.state === HubConnectionState.Connected &&
      !connect
    ) {
      connectionRef.current.invoke(
        "RemoveFromGroup",
        feed,
        connectionRef.current.connectionId
      );
      connectionRef.current.off(feed);
    }
  }, [connectionRef.current.state, connect]);
};
