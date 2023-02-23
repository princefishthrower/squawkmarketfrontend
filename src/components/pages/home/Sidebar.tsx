import * as React from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { FeedItemTile } from "../../reusable/FeedItemTile";
import { FeedControls } from "../../reusable/FeedControls";

export function Sidebar() {
  const { isConnected, items } = useAppSelector((state) => state.feed);

  const resolveContent = () => {
    if (isConnected && items.length > 0) {
      return (
        <>
          {items.map((item) => (
            <FeedItemTile key={item.created_at} item={item} />
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
        Squawks will begin collecting here as soon as you connect.
      </div>
    );
  };

  return (
    <div
      className="sidebar-height d-flex flex-column flex-shrink-0 bg-dark text-light overflow-auto"
    >
      <div className="my-3 font-monospace text-center">Live Feed Items</div>
      <FeedControls/>
      <div className="m-3">{resolveContent()}</div>
    </div>
  );
}
