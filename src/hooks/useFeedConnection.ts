import { useAppDispatch } from "./useAppDispatch";
import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";
import {
  setIsConnected,
  setIsConnecting,
  setIsError,
  setVolume,
} from "../redux/feedSlice";
import { getAccessToken } from "../utils/getAccessToken";

export const useFeedConnection = (connect: boolean) => {
  const dispatch = useAppDispatch();
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

  
  return {connectionRef}
};
