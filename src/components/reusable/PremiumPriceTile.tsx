import * as React from "react";
import { MixpanelConstants } from "../../constants/MixpanelConstants";
import mixpanel from "mixpanel-browser";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Link } from "gatsby";
import { useSupabaseSession } from "../../hooks/useSupabaseSession";

export function PremiumPriceTile() {
  const { isPremium } = useAppSelector((state) => state.auth);

  useSupabaseSession();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center">
        <u>Access to all Real-Time Feeds</u>
      </h2>
      <p className="fw-bold">7 days free, then $50/month</p>
      <p className="text-center">
        All feeds toggleable and streamed in real-time.
      </p>
      {isPremium && (
        <>
          <p className="text-center">You're already subscribed.</p>
          <Link to="/dashboard" className="mb-3 btn btn-success">
            Go To Dashboard
          </Link>
        </>
      )}
      {!isPremium && (
        <a
          href={process.env.GATSBY_STRIPE_PAYMENT_URL}
          className="mb-3 btn btn-success"
          onClick={() =>
            mixpanel.track(MixpanelConstants.USER_CLICKS_SUBSCRIBE)
          }
        >
          Subscribe
        </a>
      )}
      <p>Includes:</p>
      <ul>
        {/* <li>Economic prints (CPI, Fed, etc.)</li> */}
        {/* <li>Instrument(s) and symbol(s) of your choice</li> */}
        <li>Market-wide feed</li>
        <li>Top gainers</li>
        <li>Top losers</li>
        <li>Oversold</li>
        <li>Overbought</li>
        <li>Most active</li>
        <li>Most volatile</li>
        <li>52 week highs</li>
        <li>52 week lows</li>
        <li>Unusual volume</li>
        <li>Most volatile</li>
        {/* <li>Corporate actions / insider trading</li> */}
        {/* <li>Earnings reports</li> */}
        {/* <li>Cryptocurrency market updates</li> */}
        {/* <li>Commodity prices and trends</li> */}
        <li>No ads</li>
        <li>Many more coming soon...</li>
        {/* <li>Activate / deactivate feeds, frequencies, thresholds</li> */}
      </ul>
    </div>
  );
}
