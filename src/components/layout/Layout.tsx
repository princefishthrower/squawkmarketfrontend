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
      <audio id="audio" playsInline={true} muted={true}/>
    </>
  );
};

export default Layout;
