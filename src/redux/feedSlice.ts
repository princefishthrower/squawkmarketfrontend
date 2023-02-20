import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFeedItem } from "../interfaces/IFeedItem";
import { uniqueByKey } from "../utils/uniqueByKey";

type FeedState = {
  isConnected: boolean;
  isConnecting: boolean;
  isError: boolean;
  items: Array<IFeedItem>;
  volume: number;
};

export const feedInitialState: FeedState = {
  isConnected: false,
  isConnecting: false,
  isError: false,
  items: [],
  volume: 5,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState: feedInitialState,
  reducers: {
    setItems: (state, action: PayloadAction<Array<IFeedItem>>) => {
      state.items = uniqueByKey(action.payload, "headline").sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    },
    appendToItems: (state, action: PayloadAction<IFeedItem>) => {
      state.items = uniqueByKey(
        [...state.items, action.payload],
        "headline"
      ).sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setIsConnecting: (state, action: PayloadAction<boolean>) => {
      state.isConnecting = action.payload;
    },
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const {
  setItems,
  appendToItems,
  setVolume,
  setIsConnecting,
  setIsConnected,
  setIsError,
} = feedSlice.actions;

export default feedSlice.reducer;
