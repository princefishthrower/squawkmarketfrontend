import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import { Home } from "../components/pages/home/Home";

const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default IndexPage;

export const Head = () => (
  <SEO
    title={"Home"}
    description={`The best real-time & market-wide audio feed.`}
  />
);
