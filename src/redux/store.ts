import {combineReducers, configureStore} from '@reduxjs/toolkit';
import feedSlice, {feedInitialState} from './feedSlice';
import authSlice, { authInitialState } from './authSlice';
import formsSlice, { formsInitialState } from './formsSlice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const initialState = {
  feed: feedInitialState,
  auth: authInitialState,
  forms: formsInitialState,
};

// persist only user slice
// TODO - add the feed slice? might lead to user confusion...
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  feed: feedSlice,
  auth: authSlice,
  forms: formsSlice,
});

// persistedReducer is used in gatsby-ssr and gatsby-browser
export const persistedReducer = persistReducer(persistConfig, rootReducer);

// need store for types
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// configure and export types for hooks
type ConfiguredStore = typeof store;
type StoreGetState = ConfiguredStore['getState'];
export type RootState = ReturnType<StoreGetState>;
export type AppDispatch = ConfiguredStore['dispatch'];
