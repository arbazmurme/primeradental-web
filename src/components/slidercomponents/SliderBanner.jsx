"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SliderBanner() {
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
      >
        <SwiperSlide>
          <div className=" active">
            <img src="/assets/p/Banner-5.webp" className="d-block w-100" alt="..." />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" active">
            <img src="/assets/p/Banner-6.webp" className="d-block w-100" alt="..." />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" active">
            <img src="/assets/p/Banner-4.webp" className="d-block w-100" alt="..." />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src="/assets/p/Banner-3.webp" className="d-block w-100" alt="..." />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
