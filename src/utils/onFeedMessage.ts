import { AppDispatch } from "./../redux/store";
import { ISquawk } from "../interfaces/IFeedItem";
import { appendToItems } from "../redux/feedSlice";
import { AudioPlayer } from "./AudioPlayer";

export const onFeedMessage = (
  volume: number,
  item: ISquawk,
  items: ISquawk[],
  dispatch: AppDispatch
) => {
  // don't add or try to play if there is no mp3data or feed
  if (!item.mp3data || !item.feed) {
    return;
  }
  // also if the item.squawk already exists in the squawks
  const existingSquawks = items.map((i) => i.squawk);
  if (existingSquawks.includes(item.squawk)) {
    return;
  }
  console.log("onFeedMessage", item);
  dispatch(appendToItems(item));
  const audioPlayer = AudioPlayer.getInstance();
  audioPlayer.enqueue(item.mp3data, volume);
};
