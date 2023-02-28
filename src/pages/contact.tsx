import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import Contact from "../components/pages/contacts/Contact";

export const Head = () => (
  <SEO
    title={"Contact"}
    description={`Contact the Squawk Market team.`}
  />
);

export default function PricingPage() {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
}
