import * as React from "react";
import { ActivateFreeFeedButton } from "../../reusable/ActivateFreeFeedButton";
import { Logo } from "../../reusable/Logo";
import { PremiumPriceTile } from "../../reusable/PremiumPriceTile";
import { Sidebar } from "./Sidebar";
import { useFreeFeed } from "../../../hooks/useFreeFeed";

export function Home() {

  // this should only be called once or we run into dupe feed issues
  useFreeFeed();

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
                Our squawk uses a variety of quantitative and qualitative
                metrics as well as a suite of AI tools to provide you the most
                relevant market news and data in extremely low ({"<"}1s)
                latency. Don't miss a single momentum trade, market-moving news
                event, high-impact economic release, breaking corporate
                announcement, or geopolitical development. Stay ahead of the
                game by capitalizing on volatility, intraday moves, and maximize
                your returns with our low-latency squawk.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 border rounded p-3 m-3">
              <div className="d-flex flex-column justify-content-between align-items-center h-100">
                <h2 className="text-center">
                  <u>Real Time Feed</u>
                </h2>
                <h2 className="text-center">
                Macro & Micro S&P500 News
                </h2>
                <p className="fw-bold">Free forever</p>
                <p>Includes:</p>
                <ul>
                  <li>Trending / viral market news</li>
                  <li>Pre-market overview</li>
                  <li>Post-market overview</li>
                  <li>Top movers in S&P500</li>
                  <li>Unusual activity in S&P500</li>
                  <li>Additions / removals to S&P500</li>
                  <li>Occasional upgrade ads</li>
                </ul>
                <p className="text-center mt-auto">Provided as a courtesy to the trading community.</p>
                <ActivateFreeFeedButton />
              </div>
            </div>
            <div className="col-12 col-md-4 border rounded p-3 m-3">
              <PremiumPriceTile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
