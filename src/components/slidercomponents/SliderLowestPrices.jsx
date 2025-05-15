"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SliderLowestPrices() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        // }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 5,
            spaceBetween: 280,
          },
          "@0.75": {
            slidesPerView: 5,
            spaceBetween: 280,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 280,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 280,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper week"
      >
        <SwiperSlide>
          <div className="service-box">
            <div className="service-image">
              <img src="./assets/p/icon.png" className="blur-up lazyload" alt="icon.png" />
            </div>
            <div className="service-detail">
              <h5>Lowest Prices In The Market</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-box">
            <div className="service-image">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                className="blur-up lazyload"
                alt="delivery.svg"
              />
            </div>
            <div className="service-detail">
              <h5> Free Delivery Above ₹1,999</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-box">
            <div className="service-image">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                className="blur-up lazyload"
                alt="discount.svg"
              />
            </div>
            <div className="service-detail">
              <h5>24/7 Support Available</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="service-box">
            <div className="service-image">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                className="blur-up lazyload"
                alt="market.svg"
              />
            </div>
            <div className="service-detail">
              <h5>Multiple Safe Payment Modes</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
