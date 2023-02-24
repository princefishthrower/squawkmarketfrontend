// singleton class to play audio files in sequence
export class AudioPlayer {
  private static instance: AudioPlayer;
  private audio: HTMLAudioElement = new Audio();
  private audioQueue: Array<{ audioBase64: string; volume: number }>;
  private isPlaying: boolean;

  private constructor() {
    this.audioQueue = [];
    this.isPlaying = false;
    // this.isPlaying = false;
    this.audio.onended = () => {
      // wait for audio to finish playing, then wait 1 second and play next
      console.log("DONE PLAYING AUDIO");
      setTimeout(() => {
        this.isPlaying = false;
        this.tryToPlayNext();
      }, 1000);
    };
  }

  public static getInstance(): AudioPlayer {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer();
    }
    return AudioPlayer.instance;
  }

  public enqueue(audioBase64: string, volume: number): void {
    this.audioQueue.push({ audioBase64, volume });
    this.tryToPlayNext();
  }

  private async tryToPlayNext(): Promise<void> {
    console.log(
      "PLAYING NEXT, QUEUE LENGTH: ",
      this.audioQueue.length,
      " IS PLAYING: ",
      this.isPlaying
    );
    if (this.audioQueue.length > 0 && !this.isPlaying) {
      this.isPlaying = true;
      const item = this.audioQueue.shift();
      if (!item) {
        return;
      }
      const { audioBase64, volume } = item;
      this.audio.src = `data:audio/wav;base64,${audioBase64}`;
      this.audio.volume = volume * 0.1;
      
      // try / catch in rare case of non-interaction with page
      try {
        console.log("PLAYING AUDIO");
        this.audio.play();
      } catch (e) {
        console.log(e);
      }
    }

    // as a memory optimization, clear the queue if it gets too long
    if (this.audioQueue.length > 15) {
      this.audioQueue = [];
    }
  }

  public clearAll(): void {
    this.audioQueue = [];
    this.isPlaying = false;
  }
}
