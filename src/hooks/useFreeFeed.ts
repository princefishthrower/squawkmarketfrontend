import { IFeedItem } from "./../interfaces/IFeedItem";
import { useAppDispatch } from "./useAppDispatch";
import {
  IConsumableQueue,
  createConsumableQueue,
} from "./../utils/createConsumableQueue";
import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { useAppSelector } from "./useAppSelector";
import {
  appendToItems,
  setIsConnected,
  setIsConnecting,
  setIsError,
  setVolume,
} from "../redux/feedSlice";
import useInterval from "./useInterval";

export const useFreeFeed = () => {
  const { isConnecting, isConnected, volume } = useAppSelector(
    (state) => state.feed
  );
  const dispatch = useAppDispatch();
  const [queue, setQueue] = useState<IConsumableQueue>();
  const [connection, setConnection] = useState<signalR.HubConnection>();

  const onFreeFeedMessage = (item: IFeedItem) => {
    console.log("onFreeFeedMessage", item);
    dispatch(appendToItems(item));
    queue?.add({
      sourceType: "base64",
      source: item.mp3data,
      volume,
      headline: item.headline,
    });
  };

  // on mount ensure that we are not connecting or connected
  useEffect(() => {
    dispatch(setIsConnecting(false));
    dispatch(setIsConnected(false));
    dispatch(setIsError(false));
    dispatch(setVolume(5));
    setQueue(createConsumableQueue());
    setConnection(
      new signalR.HubConnectionBuilder()
        .withUrl(`${process.env.GATSBY_API_URL}/feed`)
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Information)
        .build()
    );
    return () => {
      dispatch(setIsConnecting(false));
      dispatch(setIsConnected(false));
      dispatch(setIsError(false));
      dispatch(setVolume(5));
      setQueue(undefined);
      setConnection(undefined);
    };
  }, []);

  useEffect(() => {
    if (isConnecting) {
      connection
        ?.start()
        .then(() => {
          dispatch(setIsConnecting(false));
          dispatch(setIsConnected(true));
        })
        .catch(() => {
          dispatch(setIsConnecting(false));
          dispatch(setIsError(true));
          dispatch(setIsConnected(false));
        });
      connection?.on("freeFeedMessage", onFreeFeedMessage);
      connection?.onclose(() => {
        dispatch(setIsConnecting(false));
        dispatch(setIsConnected(false));
      });
    }
    return () => {
      // connectionRef.current.stop();
    };
  }, [isConnecting]);

  // while we are connected, useInterval to enqueue the advertisement mp3 every 10 minutes
  useInterval(
    () => {
      queue?.add({
        sourceType: "url",
        source: "/advertisement.mp3",
        volume,
        headline: "Advertisement",
      });
    },
    isConnected ? 600000 : null
  );
};
