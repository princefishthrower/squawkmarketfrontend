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
  const { headline, mp3data, url, created_at } = item;

  const onClickReplay = () => {
    playBase64StringWithVolume(mp3data, volume, () => {});
  };

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
      <div>{headline}</div>
      {/* <a className="my-3" href={url} target="_blank" rel="noreferrer noopener">
        Link to article
      </a> */}
      <button className="btn btn-primary" onClick={onClickReplay}>
        {"\u2B80"} Replay
      </button>
    </div>
  );
}
