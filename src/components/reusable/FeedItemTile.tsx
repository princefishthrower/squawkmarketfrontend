import * as React from "react";
import { IFeedItem } from "../../interfaces/IFeedItem";
import { playBase64StringWithVolume } from "../../utils/playBase64StringWithVolume";
import { useAppSelector } from "../../hooks/useAppSelector";

export interface IFeedItemTileProps {
  item: IFeedItem;
}

export function FeedItemTile(props: IFeedItemTileProps) {
  const { item } = props;
  const { volume } = useAppSelector((state) => state.feed);
  const { headline, mp3data, url } = item;

  const onClickReplay = () => {
    playBase64StringWithVolume(mp3data, volume, () => {});
  };

  return (
    <div className="d-flex flex-column justify-content-between p-3 mb-3 rounded bg-light text-dark">
      <div>{headline}</div>
      <a href={url} target="_blank" rel="noreferrer noopener">
        Link to article
      </a>
      <button className="btn btn-primary" onClick={onClickReplay}>
        {"\u2B80"} Replay
      </button>
    </div>
  );
}
