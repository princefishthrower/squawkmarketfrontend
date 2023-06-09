import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import { Pricing } from "../components/pages/pricing/Pricing";

export const Head = () => (
  <SEO
    title={"Pricing"}
    description={`Squawk Market's single tier pricing.`}
  />
);

export default function PricingPage() {
  return (
    <Layout>
      <Pricing />
    </Layout>
  );
}
