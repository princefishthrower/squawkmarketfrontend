import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import { Subscribe } from "../components/pages/subscribe/Subscribe";

export const Head = () => (
  <SEO
    title={"Subscribe"}
    description={`Subscribe to our full market wide squawk - the best real-time & market-wide audio feed.`}
  />
);

export default function HomePage() {
  return (
    <Layout>
      <Subscribe />
    </Layout>
  );
}
