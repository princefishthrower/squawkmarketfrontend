import { IFeedData } from "../interfaces/IFeedData";
import { playBase64StringWithVolume } from "./playBase64StringWithVolume";
import { playUrlWithVolume } from "./playUrlWithVolume";
import { sleep } from "./sleep";

export const createConsumableQueue = () => {
  let queue: IFeedData[] = [];
  localStorage.setItem("IS_AUDIO_PLAYING", "false");

  function add(item: IFeedData) {
    queue.push(item);
    if (localStorage.getItem("IS_AUDIO_PLAYING") === "false") {
      console.log("processing queue");
      processQueue();
    }
  }

  function removeAll() {
    queue = [];
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
    } catch (error) {
      
    }
    // as latency dump, if we have more than 10 items in the queue, removeAll
    if (queue.length > 10) {
      removeAll();
    }
    
  }

  return { add, removeAll };
};
