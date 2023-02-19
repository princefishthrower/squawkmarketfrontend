import * as React from "react";
import { ActivateFeedButton } from "../../reusable/ActivateFeedButton";
import { Logo } from "../../reusable/Logo";
import { PremiumPriceTile } from "../../reusable/PremiumPriceTile";

export function Home() {
  return (
    <div className="container">
      <div className="text-center">
        <Logo size={250} />
      </div>
      <h1 className="text-center font-monospace fw-bold">Squawk Market</h1>
      <h2 className="text-center">
        The best real-time & market-wide audio feed.
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-7">
          <p className="text-center">
            Our squawk uses a variety of quantitative and qualitative metrics as
            well as a suite of AI tools to provide you the most relevant market
            data in extremely low ({"<"}1s) latency. Don't miss a single
            momentum trade, market-moving news event, high-impact economic
            release, breaking corporate announcement, or geopolitical
            development. Stay ahead of the game by capitalizing on volatility,
            intraday moves, and maximize your returns with our low-latency
            squawk.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 border rounded p-3 m-3">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center">
              <u>Real Time Feed</u>
              <br />
              Macro S&P500 News
            </h2>
            <p className="fw-bold">Free forever</p>
            <p>Includes:</p>
            <ul>
              <li>Economic prints (CPI, Fed, etc.)</li>
              <li>Additions / removals to S&P500</li>
              <li>Unusual intraday movements</li>
              <li>Trending / viral news</li>
              <li>Downgrades / upgrades</li>
              <li>Major moves</li>
              <li>Unusual activity</li>
            </ul>
            <p>Provided as a courtesy to the trading community.</p>
            <ActivateFeedButton />
          </div>
        </div>
        <div className="col-12 col-md-4 border rounded p-3 m-3">
          <PremiumPriceTile />
        </div>
      </div>
    </div>
  );
}
