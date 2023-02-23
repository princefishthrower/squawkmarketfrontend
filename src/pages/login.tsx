import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import { Login } from "../components/pages/login/Login";

export const Head = () => (
  <SEO
    title={"Login"}
    description={`Login to Squawk Market.`}
  />
);

export default function PricingPage() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}
