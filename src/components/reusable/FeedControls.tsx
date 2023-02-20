import * as React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setVolume } from "../../redux/feedSlice";

export function FeedControls() {
  const { isConnected, volume } = useAppSelector((state) => state.feed);
  const dispatch = useAppDispatch();
  const muteButtonText = volume === 0 ? "Unmute" : "Mute";
  const muteButtonVolumeValue = volume === 0 ? 5 : 0;

  return (
    <div className="d-flex flex-row justify-content-center align-items-center my-3">
      <label htmlFor="volume">Volume</label>
      <input
        disabled={!isConnected}
        className="bg-success mx-2"
        type="range"
        id="volume"
        name="volume"
        min={0}
        max={10}
        value={volume}
        step={1}
        onChange={(e) => dispatch(setVolume(parseInt(e.target.value)))}
      />
      <button
        disabled={!isConnected}
        className="btn btn-secondary"
        onClick={() => dispatch(setVolume(muteButtonVolumeValue))}
      >
        {muteButtonText}
      </button>
    </div>
  );
}
