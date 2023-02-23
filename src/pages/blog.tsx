import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";

export const Head = () => (
  <SEO
    title={"Blog"}
    description={`The Squawk Market blog.`}
  />
);

export default function HomePage() {
  return (
    <Layout>
      <></>
    </Layout>
  );
}
