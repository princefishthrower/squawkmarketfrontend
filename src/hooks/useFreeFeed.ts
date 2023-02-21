import { IFeedItem } from './../interfaces/IFeedItem';
import { useAppDispatch } from './useAppDispatch';
import { createConsumableQueue } from "./../utils/createConsumableQueue";
import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";
import { useAppSelector } from "./useAppSelector";
import { appendToItems, setIsConnected, setIsConnecting, setIsError, setVolume } from '../redux/feedSlice';
import useInterval from './useInterval';

export const useFreeFeed = (
) => {
  const { isConnecting, isConnected, volume } = useAppSelector(state => state.feed);
  const dispatch = useAppDispatch();
  const queueRef = useRef(createConsumableQueue());
  const connectionRef = useRef(
    new signalR.HubConnectionBuilder()
      .withUrl(`${process.env.GATSBY_API_URL}/feed`)
      .build()
  );

  const onFreeFeedMessage = (item: IFeedItem) => {
    console.log("onFreeFeedMessage", item)
    dispatch(appendToItems(item));
    queueRef.current.add({
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
  }, []);

  useEffect(() => {
    if (isConnecting) {
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
      connectionRef.current.on("freeFeedMessage", onFreeFeedMessage);
      connectionRef.current.onclose(() => {
        dispatch(setIsConnecting(false));
        dispatch(setIsConnected(false));
      })
    }
    return () => {
      // connectionRef.current.stop();
    }
  }, [isConnecting]);


  // while we are connected, useInterval to enqueue the advertisement mp3 every 10 minutes
  useInterval(() => {
    queueRef.current.add({
      sourceType: "url",
      source: '/advertisement.mp3',
      volume,
      headline: 'Advertisement',
    });
  }, isConnected ? 600000 : null);
};

