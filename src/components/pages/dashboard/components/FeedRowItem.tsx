import * as React from "react";
import { ActivateButton } from "./ActivateButton";
import { SymbolInput } from "./SymbolInput";
import { useState } from "react";
import { useConnectToFeedByName } from "../../../../hooks/useConnectToFeedByName";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { IFeedConfigItem } from "../../../../interfaces/IFeedConfigItem";

export interface IFeedRowItemProps {
  isHubStartError: boolean;
  feed: IFeedConfigItem;
}

export function FeedRowItem(props: IFeedRowItemProps) {
  const { isHubStartError, feed } = props;
  const dispatch = useAppDispatch();
  const [symbol, setSymbol] = useState<string>("");
  const [shouldStartConnection, setShouldStartConnection] =
    useState<boolean>(false);

  useConnectToFeedByName(feed.feedName, shouldStartConnection, dispatch);

  const className =
    feed.feedName === "Custom"
      ? "col-12 my-4 user-select-none pe-none"
      : "col-12 my-4";

  return (
    <>
      <div className={className}>
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-column">
            <p
              className={
                feed.isComingSoon ? "m-0 fw-bold text-muted" : "m-0 fw-bold"
              }
            >
              {feed.title}
            </p>
            <p className="my-3 text-muted">{feed.subtitle}</p>
            <div>
              <small className="badge rounded-pill bg-secondary font-monospace fw-lighter">
                feed: {feed.feedName}
              </small>
            </div>
          </div>
          {feed.hasSymbolInput && (
            <>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                  <div className="form-check mx-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="price"
                    />
                    <label className="form-check-label" htmlFor="price">
                      Price
                    </label>
                  </div>
                  <div className="form-check mx-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="volume"
                    />
                    <label className="form-check-label" htmlFor="volume">
                      Volume
                    </label>
                  </div>
                  <div className="form-check mx-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="options"
                    />
                    <label className="form-check-label" htmlFor="options">
                      Options
                    </label>
                  </div>
                  <div className="form-check mx-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="volatility"
                    />
                    <label className="form-check-label" htmlFor="volatility">
                      Volatility
                    </label>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="form-check mx-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="insider"
                    />
                    <label className="form-check-label" htmlFor="insider">
                      Insider
                    </label>
                  </div>
                  <div className="form-check mx-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="analysts"
                    />
                    <label className="form-check-label" htmlFor="analysts">
                      Analysts
                    </label>
                  </div>
                  <div className="form-check mx-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="earnings"
                    />
                    <label className="form-check-label" htmlFor="earnings">
                      Earnings
                    </label>
                  </div>
                  <div className="form-check mx-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="earnings"
                    />
                    <label className="form-check-label" htmlFor="earnings">
                      Earnings
                    </label>
                  </div>
                </div>
              </div>
              <SymbolInput
                value={symbol}
                onChange={(symbol) => setSymbol(symbol)}
              />
            </>
          )}
          {/* TODO: frequency */}
          {/* <FrequencyDropdown /> */}
          {/* TODO: minimum percent */}
          {/* <MinimumPercentDropdown /> */}
          <ActivateButton
            feed={feed.feedName}
            className="ms-auto"
            isComingSoon={false}
            shouldStartConnection={shouldStartConnection}
            setShouldStartConnection={setShouldStartConnection}
            isHubStartError={isHubStartError}
          />
        </div>
      </div>
      <hr className="m-0" />
    </>
  );
}
