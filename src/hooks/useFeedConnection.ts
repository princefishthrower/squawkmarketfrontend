import { useAppDispatch } from "./useAppDispatch";
import { useEffect, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";
import {
  setIsConnected,
  setIsError,
  setVolume,
} from "../redux/feedSlice";
import { getAccessToken } from "../utils/getAccessToken";

export const useFeedConnection = (connect: boolean) => {
  const dispatch = useAppDispatch();
  const [isConnecting, setIsConnecting] = useState(false);
  const connectionRef = useRef(
    new signalR.HubConnectionBuilder()
      .withUrl(`${process.env.GATSBY_API_URL}/feeds`, {accessTokenFactory: () => getAccessToken()})
      .withAutomaticReconnect({ nextRetryDelayInMilliseconds: () => 5000 })
      .withHubProtocol(new signalR.JsonHubProtocol())
      .configureLogging(signalR.LogLevel.Information)
      .build()
  );
  
  connectionRef.current.onclose(() => {
    setIsConnecting(false)
    dispatch(setIsConnected(false));
  });

  // on mount ensure that we are not connecting or connected
  useEffect(() => {
    setIsConnecting(false)
    dispatch(setIsConnected(false));
    dispatch(setIsError(false));
    dispatch(setVolume(5));
    return () => {
      setIsConnecting(false)
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
          setIsConnecting(false)
          dispatch(setIsConnected(true));
        })
        .catch(() => {
          setIsConnecting(false)
          dispatch(setIsError(true));
          dispatch(setIsConnected(false));
        });
    }
  }, [connect]);

  
  return {isConnecting, connectionRef}
};
