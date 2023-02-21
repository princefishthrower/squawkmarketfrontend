export const playUrlWithVolume = async (url: string, volume: number, onended: () => void) => {
  const audio = new Audio(url);
  audio.onended = () => {
    localStorage.setItem("IS_AUDIO_PLAYING", "false");
    onended()
  };
  // volume is 10 based and audio.volume is 1 based
  audio.volume = volume * 0.1;
  localStorage.setItem("IS_AUDIO_PLAYING", "true");
  await audio.play();
}