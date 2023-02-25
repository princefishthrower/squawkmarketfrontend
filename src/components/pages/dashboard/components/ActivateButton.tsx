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
    <button
      disabled={isConnecting}
      onClick={onClickButton}
      className={className}
    >
      {buttonText}
    </button>
  );
}
