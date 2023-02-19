import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
