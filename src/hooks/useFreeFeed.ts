import { IFeedItem } from './../interfaces/IFeedItem';
import { useAppDispatch } from './useAppDispatch';
import { createConsumableQueue } from "./../utils/createConsumableQueue";
import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";
import { useAppSelector } from "./useAppSelector";
import { appendToItems, setIsConnected, setIsConnecting, setIsError, setVolume } from '../redux/feedSlice';

export const useFreeFeed = (
) => {
  const { isConnecting, volume } = useAppSelector(state => state.feed);
  const dispatch = useAppDispatch();
  const queueRef = useRef(createConsumableQueue());
  const connectionRef = useRef(
    new signalR.HubConnectionBuilder()
      .withUrl(`${process.env.GATSBY_API_URL}/feed`)
      .build()
  );

  const onFreeFeedMessage = (item: IFeedItem) => {
    console.log(`Adding item!`);
    dispatch(appendToItems(item));
    queueRef.current.add({
      mp3Data: item.mp3data,
      volume,
    });
  };

  // on mount ensure that we are not connecting or connected
  useEffect(() => {
    console.log("useFreeFeed: on mount (ensure not connecting or connected)");
    dispatch(setIsConnecting(false));
    dispatch(setIsConnected(false));
    dispatch(setIsError(false));
    dispatch(setVolume(5));
  }, []);

  useEffect(() => {
    if (isConnecting) {
      console.log('stargin!!!!!')
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
};

