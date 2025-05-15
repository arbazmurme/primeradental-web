"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SliderNewAndNoteworthy() {
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
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ marginTop: "-10px" }}
      >
        <SwiperSlide>
          <div>
            <div className="offer-banner hover-effect">
              <img
                src="./assets/p/Lasers.webp"
                className="img-fluid bg-img blur-up lazyload"
                alt=""
              />

              <div className="offer-box">
                <button
                  className="btn-category btn theme-bg-color text-white"
                  style={{ color: "#FF7074" }}
                >
                  Portable X-Rays
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="offer-banner hover-effect">
              <img
                src="./assets/p/Lasers.webp"
                className="img-fluid bg-img blur-up lazyload"
                alt=""
              />

              <div className="offer-box">
                <button
                  className="btn-category btn theme-bg-color text-white"
                  style={{ color: "#FF7074" }}
                >
                  Equipment Setup
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="offer-banner hover-effect">
              <img
                src="./assets/p/Lasers.webp"
                className="img-fluid bg-img blur-up lazyload"
                alt=""
              />

              <div className="offer-box">
                <button
                  className="btn-category btn theme-bg-color text-white"
                  style={{ color: "#FF7074" }}
                >
                  Physiodispensers
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="offer-banner hover-effect">
              <img
                src="./assets/p/Lasers.webp"
                className="img-fluid bg-img blur-up lazyload"
                alt=""
              />

              <div className="offer-box">
                <button
                  className="btn-category btn theme-bg-color text-white"
                  style={{ color: "#FF7074" }}
                >
                  Portable X-Rays
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
