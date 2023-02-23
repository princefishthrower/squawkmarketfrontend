import * as React from "react";
import { ActivateButton } from "./ActivateButton";
import { SymbolInput } from "./SymbolInput";
import { useState } from "react";
import { useConnectToFeedByName } from "../../../../hooks/useConnectToFeedByName";
import { HubConnection } from "@microsoft/signalr";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { IConsumableQueue } from "../../../../interfaces/IConsumableQueue";
import { IFeedConfigItem } from "../../../../interfaces/IFeedConfigItem";

export interface IFeedRowItemProps {
  feed: IFeedConfigItem;
  queueRef: React.MutableRefObject<IConsumableQueue>;
  connectionRef: React.MutableRefObject<HubConnection>
}

export function FeedRowItem(props: IFeedRowItemProps) {
  const { feed, queueRef, connectionRef } = props;
  const { volume } = useAppSelector(state => state.feed)
  const dispatch = useAppDispatch();
  const [symbol, setSymbol] = useState<string>("");
  const [isActivated, setIsActivated] = useState<boolean>(false);

  useConnectToFeedByName(queueRef, volume, connectionRef, feed.feedName, isActivated, dispatch)

  return (
    <>
      <div className="col-12 my-4">
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-column">
            <p className={feed.isComingSoon ? "m-0 fw-bold text-muted" : "m-0 fw-bold"}>{feed.title}</p>
            <p className="m-0 text-muted">{feed.subtitle}</p>
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
              <SymbolInput value={symbol} onChange={(symbol) => setSymbol(symbol)}/>
            </>
          )}
          {/* TODO: frequency */}
          {/* <FrequencyDropdown /> */}
          {/* TODO: minimum percent */}
          {/* <MinimumPercentDropdown /> */}
          <ActivateButton className="ms-auto btn btn-success" isComingSoon={feed.isComingSoon} isActivated={isActivated} setIsActivated={setIsActivated} />
        </div>
      </div>
      <hr className="m-0" />
    </>
  );
}
