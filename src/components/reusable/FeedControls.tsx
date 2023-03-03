import * as React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getLocalStorageVolume } from "../../utils/localStorage/getLocalStorageVolume";
import { useState } from "react";
import { setLocalStorageVolume } from "../../utils/localStorage/setLocalStorageVolume";

export function FeedControls() {
  const { isConnected } = useAppSelector((state) => state.feed);
  const [volume, setVolume] = useState(getLocalStorageVolume());
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
        onChange={(e) => {
          setVolume(parseInt(e.target.value));
          setLocalStorageVolume(parseInt(e.target.value));
        }}
      />
      <button
        disabled={!isConnected}
        className="btn btn-secondary"
        onClick={() => {
          setVolume(muteButtonVolumeValue);
          setLocalStorageVolume(muteButtonVolumeValue);
        }}
      >
        {muteButtonText}
      </button>
    </div>
  );
}
