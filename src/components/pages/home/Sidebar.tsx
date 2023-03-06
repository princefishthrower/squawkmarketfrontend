import * as React from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { FeedItemTile } from "../../reusable/FeedItemTile";
import { FeedControls } from "../../reusable/FeedControls";
import { useESTTime } from "../../../hooks/useESTTime";

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
    const isMarketHours = hour >= 9 && hour < 16;
    // greater than 9:30 and less than 16:00
    const isMarketMinutes = (hour == 9 && minute >= 30) || (hour <= 15 && minute < 60);
    return isWeekday && isMarketHours && isMarketMinutes;
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
      {isMarketOpen ? (
        <div className="m-3 font-monospace text-center text-success">
          The market is open.
        </div>
      ) : (
        <div className="m-3 font-monospace text-center text-danger">
          The market is closed.
        </div>
      )}
      {!isMarketWideFeedRunning && (
        <div className="mx-3 font-monospace text-center text-warning">
          It is {formatHHSSMM(nowEST)} EST. The market-wide feed runs only from 8:00:00 AM to 5:00:00 PM EST. There is little to no squawk played during off hours.
        </div>
      )}
      <FeedControls />
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
