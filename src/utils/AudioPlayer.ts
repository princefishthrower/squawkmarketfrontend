// singleton class to play audio files in sequence
export class AudioPlayer {
  private static instance: AudioPlayer;
  private audio: HTMLAudioElement;
  private audioQueue: Array<{ audioBase64: string; volume: number }>;
  private isPlaying: boolean;

  private constructor() {
    this.audioQueue = [];
    this.isPlaying = false;
    // get audio element (see Layout.tsx file)
    this.audio = document.getElementById("audio") as HTMLAudioElement;
    // this.isPlaying = false;
    this.audio.onended = () => {
      // wait for audio to finish playing, then wait 1 second and play next
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
    // add to queue
    this.audioQueue.push({ audioBase64, volume });

    // before trying to play, remove any duplicates we may have
    this.audioQueue = this.audioQueue.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.audioBase64 === item.audioBase64)
    );

    this.tryToPlayNext();
  }

  private async tryToPlayNext(): Promise<void> {
    if (this.audioQueue.length > 0 && !this.isPlaying) {
      this.isPlaying = true;
      const item = this.audioQueue.shift();
      if (!item) {
        return;
      }
      const { audioBase64, volume } = item;
      if (volume > 0) {
        this.audio.muted = false;
      } else {
        this.audio.muted = true;
      }
      this.audio.src = `data:audio/wav;base64,${audioBase64}`;
      this.audio.volume = volume * 0.1;
      
      // try / catch in rare case of non-interaction with page
      try {
        this.audio.play();
      } catch (error) {
        console.log(error);
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
