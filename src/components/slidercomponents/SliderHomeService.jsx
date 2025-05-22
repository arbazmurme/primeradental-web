"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SliderHomeService1 from "./SliderHomeService1";
import Link from "next/link";

export default function SliderHomeService() {
  return (
    <section className="category-section-2" style={{ marginTop: "-50px" }}>
      <div className="container">
        <div className="row mt-2">
          <div className="col-12">
            <Swiper
              slidesPerView={4} // Show 4 slides at once by default
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <SwiperSlide key={index}>
                  <div className="d-flex justify-content-center">
                    <Link href="/service">
                      <div className="shop-category-box border-0">
                        <img
                          src={`/assets/p/BackgroundImages/${index}.webp`}
                          className="img-fluid"
                          alt={`Category ${index}`}
                          style={{
                            width: "200px",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "2px",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Optional: Other content below the slider */}
            <div className="mt-3">
              <SliderHomeService1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
