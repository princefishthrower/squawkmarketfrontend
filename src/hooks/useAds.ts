import { playFile } from "../utils/playFile";
import { useAppSelector } from "./useAppSelector";
import useInterval from "./useInterval";

export const useAds = () => {
  const { volume } = useAppSelector((state) => state.feed);

  // useInterval to enqueue the advertisement mp3 every 10 minutes
  useInterval(() => {
    playFile(volume, "/advertisement.mp3");
  }, 600000);
};
