"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SliderBanner({ mainHomeSliderTotal }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {mainHomeSliderTotal && mainHomeSliderTotal.length > 0 ? (
        mainHomeSliderTotal.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="w-full h-auto">
              <img
                src={item.DeskImg}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <div className="w-full text-center p-10 bg-gray-100">
            No slider data available.
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
