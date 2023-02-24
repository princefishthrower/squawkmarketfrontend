import { AudioPlayer } from "../utils/AudioPlayer";
import { readFileAsBase64 } from "../utils/readFileAsBase64";
import { useAppSelector } from "./useAppSelector";
import useInterval from "./useInterval";

export const useAds = () => {
  const { volume } = useAppSelector((state) => state.feed);
  const playAdvertisement = async () => {
    const audioPlayer = AudioPlayer.getInstance();
    const advertisementBase64 = await readFileAsBase64("/advertisement.mp3");
    audioPlayer.enqueue(advertisementBase64, volume);
  };

  // useInterval to enqueue the advertisement mp3 every 10 minutes
  useInterval(() => {
    playAdvertisement();
  }, 600000);
};
