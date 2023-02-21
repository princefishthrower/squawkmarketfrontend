export const playBase64StringWithVolume = async (mp3Data: string, volume: number, onended: () => void) => {
  const audio = new Audio("data:audio/mp3;base64," + mp3Data);
  audio.onended = () => {
    localStorage.setItem("IS_AUDIO_PLAYING", "false");
    onended()
  };
  // volume is 10 based and audio.volume is 1 based
  audio.volume = volume * 0.1;
  localStorage.setItem("IS_AUDIO_PLAYING", "true");
  await audio.play();
};
