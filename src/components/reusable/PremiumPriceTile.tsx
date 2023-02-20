import { Link } from "gatsby";
import * as React from "react";

export function PremiumPriceTile() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center">
        <u>Real Time Feed</u>
        <br />
        Full Access
      </h2>
      <p className="fw-bold">$50/month</p>
      <p>Includes:</p>
      <ul>
        <li>Ticker(s) of your choice</li>
        <li>Sectors(s) of your choice</li>
        <li>Top gainers / losers</li>
        <li>Oversold / overbought</li>
        <li>Downgrades / upgrades</li>
        <li>Most volatile</li>
        <li>Most active</li>
      </ul>
      <p>All feeds completely customizable and configurable.</p>
      <Link to="/subscribe" className="btn btn-success">Subscribe</Link>
    </div>
  );
}
