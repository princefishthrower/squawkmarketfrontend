import { AudioPlayer } from "../services/AudioPlayer";
import { readFileAsBase64 } from "./readFileAsBase64";

export const playFile = async (filename: string) => {
  const audioPlayer = AudioPlayer.getInstance();
  audioPlayer.clearAll();
  const advertisementBase64 = await readFileAsBase64(filename);
  audioPlayer.enqueue(advertisementBase64);
};
