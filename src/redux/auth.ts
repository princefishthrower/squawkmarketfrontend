import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isLoading: boolean;
  isLoggedIn: boolean;
  isPremium: boolean;
};

export const authInitialState: AuthState = {
  isLoading: true,
  isLoggedIn: false,
  isPremium: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setIsPremium: (state, action: PayloadAction<boolean>) => {
      state.isPremium = action.payload;
    },
  },
});

export const { setIsLoading, setIsLoggedIn, setIsPremium } = authSlice.actions;

export default authSlice.reducer;
