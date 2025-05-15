"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function SliderMostBookedServices() {
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
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ marginTop: "-6px" }}
      >
        <SwiperSlide>
          <div
            className="slick-slide slick-cloned"
            style={{ width: 289 }}
            tabIndex={-1}
            data-slick-index={-4}
            aria-hidden="true"
          >
            <div className="blog-box">
              <div className="blog-box-image">
                <Link
                  href="/service"
                  className="blog-image bg-size blur-up lazyloaded"
                  tabIndex={-1}
                  style={{
                    backgroundImage: 'url("../assets/p/Light Cure Units.webp")',
                    borderRadius: "5px",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <img
                    src="../assets/p/Light Cure Units.webp"
                    className="bg-img blur-up lazyload"
                    alt="blog"
                    style={{ display: "none", borderRadius: "25px" }}
                  />
                </Link>
              </div>
              <Link href="/service" className="blog-detail" tabIndex={-1}>
                <h6>1 Sec light cure unit + </h6>
                <h5>₹xxxx</h5>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slick-slide slick-cloned"
            style={{ width: 289 }}
            tabIndex={-1}
            data-slick-index={-4}
            aria-hidden="true"
          >
            <div className="blog-box">
              <div className="blog-box-image">
                <Link
                  href="/service"
                  className="blog-image bg-size blur-up lazyloaded"
                  tabIndex={-1}
                  style={{
                    backgroundImage: 'url("../assets/p/Dental Chairs.webp")',
                    borderRadius: "5px",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <img
                    src="../assets/p/Dental Chairs.webp"
                    className="bg-img blur-up lazyload"
                    alt="blog"
                    style={{ display: "none" }}
                  />
                </Link>
              </div>
              <Link href="/service" className="blog-detail" tabIndex={-1}>
                <h6>1 Sec light cure unit + </h6>
                <h5>₹xxxx</h5>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slick-slide slick-cloned"
            style={{ width: 289 }}
            tabIndex={-1}
            data-slick-index={-4}
            aria-hidden="true"
          >
            <div className="blog-box">
              <div className="blog-box-image">
                <Link
                  href="/service"
                  className="blog-image bg-size blur-up lazyloaded"
                  tabIndex={-1}
                  style={{
                    backgroundImage: 'url("../assets/p/Endomotors.webp")',
                    borderRadius: "5px",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <img
                    src="../assets/p/Endomotors.webp"
                    className="bg-img blur-up lazyload"
                    alt="blog"
                    style={{ display: "none" }}
                  />
                </Link>
              </div>
              <Link href="/service" className="blog-detail" tabIndex={-1}>
                <h6>1 Sec light cure unit + </h6>
                <h5>₹xxxx</h5>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slick-slide slick-cloned"
            style={{ width: 289 }}
            tabIndex={-1}
            data-slick-index={-4}
            aria-hidden="true"
          >
            <div className="blog-box">
              <div className="blog-box-image">
                <Link
                  href="/service"
                  className="blog-image bg-size blur-up lazyloaded"
                  tabIndex={-1}
                  style={{
                    backgroundImage: 'url("../assets/p/Lasers-1.webp")',
                    borderRadius: "5px",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <img
                    src="../assets/p/Lasers-1.webp"
                    className="bg-img blur-up lazyload"
                    alt="blog"
                    style={{ display: "none" }}
                  />
                </Link>
              </div>
              <Link href="/service" className="blog-detail" tabIndex={-1}>
                <h6>1 Sec light cure unit + </h6>
                <h5>₹xxxx</h5>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slick-slide slick-cloned"
            style={{ width: 289 }}
            tabIndex={-1}
            data-slick-index={-4}
            aria-hidden="true"
          >
            <div className="blog-box">
              <div className="blog-box-image">
                <Link
                  href="/service"
                  className="blog-image bg-size blur-up lazyloaded"
                  tabIndex={-1}
                  style={{
                    backgroundImage: 'url("../assets/p/Physiodispensers.webp")',
                    borderRadius: "5px",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  <img
                    src="../assets/p/Physiodispensers.webp"
                    className="bg-img blur-up lazyload"
                    alt="blog"
                    style={{ display: "none" }}
                  />
                </Link>
              </div>
              <Link href="/service" className="blog-detail" tabIndex={-1}>
                <h6>1 Sec light cure unit + </h6>
                <h5>₹xxxx</h5>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
