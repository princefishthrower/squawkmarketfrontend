import * as React from "react";
import { Logo } from "../../reusable/Logo";
import { PremiumPriceTile } from "../../reusable/PremiumPriceTile";
import { Sidebar } from "./Sidebar";
import { useFeedConnection } from "../../../hooks/useFeedConnection";
import { useConnectToFeedByName } from "../../../hooks/useConnectToFeedByName";
import { useState } from "react";
import { ActivateButton } from "../dashboard/components/ActivateButton";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAds } from "../../../hooks/useAds";

export function Home() {
  const { volume } = useAppSelector(state => state.feed);
  const dispatch = useAppDispatch();
  const [isActivated, setIsActivated] = useState(false);

  // get a connection ref
  const {connectionRef} = useFeedConnection(isActivated);

  // run ads
  useAds();

  // connect to the free feed
  useConnectToFeedByName(volume, connectionRef, "market-wide", isActivated, dispatch)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-xl-3 p-0 order-2 order-xl-1">
          <Sidebar />
        </div>
        <div className="col-12 col-xl-9 order-1 order-xl-2">
          <div className="text-center">
            <Logo size={150} />
          </div>
          <h1 className="text-center font-monospace fw-bold">Squawk Market</h1>
          <h2 className="text-center">
            The best real-time & market-wide audio feed.
          </h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-7">
              <p className="text-center">
                Squawk Market uses a variety of quantitative and qualitative
                metrics as well as a suite of AI tools to provide you the most
                relevant market news and data in extremely low ({"<"}1s)
                latencies. Don't miss a single break-out momentum trade, market-moving news
                event, high-impact economic release, breaking corporate
                announcement, or geopolitical development. Stay ahead of the
                game by capitalizing on volatility, intraday moves, and maximize
                your returns with our low-latency squawk.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 border rounded p-3 m-3">
              <div className="d-flex flex-column align-items-center h-100">
                <h2 className="text-center">
                  <u>Market-Wide News</u>
                </h2>
                <p className="fw-bold">Free forever</p>
                <p className="text-center">Provided as a courtesy to the trading community.</p>
                <ActivateButton className="mb-3 btn btn-success" isComingSoon={false} isActivated={isActivated} setIsActivated={setIsActivated} />
                <p>Includes:</p>
                <ul>
                  <li>Trending / viral market news</li>
                  <li>Pre-market overview</li>
                  <li>Post-market overview</li>
                </ul>
                   </div>
            </div>
            <div className="col-12 col-md-4 border rounded p-3 m-3">
              <PremiumPriceTile/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
