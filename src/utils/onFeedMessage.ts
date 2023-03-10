import { showBrowserNotification } from "./notifications/showBrowserNotification";
import { AppDispatch } from "./../redux/store";
import { ISquawk } from "../interfaces/IFeedItem";
import { appendToItems } from "../redux/feedSlice";
import { AudioPlayer } from "../services/AudioPlayer";
import { getLocalStorageNotificationsEnabled } from "./localStorage/getLocalStorageNotificationsEnabled";

export const onFeedMessage = (
  item: ISquawk,
  items: ISquawk[],
  dispatch: AppDispatch
) => {
  // don't add or try to play if there is no mp3data or feed
  if (!item.mp3data || !item.feed) {
    console.log("no mp3data or feed, not adding to items", item);
    return;
  }
  // also if the item.squawk already exists in the squawks
  const existingSquawks = items.map((i) => i.squawk);
  if (existingSquawks.includes(item.squawk)) {
    console.log("squawk already exists, not adding to items", item.squawk);
    return;
  }
  console.log("onFeedMessage", item);
  dispatch(appendToItems(item));
  const audioPlayer = AudioPlayer.getInstance();
  audioPlayer.enqueue(item.mp3data);
  const notificationsEnabled = getLocalStorageNotificationsEnabled();
  if (notificationsEnabled === "TRUE") {
    showBrowserNotification(item.feed, item.squawk);
  }
};
