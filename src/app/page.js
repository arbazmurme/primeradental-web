import React from "react";
import Banner from "@/main-pages/home/Banner";
import TopCategory from "@/main-pages/home/TopCategory";
import WeeklyDiscounts from "@/main-pages/home/WeeklyDiscounts";
import NewAndNoteworthy from "@/main-pages/home/NewAndNoteworthy";
import AllProduct from "@/main-pages/home/AllProduct";
import Delivery from "@/main-pages/home/Delivery";
import HomeService from "@/main-pages/home/HomeService";
import HomeBanner from "@/main-pages/home/HomeBanner";
import MostBookedServices from "@/main-pages/home/MostBookedServices";
import HotSelling from "@/main-pages/home/HotSelling";
import LowestPrices from "@/main-pages/home/LowestPrices";

function page() {
  return (
    <div>
      <Banner />
      <TopCategory />
      <WeeklyDiscounts />
      <NewAndNoteworthy />
      <AllProduct />
      <Delivery />
      <HomeService />
      <HomeBanner />
      <MostBookedServices />
      <HotSelling />
      <LowestPrices />
    </div>
  );
}

export default page;
