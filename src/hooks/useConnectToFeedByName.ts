import { useEffect } from "react";
import { onFeedMessage } from "../utils/onFeedMessage";
import { HubConnectionState } from "@microsoft/signalr";
import { AppDispatch } from "../redux/store";
import { IConsumableQueue } from "../interfaces/IConsumableQueue";

export const useConnectToFeedByName = (
  queueRef: React.MutableRefObject<IConsumableQueue>,
  volume: number,
  connectionRef: React.MutableRefObject<signalR.HubConnection>,
  feedName: string,
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
        feedName,
        connectionRef.current.connectionId
      );
      connectionRef.current.on(feedName, (item) =>
        onFeedMessage(queueRef, volume, item, dispatch)
      );
    }
    if (
      connectionRef.current.state === HubConnectionState.Connected &&
      !connect
    ) {
      connectionRef.current.invoke(
        "RemoveFromGroup",
        feedName,
        connectionRef.current.connectionId
      );
      connectionRef.current.off(feedName);
    }
  }, [connectionRef.current.state, connect]);
};
