import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import { RiskDisclosure } from "../components/pages/risk-disclosure/RiskDisclosure";


export const Head = () => (
  <SEO
    title={"Risk Disclosure"}
    description={`Legal risk disclosure around Squawk Market.`}
  />
);

export default function RiskDisclosurePage() {
  return (
    <Layout>
      <RiskDisclosure />
    </Layout>
  );
}
