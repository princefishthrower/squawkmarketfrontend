import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useMixpanel } from "../../hooks/useMixpanel";

const Layout = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  useMixpanel();

  return (
    <>
      <Header />
      {children}
      <Footer />
      <audio id="audio" playsInline={true} muted={true} />
    </>
  );
};

export default Layout;
