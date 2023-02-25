import * as React from "react";
import { useEffect, useState } from "react";

export interface IActivateButtonProps {
  className: string;
  isComingSoon: boolean;
  isConnecting: boolean;
  isActivated: boolean;
  setIsActivated: (isActivated: boolean) => void;
}

export function ActivateButton(props: IActivateButtonProps) {
  const { className, isComingSoon, isActivated, setIsActivated } = props;
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMobileTapped, setIsMobileTapped] = useState(false);

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

  const buttonText = resolveButtonText();

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
      {!isMobileTapped && (
        <button
          onClick={() => setIsMobileTapped(true)}
          className={`${className} d-block d-md-none`}
        >
          Activate
        </button>
      )}
      {/* on mobile we need two taps, second show a 'connect' button */}
      {isMobileTapped && (
        <button
          disabled={isConnecting}
          onClick={onClickButton}
          className={`${className} d-block d-md-none`}
        >
          {buttonText}
        </button>
      )}
    </>
  );
}
