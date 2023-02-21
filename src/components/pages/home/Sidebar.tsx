import * as React from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { FeedItemTile } from "../../reusable/FeedItemTile";
import { FeedControls } from "../../reusable/FeedControls";
import { ActivateFreeFeedButton } from "../../reusable/ActivateFreeFeedButton";

export function Sidebar() {
  const { isConnected, items } = useAppSelector((state) => state.feed);

  const resolveContent = () => {
    if (isConnected && items.length > 0) {
      return (
        <>
          {items.map((item) => (
            <FeedItemTile key={item.headline} item={item} />
          ))}
        </>
      );
    }

    if (isConnected && items.length === 0) {
      return (
        <div className="p-3 mb-3 rounded bg-light text-dark">
          Waiting for squawk...
        </div>
      );
    }

    return (
      <div className="p-3 mb-3 rounded bg-light text-dark">
        Waiting to connect...
      </div>
    );
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-dark text-light h-100 overflow-auto"
    >
      <div className="my-3 font-monospace text-center">Live feed</div>
      <div className="text-center">
        <ActivateFreeFeedButton/>
      </div>
      <FeedControls/>
      <div className="m-3">{resolveContent()}</div>
    </div>
  );
}