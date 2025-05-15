import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SliderProductInfo() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="slider-image">
              <img
                src="../assets/p/Wal.png"
                data-zoom-image="../assets/p/Wal.png"
                className="img-fluid image_zoom_cls-1 blur-up lazyload"
                alt
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="slider-image">
              <img
                src="../assets/p/Wal.png"
                data-zoom-image="../assets/p/Wal.png"
                className="img-fluid image_zoom_cls-1 blur-up lazyload"
                alt
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="slider-image">
              <img
                src="../assets/p/Wal.png"
                data-zoom-image="../assets/p/Wal.png"
                className="img-fluid image_zoom_cls-1 blur-up lazyload"
                alt
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="slider-image">
              <img
                src="../assets/p/Wal.png"
                data-zoom-image="../assets/p/Wal.png"
                className="img-fluid image_zoom_cls-1 blur-up lazyload"
                alt
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="slider-image">
              <img
                src="../assets/p/Wal.png"
                data-zoom-image="../assets/p/Wal.png"
                className="img-fluid image_zoom_cls-1 blur-up lazyload"
                alt
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="slider-image">
              <img
                src="../assets/p/Wal.png"
                data-zoom-image="../assets/p/Wal.png"
                className="img-fluid image_zoom_cls-1 blur-up lazyload"
                alt
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="slider-image">
              <img
                src="../assets/p/Wal.png"
                data-zoom-image="../assets/p/Wal.png"
                className="img-fluid image_zoom_cls-1 blur-up lazyload"
                alt
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
