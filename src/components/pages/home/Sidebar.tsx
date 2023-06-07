import * as React from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { FeedItemTile } from "../../reusable/FeedItemTile";
import { FeedControls } from "../../reusable/FeedControls";
import { useESTTime } from "../../../hooks/useESTTime";
import { NotificationControls } from "../../reusable/NotificationControls";

export interface ISidebarProps {
  isHubStartError: boolean;
}

export function Sidebar(props: ISidebarProps) {
  const { isHubStartError } = props;
  const { isConnected, items } = useAppSelector((state) => state.feed);
  const nowEST = useESTTime();

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

  // is market wide feed running only runs from 8am to 5pm EST
  const getIsMarketWideFeedRunning = () => {
    const day = nowEST.getDay();
    const hour = nowEST.getHours();
    const minute = nowEST.getMinutes();
    const isWeekday = day > 0 && day < 6;
    const isMarketHours = hour >= 8 && hour < 17;
    const isMarketMinutes = minute >= 0 && minute < 60;
    return isWeekday && isMarketHours && isMarketMinutes;
  };

  const getIsMarketOpen = () => {
    const day = nowEST.getDay();
    const hour = nowEST.getHours();
    const minute = nowEST.getMinutes();
    const isWeekday = day > 0 && day < 6;
    if (isWeekday && hour === 9 && minute > 30) {
      return true;
    }
    if (isWeekday && hour >= 10 && hour <= 16) {
      return true;
    }
    return false
  };

  const isMarketOpen = getIsMarketOpen();

  const isMarketWideFeedRunning = getIsMarketWideFeedRunning();

  const formatHHSSMM = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="sidebar-height d-flex flex-column flex-shrink-0 bg-dark text-light overflow-auto">
      <div className="mt-3 font-monospace text-center">Live Feed Items</div>
      <div className="m-3 font-monospace text-center">
        {formatHHSSMM(nowEST)} EST
      </div>
      {isMarketOpen ? (
        <div className="mb-3 font-monospace text-center text-success">
          The NYSE is open.
        </div>
      ) : (
        <div className="mb-3 font-monospace text-center text-danger">
          The NYSE is closed.
        </div>
      )}
      {!isMarketWideFeedRunning && (
        <div className="mx-3 font-monospace text-center text-warning">
          The market-wide feed runs only from 8:00:00 AM to 5:00:00 PM EST.
          There is little to no squawk played during off hours. Reach out to us if your an avid user and want us to extend the market-wide feed to a wider time range.
        </div>
      )}
      <FeedControls />
      <NotificationControls/>
      {isHubStartError && (
        <div className="p-3 mx-3 rounded bg-danger text-light">
          Error connecting to the server or connection lost. Please refresh the
          page.
        </div>
      )}
      <div className="m-3">{resolveContent()}</div>
    </div>
  );
}
