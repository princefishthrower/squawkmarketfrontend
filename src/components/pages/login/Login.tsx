import * as React from "react";
import { useState } from "react";
import { sendMagicLink } from "../../../utils/sendMagicLink";

export function Login() {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSendMagicLink = async () => {
    if (!email) {
      return;
    }
    setIsSending(true);
    setIsError(false);
    const error = await sendMagicLink(email);
    if (error) {
      console.error(error);
      setIsSending(false);
      setIsError(true);
      return;
    }
    setIsComplete(true);
    setIsSending(false);
  };

  const resolveButtonText = () => {
    if (isSending) {
      return "Sending...";
    }
    if (isComplete) {
      return "Sent! Check Your Email!";
    }
    return "Send Magic Link";
  }

  const buttonText = resolveButtonText();

  return (
    <div className="container my-5">
      <h1 className="text-center">Login</h1>
      <p className="text-center">Login to Squawk Market.</p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 text-center">
          <input
            disabled={isSending || isComplete}
            type="text"
            className="form-control w-auto mx-auto"
            placeholder="gordon@gekko.com"
            onChange={(event) => setEmail(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onSendMagicLink();
              }
            }}
          />
          <button
            disabled={isSending || isComplete}
            onClick={onSendMagicLink}
            className="btn btn-success mt-3"
          >
            {buttonText}
          </button>
          {isError && (
            <p className="text-danger">
              There was an error sending your magic link. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
