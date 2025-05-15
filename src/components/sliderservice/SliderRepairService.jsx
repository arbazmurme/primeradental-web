"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SliderRepairService() {
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ marginTop: "-15px" }}
      >
        <SwiperSlide>
          <div>
            <a href="/shop-category" className=" ">
              <div>
                <img
                  src="./assets/p/Airotors.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    border: "2px, solid, #2ec2c6",
                  }}
                  className="blur-up lazyload"
                  alt
                />
                {/* <h5>Kovident New Launches</h5> */}
              </div>
            </a>
            <h5
              style={{
                marginTop: "18px",
                color: "black",
                fontWeight: "600",
                textAlign: "",
              }}
            >
              Airotors
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/shop-category" className=" ">
              <div>
                <img
                  src="./assets/p/RVG _ Intra Oral Camera.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    border: "2px, solid, #2ec2c6",
                  }}
                  className="blur-up lazyload"
                  alt
                />
                {/* <h5>Kovident New Launches</h5> */}
              </div>
            </a>
            <h5
              style={{
                marginTop: "18px",
                color: "black",
                fontWeight: "600",
                marginLeft: "",
              }}
            >
              RVG / Oral Camera
            </h5>
            {/* <h5 style={{marginTop:"18px", color:"black", fontWeight:"600", marginLeft:"23px"}}>RVG / Intra Oral Camera</h5> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/shop-category" className=" ">
              <div>
                <img
                  src="./assets/p/Portable-x.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    border: "2px, solid, #2ec2c6",
                  }}
                  className="blur-up lazyload"
                  alt
                />
                {/* <h5>Kovident New Launches</h5> */}
              </div>
            </a>
            <h5
              style={{
                marginTop: "18px",
                color: "black",
                fontWeight: "600",
                marginLeft: "0px",
              }}
            >
              Portable X-Rays
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/shop-category" className=" ">
              <div>
                <img
                  src="./assets/p/Dental Chairs.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    border: "2px, solid, #2ec2c6",
                  }}
                  className="blur-up lazyload"
                  alt
                />
                {/* <h5>Kovident New Launches</h5> */}
              </div>
            </a>
            <h5
              style={{
                marginTop: "18px",
                color: "black",
                fontWeight: "600",
                textAlign: "",
              }}
            >
              Dental Chairs
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/shop-category" className=" ">
              <div>
                <img
                  src="./assets/p/Autoclaves.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    border: "2px, solid, #2ec2c6",
                  }}
                  className="blur-up lazyload"
                  alt
                />
                {/* <h5>Kovident New Launches</h5> */}
              </div>
            </a>
            <h5
              style={{
                marginTop: "18px",
                color: "black",
                fontWeight: "600",
                marginLeft: "8px",
              }}
            >
              Autoclaves
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/shop-category" className=" ">
              <div>
                <img
                  src="./assets/p/Light Cure Units.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    border: "2px, solid, #2ec2c6",
                  }}
                  className="blur-up lazyload"
                  alt
                />
                {/* <h5>Kovident New Launches</h5> */}
              </div>
            </a>
            <h5
              style={{
                marginTop: "18px",
                color: "black",
                fontWeight: "600",
                textAlign: "",
              }}
            >
              Light Cure Units
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/shop-category" className=" ">
              <div>
                <img
                  src="./assets/p/Physiodispensers.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    border: "2px, solid, #2ec2c6",
                  }}
                  className="blur-up lazyload"
                  alt
                />
                {/* <h5>Kovident New Launches</h5> */}
              </div>
            </a>
            <h5
              style={{
                marginTop: "18px",
                color: "black",
                fontWeight: "600",
                marginLeft: "11px",
              }}
            >
              Physiodispensers
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/shop-category" className=" ">
              <div>
                <img
                  src="./assets/p/Lasers-1.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    border: "2px, solid, #2ec2c6",
                  }}
                  className="blur-up lazyload"
                  alt
                />
                {/* <h5>Kovident New Launches</h5> */}
              </div>
            </a>
            <h5
              style={{
                marginTop: "18px",
                color: "black",
                fontWeight: "600",
                marginLeft: "12px",
              }}
            >
              Lasers
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/shop-category" className=" ">
              <div>
                <img
                  src="./assets/p/Endomotors.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    border: "2px, solid, #2ec2c6",
                  }}
                  className="blur-up lazyload"
                  alt
                />
                {/* <h5>Kovident New Launches</h5> */}
              </div>
            </a>
            <h5
              style={{
                marginTop: "18px",
                color: "black",
                fontWeight: "600",
                marginLeft: "12px",
              }}
            >
              Endomotors
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
