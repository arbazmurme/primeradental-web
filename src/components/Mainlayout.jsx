"use client";

import React, { useEffect } from "react";
import Footer from "./layout/Footer";
import Hadear from "./layout/Hadear";


const MainLayout = ({ children }) => {
  return (
    <>
      <Hadear />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
