import * as React from "react";
import { FeedRowItem } from "./components/FeedRowItem";
import { Sidebar } from "../home/Sidebar";
import { useSupabaseSession } from "../../../hooks/useSupabaseSession";
import { Link } from "gatsby";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useFeedConnection } from "../../../hooks/useFeedConnection";
import { feedConfig } from "../../../config/feedConfig";
import { useEffect } from "react";

export function Dashboard() {
  const { isLoading, isLoggedIn, isPremium } = useAppSelector(
    (state) => state.auth
  );

  useSupabaseSession();
  const {setIsActivated, connectionRef, isError} = useFeedConnection();

  // on mount activate the connection
  useEffect(() => {
    setIsActivated(true);
  }, []);

  if (isLoading) {
    return (
      <div className="container my-5">
        <h1 className="text-center">Dashboard</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-7">
            <p className="text-center">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="container my-5">
        <h1 className="text-center">Dashboard</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 text-center">
            <p>You're not logged in. Log in to access the dashboard.</p>
            <p className="my-3">If you have an account:</p>
            <Link to="/login" className="btn btn-success">
              Login
            </Link>
            <p className="my-3">
              Or, start with a free 7 day trial to get full premium access to the dashboard:
            </p>
            <Link to="/subscribe" className="btn btn-success">
              Subscribe
            </Link>
            <p className="my-3">
              Not ready to subscribe? Return to the <Link to="/">home page</Link> to
              access our free market-wide feed.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isPremium) {
    return (
      <div className="container my-5">
        <h1 className="text-center">Dashboard</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 text-center">
            <p>
              You're not subscribed. The dashboard is for premium members only.
            </p>
            <Link to="/subscribe" className="btn btn-success">
              Subscribe
            </Link>
            <p className="my-3">Or, if you have a premium account already:</p>
            <Link to="/login" className="btn btn-success">
              Login
            </Link>
            <p className="my-3">
              Not ready to subscribe? Return to the <Link to="/">home page</Link> to
              access our free market-wide feed.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-xl-3 p-0 order-2 order-xl-1">
          <Sidebar />
        </div>
        <div className="sidebar-height col-12 col-xl-9 order-1 order-xl-2 overflow-auto">
          <h2 className="mt-2">Popular Feeds</h2>
          {feedConfig
            .filter((feed) => feed.isPopular)
            .filter((feed) => !feed.isComingSoon)
            .map((feed) => (
              <FeedRowItem isConnecting={false} connectionRef={connectionRef} isError={isError} key={feed.feedName} feed={feed} />
            ))}
          <h2 className="mt-5">Other Feeds</h2>
          {feedConfig
            .filter((feed) => !feed.isPopular)
            .filter((feed) => !feed.isComingSoon)
            .map((feed) => (
              <FeedRowItem isConnecting={false} connectionRef={connectionRef} isError={isError} key={feed.feedName} feed={feed} />
            ))}
          <h2 className="mt-5">Coming Soon</h2>
          {feedConfig
            .filter((feed) => feed.isComingSoon)
            .map((feed) => (
              <FeedRowItem isConnecting={false} connectionRef={connectionRef} isError={isError} key={feed.feedName} feed={feed} />
            ))}
        </div>
      </div>
    </div>
  );
}
