import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import { Upgrade } from "../components/pages/upgrade/Upgrade";

export const Head = () => (
  <SEO
    title={"Upgrade"}
    description={`Upgrade your subscription to the best real-time & market-wide audio feed.`}
  />
);

export default function HomePage() {
  return (
    <Layout>
      <Upgrade />
    </Layout>
  );
}
