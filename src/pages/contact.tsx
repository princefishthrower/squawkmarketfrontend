import * as React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/reusable/SEO";
import { Contact } from "../components/pages/contact/Contact";

export const Head = () => (
  <SEO
    title={"Home"}
    description={`${process.env.GATSBY_PRODUCT_NAME} scans and screens the entire options market daily so you can compare and contrast options with a data-driven approach at a market-wide scale.`}
  />
);

export default function ContactPage() {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
}
