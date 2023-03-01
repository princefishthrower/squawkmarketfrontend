import * as React from "react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { playLatestItem } from "../../../../utils/playLatestItem";
import { MixpanelConstants } from "../../../../constants/MixpanelConstants";
import mixpanel from "mixpanel-browser";

export interface IActivateButtonProps {
  feed: string;
  className: string;
  isComingSoon: boolean;
  isConnecting: boolean;
  isActivated: boolean;
  isError: boolean;
  setIsActivated: (isActivated: boolean) => void;
}

export function ActivateButton(props: IActivateButtonProps) {
  const {
    feed,
    className,
    isComingSoon,
    isActivated,
    isError,
    setIsActivated,
  } = props;
  const { items } = useAppSelector((state) => state.feed);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isFirstMobileButtonTapped, setIsFirstMobileButtonTapped] =
    useState(false);
  const [isSecondMobileButtonTapped, setIsSecondMobileButtonTapped] =
    useState(false);

  useEffect(() => {
    if (isActivated) {
      setIsConnecting(false);
    }
  }, [isActivated]);

  const onClickConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsActivated(true);
    }, 500);

    // track in mixpanel with feed name
    mixpanel.track(MixpanelConstants.USER_ACTIVATES_FEED, {
      feed,
    });
  };

  const onClickDisconnect = () => {
    setIsConnecting(false);
    setIsActivated(false);
  };

  const resolveButtonText = () => {
    if (isConnecting) {
      return "Connecting...";
    }
    if (isActivated) {
      return "■ Disconnect";
    }
    return "▶ Connect";
  };

  const resolveMobileButtonText = () => {
    if (isConnecting) {
      return "Activating...";
    }
    if (isActivated && isSecondMobileButtonTapped) {
      return "■ Disconnect";
    }
    return "▶ Connect";
  };

  const buttonText = resolveButtonText();
  const mobileButtonText = resolveMobileButtonText();

  const onClick =
    buttonText === "▶ Connect" || buttonText === "Connecting..."
      ? onClickConnect
      : onClickDisconnect;

  if (isComingSoon) {
    return (
      <button className="ms-auto btn btn-success" disabled>
        Coming Soon
      </button>
    );
  }

  return (
    <>
      {/* desktop - a single button / tap is fine */}
      <button
        disabled={isConnecting}
        onClick={onClick}
        className={`${className} d-none d-md-block`}
      >
        {buttonText}
      </button>
      {/* on mobile we need two taps, first show a 'activate' button */}
      {!isFirstMobileButtonTapped && (
        <button
          onClick={() => {
            setIsFirstMobileButtonTapped(true);
            onClick();
          }}
          className={`${className} d-block d-md-none`}
        >
          Activate
        </button>
      )}
      {/* on mobile we need two taps, second show the standard 'connect' button */}
      {isFirstMobileButtonTapped && (
        <button
          disabled={isConnecting}
          onClick={() => {
            setIsSecondMobileButtonTapped(true);
            playLatestItem(items);
          }}
          className={`${className} d-block d-md-none`}
        >
          {mobileButtonText}
        </button>
      )}
      {isError && (
        <div className="text-danger mb-2">
          Error connecting. Please try again.
        </div>
      )}
    </>
  );
}
