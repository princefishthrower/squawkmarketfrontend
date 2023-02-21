import * as React from "react";
import { useFreeFeed } from "../../hooks/useFreeFeed";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setIsConnecting } from "../../redux/feedSlice";

export function ActivateFreeFeedButton() {
  const { isConnected, isConnecting, isError } = useAppSelector(
    (state) => state.feed
  );
  const dispatch = useAppDispatch();

  useFreeFeed();

  const onClickActivateFeed = () => {
    dispatch(setIsConnecting(true));
  };

  const disabled = isConnected ? true : false;

  const resolveButtonText = () => {
    if (isConnecting) {
      return "Connecting...";
    }

    if (isError) {
      return "Error Connecting!";
    }

    if (isConnected) {
      return "Connected";
    }

    return <>{"\u2B80"} Connect</>;
  };

  const buttonText = resolveButtonText();
  return (
    <button
      disabled={disabled}
      className="btn btn-success"
      onClick={onClickActivateFeed}
    >
      {buttonText}
    </button>
  );
}
