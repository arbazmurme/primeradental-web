import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SliderHomeServices() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500000,
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
            slidesPerView: 6,
            spaceBetween: 100,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ marginTop: "-15px" }}
      >
        <SwiperSlide>
          <div>
            <a href="/repair-service" className="active">
              <div>
                <img
                  src="./assets/p/repair12.webp"
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
              Repair Service
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/demo-installation" className=" ">
              <div>
                <img
                  src="./assets/p/install.webp"
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
              Demo Installation
            </h5>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <a href="/advanced-equipment" className=" ">
              <div>
                <img
                  src="./assets/p/Advanced.webp"
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
              Advanced Equipment
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/education-training" className=" ">
              <div>
                <img
                  src="./assets/p/Education.webp"
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
                marginRight: "0px",
              }}
            >
              Education & Training
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/complete-clinic-setup" className=" ">
              <div>
                <img
                  src="./assets/p/Clinics.webp"
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
                marginRight: "0px",
              }}
            >
              Complete Clinic Setup
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/dental-solutions" className=" ">
              <div>
                <img
                  src="./assets/p/ITs.webp"
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
              Dental IT Solutions
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
