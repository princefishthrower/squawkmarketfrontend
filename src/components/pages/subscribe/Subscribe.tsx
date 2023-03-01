import * as React from "react";
import { PremiumPriceTile } from "../../reusable/PremiumPriceTile";
import { FAQs } from "../../reusable/FAQs";

export function Subscribe() {
  return (
    <div className="my-5">
      <h1 className="text-center">Subscribe</h1>
      <p className="text-center">
        Subscribe to the best real-time & market-wide audio feed.
      </p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 border rounded p-3 m-3">
          <PremiumPriceTile />
        </div>
      </div>
      <FAQs isMainPage={false}/>
    </div>
  );
}
