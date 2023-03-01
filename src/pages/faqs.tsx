import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import { FAQs } from "../components/reusable/FAQs";

export const Head = () => (
  <SEO
    title={"FAQs"}
    description={`Frequently asked questions around Squawk Market.`}
  />
);

export default function PricingPage() {
  return (
    <Layout>
      <FAQs isMainPage={true} />
    </Layout>
  );
}
