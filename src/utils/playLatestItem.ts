import { ISquawk } from "../interfaces/IFeedItem";
import { AudioPlayer } from "./AudioPlayer";
export const playLatestItem = async (items: Array<ISquawk>) => {
  const latestItem = items[0];
  if (latestItem) {
    const audioPlayer = AudioPlayer.getInstance();
    audioPlayer.clearAll();
    audioPlayer.enqueue(latestItem.mp3data, 5);
  }
};
