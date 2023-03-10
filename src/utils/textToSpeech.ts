export const textToSpeech = (text: string) => {
  //if text to speech gets too expensive, can always use this:
  // also a very low latency way of doing things
  if (typeof window !== "undefined") {
    var speechSynthesisUtterance = new SpeechSynthesisUtterance();
    speechSynthesisUtterance.text = text;
    speechSynthesisUtterance.lang = "en-GB";
    speechSynthesisUtterance.volume = 1;
    speechSynthesisUtterance.rate = 1.5;
    speechSynthesisUtterance.pitch = 1;
    speechSynthesis.speak(speechSynthesisUtterance);
  }
};
