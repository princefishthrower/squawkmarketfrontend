import { Link } from "gatsby";
import * as React from "react";

export function PremiumPriceTile() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center">
        <u>Real Time Feed</u>
      </h2>
      <h2 className="text-center">
      Full Access
      </h2>
      <p className="fw-bold">$50/month</p>
      <p>Includes:</p>
      <ul>
        <li>Economic prints (CPI, Fed, etc.)</li>
        <li>Ticker(s) of your choice</li>
        <li>Top gainers / losers</li>
        <li>Oversold / overbought</li>
        <li>Downgrades / upgrades</li>
        <li>Most active / volatile</li>
        <li>Coporate actions / insider trading</li>
        <li>Earnings reports</li>
        <li>Cryptocurrency market updates</li>
        <li>Commodity prices and trends</li>
        <li>No ads</li>
        <li>Much, much more...</li>
      </ul>
      <p className="text-center">All feeds completely customizable and configurable.</p>
      <Link to="/subscribe" className="btn btn-success">Subscribe</Link>
    </div>
  );
}
