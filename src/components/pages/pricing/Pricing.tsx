import * as React from "react";
import { PremiumPriceTile } from "../../reusable/PremiumPriceTile";

export function Pricing() {
  return (
    <div className="my-5">
      <h1 className="text-center">Pricing</h1>
      <p className="text-center">
        A single tier pricing plan. Subscribe to unlock everything.
      </p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-7">
          <p className="text-center">
            Compare to competitor squawks which have monthly rates{" "}
            <i>
              <b>200-300% more expensive</b>
            </i>{" "}
            than ours! That's highway robbery!
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
      <div className="col-12 col-md-4 border rounded p-3 m-3">
          <PremiumPriceTile />
        </div>
      </div>
    </div>
  );
}
