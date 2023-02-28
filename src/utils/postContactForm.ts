import { FieldValues } from "react-hook-form";
import { AppDispatch } from "../redux/store";
import {
  setContactErrorMessage,
  setContactSuccessful,
} from "../redux/formsSlice";

export const postContactForm = async (
  data: FieldValues,
  dispatch: AppDispatch
) => {
  const { name, email, message } = data;
  if (!data.name || !data.email || !data.message) {
    dispatch(setContactErrorMessage("Please fill out all fields."));
    return;
  }
  try {
    await fetch(`/.netlify/functions/post-contact-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    dispatch(setContactSuccessful());
  } catch (error) {
    dispatch(
      setContactErrorMessage("Something went wrong. Please try again later.")
    );
  }
};
