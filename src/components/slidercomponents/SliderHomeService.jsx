"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SliderHomeService1 from "./SliderHomeService1";
import Link from "next/link";

export default function SliderHomeService() {
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
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ marginTop: "-6px" }}
      >
        <section className="category-section-2" style={{ marginTop: "-50px" }}>
          <div className="row mt-2">
            <div className="col-12 d-flex flex-wrap">
              {["1", "2", "3", "4"].map((index) => (
                <SwiperSlide key={index}>
                  <div className="category-slider col-xxl-2 col-lg-2 col-md-3 col-3 p-1">
                    <div>
                      <Link href="/service">
                        <div className="shop-category-box border-0">
                          <img
                            src={`./assets/p/BackgroundImages/${index}.webp`}
                            className="img-fluid blur-up lazyloaded"
                            alt={`Category`}
                            style={{ width: "200px", height: "200px" }}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </section>
        <SliderHomeService1 />
      </Swiper>
    </>
  );
}
