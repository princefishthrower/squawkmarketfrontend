import { useEffect, useState } from "react";

export const useFreeFeed = (
  isActive: boolean,
  volume: number,
  setIsConnecting: (isConnecting: boolean) => void,
  setIsError: (isError: boolean) => void
) => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  useEffect(() => {
    if (isActive) {
      setIsConnecting(true);
      const ws = new WebSocket("ws://localhost:8080/stream");
      const audio = new Audio();

      ws.onopen = () => {
        setIsConnecting(false);
      };

      // go server emits mp3 data as a byte array, so we need to convert it to a blob
      ws.onmessage = (event: MessageEvent) => {
        const mp3Data = event.data;
        const url = URL.createObjectURL(mp3Data);
        audio.src = url;
        // volume is 10 based and audio.volume is 1 based
        audio.volume = volume * 0.1;
        audio.play();
      };

      ws.onerror = () => {
        setIsError(true);
      };

      setWs(ws);

      return;
    }

    setWs(null);

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [isActive, volume]);
};
