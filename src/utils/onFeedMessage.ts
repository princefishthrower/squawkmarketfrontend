import { IConsumableQueue } from './../interfaces/IConsumableQueue';
import { AppDispatch } from "./../redux/store";
import { ISquawk } from "../interfaces/IFeedItem";
import { appendToItems } from "../redux/feedSlice";

export const onFeedMessage = (
  queueRef: React.MutableRefObject<IConsumableQueue>,
  volume: number,
  item: ISquawk,
  dispatch: AppDispatch
) => {
  console.log("onFeedMessage", item)
  dispatch(appendToItems(item));
  queueRef.current.add({
    sourceType: "base64",
    source: item.mp3data,
    volume,
    squawk: item.squawk,
    link: item.link,
  });
};
