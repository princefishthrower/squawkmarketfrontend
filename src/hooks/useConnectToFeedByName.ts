import { useEffect } from "react";
import { onFeedMessage } from "../utils/onFeedMessage";
import { HubConnectionState } from "@microsoft/signalr";
import { AppDispatch } from "../redux/store";
import { useAppSelector } from "./useAppSelector";
import Hub from "../services/Hub";

export const useConnectToFeedByName = (
  feed: string,
  shouldStartConnection: boolean,
  dispatch: AppDispatch
) => {
  const { items } = useAppSelector((state) => state.feed);
  useEffect(() => {
    // ensure that hub is in 'Connected' state
    const hub = Hub.getExistingInstance();
    if (!hub) {
      return;
    }
    if (
      hub.hubConnection.state === HubConnectionState.Connected &&
      shouldStartConnection
    ) {
      hub.hubConnection.invoke(
        "AddToGroup",
        feed,
        hub.hubConnection.connectionId
      );
      console.log('setting "on" message handler for connection');
      hub.hubConnection.on(feed, (item) => {
        console.log("calling on feed message", item);
        onFeedMessage(item, items, dispatch);
      });
      console.log("successfully connected to feed", feed)
    }
    if (
      hub.hubConnection.state === HubConnectionState.Connected &&
      !shouldStartConnection
    ) {
      hub.hubConnection.invoke(
        "RemoveFromGroup",
        feed,
        hub.hubConnection.connectionId
      );
      hub.hubConnection.off(feed);
      console.log("successfully disconnected from feed", feed)
    }
  }, [shouldStartConnection]);
};
