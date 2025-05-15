"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HotSelling() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ marginTop: "20px" }}
      >
        <SwiperSlide>
          <div className="container-fluid-lg" style={{ marginTop: "20px" }}>
            <img
              src="./assets/p/banner.jpg"
              style={{ borderRadius: "10px" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid-lg" style={{ marginTop: "20px" }}>
            <img
              src="./assets/p/India's top RVG Sensors.webp"
              style={{ borderRadius: "10px" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
