import { AppDispatch } from "./../redux/store";
import { ISquawk } from "../interfaces/IFeedItem";
import { appendToItems } from "../redux/feedSlice";
import { AudioPlayer } from "./AudioPlayer";

export const onFeedMessage = (
  volume: number,
  item: ISquawk,
  dispatch: AppDispatch
) => {
  console.log("onFeedMessage", item);
  dispatch(appendToItems(item));
  const audioPlayer = AudioPlayer.getInstance();
  audioPlayer.enqueue(item.mp3data, volume);
};
