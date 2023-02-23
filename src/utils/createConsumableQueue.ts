import { IFeedData } from "../interfaces/IFeedData";
import { playBase64StringWithVolume } from "./playBase64StringWithVolume";
import { playUrlWithVolume } from "./playUrlWithVolume";
import { sleep } from "./sleep";

export const createConsumableQueue = () => {
  const queue: IFeedData[] = [];
  localStorage.setItem("IS_AUDIO_PLAYING", "false");

  function add(item: IFeedData) {
    // if item has empty squawk, do not add to queue
    if (!item.squawk) {
      return;
    }
    // only add if we are sure the item squawk is not already in the queue
    if (queue.find((q) => q.squawk === item.squawk)) {
      return;
    }
    queue.push(item);
    if (localStorage.getItem("IS_AUDIO_PLAYING") === "false") {
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
