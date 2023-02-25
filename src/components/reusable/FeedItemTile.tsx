import * as React from "react";
import { ISquawk } from "../../interfaces/IFeedItem";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AudioPlayer } from "../../utils/AudioPlayer";

export interface IFeedItemTileProps {
  item: ISquawk;
}

export function FeedItemTile(props: IFeedItemTileProps) {
  const { item } = props;
  const { volume } = useAppSelector((state) => state.feed);
  const { squawk, mp3data, created_at, link, feed } = item;

  // on a manual replay, clear the queue and add the current item
  const onClickReplay = () => {
    const audioPlayer = AudioPlayer.getInstance()
    audioPlayer.clearAll();
    audioPlayer.enqueue(mp3data, volume);
  }

  // get EST time from created_at
  const estTime = new Date(created_at).toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  });

  return (
    <div className="d-flex flex-column justify-content-between p-3 mb-3 rounded bg-light text-dark">
      <div className="text-muted">{`${new Date(
        created_at
      ).toLocaleDateString()} ${new Date(
        created_at
      ).toLocaleTimeString()} Local / ${estTime} EST`}</div>
      <div>
        <small className="badge rounded-pill bg-secondary font-monospace fw-lighter">
          feed: {feed}
        </small>
      </div>
      <div className="my-3">{squawk}</div>
      {link && (
        <a
          className="my-3"
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          Link to article
        </a>
      )}
      <button className="btn btn-primary" onClick={onClickReplay}>
      ▶ Replay
      </button>
    </div>
  );
}
