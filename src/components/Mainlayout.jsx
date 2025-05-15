"use client";

import React, { useEffect } from "react";
import Header from "./layout/Hadear";
import Footer from "./layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
