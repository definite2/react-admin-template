import React from "react";
import { StickyHeader } from "components/Header";
import Sidebar from "components/Sidebar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <StickyHeader />
      <Sidebar>{children}</Sidebar>
      <Footer />
    </>
  );
};
export default Layout;
