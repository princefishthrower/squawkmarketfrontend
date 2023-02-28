import { createSlice } from "@reduxjs/toolkit";

export interface FormsState {
  isContactSuccessful: boolean;
  contactErrorMessages: string;
}

export const formsInitialState: FormsState = {
  isContactSuccessful: false,
  contactErrorMessages: "",
};

export const formsSlice = createSlice({
  name: "forms",
  initialState: formsInitialState,
  reducers: {
    setContactSuccessful: (state) => {
      state.isContactSuccessful = true;
    },
    setContactErrorMessage: (state, action) => {
      state.contactErrorMessages = action.payload;
    },
  },
});

export const { setContactSuccessful, setContactErrorMessage } =
  formsSlice.actions;

export default formsSlice.reducer;
