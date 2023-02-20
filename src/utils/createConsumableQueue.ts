import { IFeedData } from "../interfaces/IFeedData";
import { playWithVolume } from "./playWithVolume";

export const createConsumableQueue = () => {
  let queue: IFeedData[] = [];
  let isProcessing = false;

  function add(item: IFeedData) {
    queue.push(item);
    if (!isProcessing) {
      processQueue();
    }
  }

  function removeAll() {
    queue = [];
  }

  async function processQueue() {
    isProcessing = true;
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) {
        continue;
      }
      await playWithVolume(item.mp3Data, item.volume);
    }
    isProcessing = false;
  }

  return { add, removeAll };
};
