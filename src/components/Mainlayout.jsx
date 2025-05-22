"use client";

import React, { useEffect } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header"; // Fixed typo from "Hadear" to "Header"
import { getMain_home_Slider } from "@/redux/slider/sliderSlice";
import { useDispatch } from "react-redux";
import { getCategory } from "@/redux/category/categorySlice";
import {
  getHotProducts,
  getTrendingProducts,
} from "@/redux/product/productSlice";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch all initial data fetching actions
    dispatch(getHotProducts());
    dispatch(getMain_home_Slider());
    dispatch(getCategory());
    dispatch(getTrendingProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;