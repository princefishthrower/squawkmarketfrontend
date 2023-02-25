import * as React from "react";

export interface IActivateButtonProps {
  className: string;
  isComingSoon: boolean;
  isActivated: boolean;
  setIsActivated: (isActivated: boolean) => void;
}

export function ActivateButton(props: IActivateButtonProps) {
  const { className, isComingSoon, isActivated, setIsActivated } = props;

  if (isComingSoon) {
    return (
      <button className="ms-auto btn btn-success" disabled>
        Coming Soon
      </button>
    );
  }

  const buttonText = isActivated ? (
    <>{"\u2588"} Disconnect</>
  ) : (
    <>{"\u2B80"} Connect</>
  );
  return (
    <button
      // onClick={() => setIsActivated(!isActivated)}
      onClickCapture={() => setIsActivated(!isActivated)}
      className={className}
    >
      {buttonText}
    </button>
  );
}
