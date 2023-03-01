import { useAppDispatch } from "./useAppDispatch";
import { useEffect, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { setIsConnected, setVolume } from "../redux/feedSlice";
import { getAccessToken } from "../utils/getAccessToken";
import { playFile } from "../utils/playFile";

export const useFeedConnection = () => {
  const dispatch = useAppDispatch();
  const [isActivated, setIsActivated] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isError, setIsError] = useState(false);
  const connectionRef = useRef(
    new signalR.HubConnectionBuilder()
      .withUrl(`${process.env.GATSBY_API_URL}/feeds`, {
        accessTokenFactory: () => getAccessToken(),
      })
      // .withAutomaticReconnect({ nextRetryDelayInMilliseconds: () => 5000 })
      .withHubProtocol(new signalR.JsonHubProtocol())
      .configureLogging(signalR.LogLevel.Information)
      .build()
  );

  connectionRef.current.onclose((error) => {
    console.log("firing on close!, error is ", error);
    setIsActivated(false);
    setIsConnecting(false);
    setIsError(false);
    dispatch(setIsConnected(false));
    playFile(5, "/connectionlost.mp3");
  });

  // on mount ensure that we are not connecting or connected
  useEffect(() => {
    setIsConnecting(false);
    setIsError(false);
    dispatch(setIsConnected(false));
    dispatch(setVolume(5));
    return () => {
      setIsConnecting(false);
      setIsError(false);
      dispatch(setIsConnected(false));
      dispatch(setVolume(5));
    };
  }, []);

  useEffect(() => {
    if (isActivated) {
      connectionRef.current
        .start()
        .then(() => {
          setIsConnecting(false);
          setIsError(false);
          dispatch(setIsConnected(true));
        })
        .catch(() => {
          setIsConnecting(false);
          setIsError(true);
          dispatch(setIsConnected(false));
        });
    }
    if (!isActivated) {
      setIsError(false);
      setIsConnecting(false);
      dispatch(setIsConnected(false));
    }
  }, [isActivated]);

  return { isActivated, setIsActivated, isConnecting, connectionRef, isError };
};
