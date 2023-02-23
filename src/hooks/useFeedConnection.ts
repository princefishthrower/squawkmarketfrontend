import { useAppDispatch } from "./useAppDispatch";
import {
  createConsumableQueue,
} from "../utils/createConsumableQueue";
import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";
import { useAppSelector } from "./useAppSelector";
import {
  setIsConnected,
  setIsConnecting,
  setIsError,
  setVolume,
} from "../redux/feedSlice";
import useInterval from "./useInterval";
import { getAccessToken } from "../utils/getAccessToken";

export const useFeedConnection = (connect: boolean, withAds: boolean) => {
  const { isConnected, volume } = useAppSelector(
    (state) => state.feed
  );
  const dispatch = useAppDispatch();
  const queueRef = useRef(createConsumableQueue());
  const connectionRef = useRef(
    new signalR.HubConnectionBuilder()
      .withUrl(`${process.env.GATSBY_API_URL}/feeds`, {accessTokenFactory: () => getAccessToken()})
      .withAutomaticReconnect({ nextRetryDelayInMilliseconds: () => 5000 })
      .withHubProtocol(new signalR.JsonHubProtocol())
      .configureLogging(signalR.LogLevel.Information)
      .build()
  );
  
  connectionRef.current.onclose(() => {
    dispatch(setIsConnecting(false));
    dispatch(setIsConnected(false));
  });

  // on mount ensure that we are not connecting or connected
  useEffect(() => {
    dispatch(setIsConnecting(false));
    dispatch(setIsConnected(false));
    dispatch(setIsError(false));
    dispatch(setVolume(5));
    return () => {
      dispatch(setIsConnecting(false));
      dispatch(setIsConnected(false));
      dispatch(setIsError(false));
      dispatch(setVolume(5));
    };
  }, []);

  useEffect(() => {
    if (connect) {
      connectionRef.current
        .start()
        .then(() => {
          dispatch(setIsConnecting(false));
          dispatch(setIsConnected(true));
        })
        .catch(() => {
          dispatch(setIsConnecting(false));
          dispatch(setIsError(true));
          dispatch(setIsConnected(false));
        });
    }
  }, [connect]);

  // when withAds is true:
  // while we are connected, useInterval to enqueue the advertisement mp3 every 10 minutes
  useInterval(
    () => {
      // clear the queue
      queueRef.current.removeAll();
      // add the advertisement mp3
      queueRef.current.add({
        sourceType: "url",
        source: "/advertisement.mp3",
        volume,
        squawk: "Advertisement",
        link: null
      });
    },
    withAds && isConnected ? 600000 : null
  );

  return {queueRef, connectionRef}
};
