import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function SliderHomeService1() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ marginTop: "-15px" }}
      >
        <SwiperSlide>
          <div className="category-slider arrow-slidercol-xxl-2 col-lg-2 col-md-3 col-3  p-1">
            <div>
              <Link href="/service" />
              <div
                className="shop-category-box border-0 wow fadeIn"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <Link href="/service" />
                <Link href="/service">
                  <img
                    src="./assets/p/BackgroundImages/5.webp"
                    className="img-fluid1 blur-up lazyloaded"
                    alt="img"
                    style={{ width: "200px", height: "200px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="category-slider arrow-slidercol-xxl-2 col-lg-2 col-md-3 col-3  p-1">
            <div>
              <Link href="/service" />
              <div
                className="shop-category-box border-0 wow fadeIn"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <Link href="/service" />
                <Link href="/service">
                  <img
                    src="./assets/p/BackgroundImages/6.webp"
                    className="img-fluid1 blur-up lazyloaded"
                    alt="img"
                    style={{ width: "200px", height: "200px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="category-slider arrow-slidercol-xxl-2 col-lg-2 col-md-3 col-3  p-1">
            <div>
              <Link href="/service" />
              <div
                className="shop-category-box border-0 wow fadeIn"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <Link href="/service" />
                <Link href="/service">
                  <img
                    src="./assets/p/BackgroundImages/7.webp"
                    className="img-fluid1 blur-up lazyloaded"
                    alt="img"
                    style={{ width: "200px", height: "200px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
