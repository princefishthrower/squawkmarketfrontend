import { playFile } from "../utils/playFile";
import useInterval from "./useInterval";

export const useAds = () => {
  // useInterval to enqueue the advertisement mp3 every 10 minutes
  useInterval(() => {
    playFile("/advertisement.mp3");
  }, 600000);
};
