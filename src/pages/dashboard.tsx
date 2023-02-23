import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import { Dashboard } from "../components/pages/dashboard/Dashboard";

export const Head = () => (
  <SEO
    title={"Dashboard"}
    description={`All real-time feeds available from Squawk Market.`}
  />
);

export default function DashboardPage() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
