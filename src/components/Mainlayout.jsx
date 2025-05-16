"use client";

import React, { useEffect } from "react";
import Footer from "./layout/Footer";
import Hadear from "./layout/Hadear";
import { getMain_home_Slider } from "@/redux/slider/sliderSlice";
import { useDispatch } from "react-redux";
import { getCategory } from "@/redux/category/categorySlice";


const MainLayout = ({ children }) => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMain_home_Slider());
    dispatch(getCategory());
  }, []);

  return (
    <>
      <Hadear />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
