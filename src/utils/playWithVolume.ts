import { sleep } from "./sleep";

export const playWithVolume = async (mp3Data: string, volume: number) => {
  const audio = new Audio("data:audio/mp3;base64," + mp3Data);
  // volume is 10 based and audio.volume is 1 based
  audio.volume = volume * 0.1;
  await audio.play();
  // half a second delay to prevent confusing listeners
  await sleep(500);
};
