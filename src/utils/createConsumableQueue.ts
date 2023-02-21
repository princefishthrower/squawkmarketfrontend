import { IFeedData } from "../interfaces/IFeedData";
import { playBase64StringWithVolume } from "./playBase64StringWithVolume";
import { playUrlWithVolume } from "./playUrlWithVolume";
import { sleep } from "./sleep";

export interface IConsumableQueue {
  add: (item: IFeedData) => void;
  removeAll: () => void;
}

export const createConsumableQueue = () => {
  console.log("creating consuumable queue");
  const queue: IFeedData[] = [];
  localStorage.setItem("IS_AUDIO_PLAYING", "false");

  function add(item: IFeedData) {
    // only add if we are sure the item headline is not already in the queue
    if (queue.find((q) => q.headline === item.headline)) {
      console.log("already found headline, returning");
      return;
    }
    queue.push(item);
    if (localStorage.getItem("IS_AUDIO_PLAYING") === "false") {
      console.log("processing queue");
      processQueue();
    }
  }

  function removeAll() {
    queue.splice(0, queue.length);
  }

  async function processQueue() {
    await sleep(500);
    const item = queue.shift();
    if (!item) {
      return;
    }
    try {
      if (item.sourceType === "url") {
        await playUrlWithVolume(item.source, item.volume, processQueue);
      } else {
        await playBase64StringWithVolume(
          item.source,
          item.volume,
          processQueue
        );
      }
    } catch (error) {}
    // as latency dump, if we have more than 10 items in the queue, removeAll
    if (queue.length > 10) {
      removeAll();
    }
  }

  return { add, removeAll };
};
