import * as React from "react";
import { useState } from "react";
import { useFreeFeed } from "../../hooks/useFreeFeed";

export function ActivateFeedButton() {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [volume, setVolume] = useState(5);

  useFreeFeed(isActive, volume, setIsConnecting, setIsError);

  const onClickActivateFeed = async () => {
    setIsActive(true);
  };

  const disabled = isActive ? true : false;

  const resolveButtonText = () => {
    if (isConnecting) {
      return "Connecting...";
    }

    if (isError) {
      return "Error Connecting!";
    }

    if (isActive) {
      return "Connected";
    }

    return <>{"\u2B80"} Activate Feed</>;
  };

  const buttonText = resolveButtonText();

  return (
    <>
      <button
        disabled={disabled}
        className="btn btn-success"
        onClick={onClickActivateFeed}
      >
        {buttonText}
      </button>
      {isActive && (
        <div className="d-flex flex-row justify-content-center align-items-center my-3">
          <label htmlFor="volume">Volume</label>
          <input
            className="bg-success mx-2"
            type="range"
            id="volume"
            name="volume"
            min={0}
            max={10}
            value={volume}
            step={1}
            onChange={(e) => setVolume(parseInt(e.target.value))}
          />
          <button className="btn btn-secondary" onClick={() => setVolume(0)}>
            Mute
          </button>
        </div>
      )}
    </>
  );
}
