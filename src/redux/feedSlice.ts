import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISquawk } from "../interfaces/IFeedItem";
import { uniqueByKey } from "../utils/uniqueByKey";

type FeedState = {
  isConnected: boolean;
  isConnecting: boolean;
  isError: boolean;
  items: Array<ISquawk>;
};

export const feedInitialState: FeedState = {
  isConnected: false,
  isConnecting: false,
  isError: false,
  items: [],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState: feedInitialState,
  reducers: {
    setItems: (state, action: PayloadAction<Array<ISquawk>>) => {
      state.items = uniqueByKey(action.payload, "squawk").sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    },
    appendToItems: (state, action: PayloadAction<ISquawk>) => {
      state.items = uniqueByKey(
        [...state.items, action.payload],
        "squawk"
      ).sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
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
  setIsConnecting,
  setIsConnected,
  setIsError,
} = feedSlice.actions;

export default feedSlice.reducer;
