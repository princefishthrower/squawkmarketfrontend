import * as React from "react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { playLatestItem } from "../../../../utils/playLatestItem";

export interface IActivateButtonProps {
  className: string;
  isComingSoon: boolean;
  isConnecting: boolean;
  isActivated: boolean;
  setIsActivated: (isActivated: boolean) => void;
}

export function ActivateButton(props: IActivateButtonProps) {
  const { className, isComingSoon, isActivated, setIsActivated } = props;
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

  if (isComingSoon) {
    return (
      <button className="ms-auto btn btn-success" disabled>
        Coming Soon
      </button>
    );
  }

  const onClickButton = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsActivated(!isActivated);
    }, 500);
  };

  const resolveButtonText = () => {
    if (isConnecting) {
      return <>Connecting...</>;
    }
    if (isActivated) {
      return <>■ Disconnect</>;
    }
    return <>▶ Connect</>;
  };

  const resolveMobileButtonText = () => {
    if (isConnecting) {
      return <>Activating...</>;
    }
    if (isActivated && isSecondMobileButtonTapped) {
      return <>■ Disconnect</>;
    }
    return <>▶ Connect</>;
  }

  const buttonText = resolveButtonText();
  const mobileButtonText = resolveMobileButtonText();
    

  return (
    <>
      {/* desktop - a single button / tap is fine */}
      <button
        disabled={isConnecting}
        onClick={onClickButton}
        className={`${className} d-none d-md-block`}
      >
        {buttonText}
      </button>
      {/* on mobile we need two taps, first show a 'activate' button */}
      {!isFirstMobileButtonTapped && (
        <button
          onClick={() => {
            setIsFirstMobileButtonTapped(true);
            onClickButton();
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
    </>
  );
}
