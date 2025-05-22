"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SliderHomeService1 from "./SliderHomeService1";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function SliderHomeService() {
  const { serviceCategory } = useSelector((state) => state.category);
  return (
    <>
      <section className="category-section-2" style={{ marginTop: "-50px" }}>
        <div>
          <div className="row mt-2">
            <div className="col-12">
              <Swiper
                slidesPerView={4}
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
                {serviceCategory?.map((category) => (
                  <SwiperSlide key={category._id}>
                    <div className="d-flex justify-content-center">
                      <Link href={`/service/${category.slugUrl}`}>
                        <div className="position-relative">
                          <img
                            src={category.catimage}
                            className=""
                            alt={category.name}
                            style={{
                              width: "230px",
                              height: "230px",
                              objectFit: "cover",
                              borderRadius: "2px",
                            }}
                          />
                          <div
                            className="position-absolute bottom-0 start-0 end-0 text-center p-2"
                            style={{
                              background: "rgba(0, 0, 0, 0.5)",
                              color: "white",
                              borderBottomLeftRadius: "2px",
                              borderBottomRightRadius: "2px",
                            }}
                          >
                            <h5 className="m-0" style={{ fontSize: "16px" }}>
                              {category.name}
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="category-section-2 mt-2" style={{ marginTop: "-50px" }}>
        <div className="">
          <div className="row mt-2">
            <div className="col-12">
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  reverseDirection: true,
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
                {serviceCategory?.map((category) => (
                  <SwiperSlide key={category._id}>
                    <div className="d-flex justify-content-center">
                      <Link href={`/service/${category.slugUrl}`}>
                        <div className="position-relative">
                          <img
                            src={category.catimage}
                            className=""
                            alt={category.name}
                            style={{
                              width: "230px",
                              height: "230px",
                              objectFit: "cover",
                              borderRadius: "2px",
                            }}
                          />
                          <div
                            className="position-absolute bottom-0 start-0 end-0 text-center p-2"
                            style={{
                              background: "rgba(0, 0, 0, 0.5)",
                              color: "white",
                              borderBottomLeftRadius: "2px",
                              borderBottomRightRadius: "2px",
                            }}
                          >
                            <h5 className="m-0" style={{ fontSize: "16px" }}>
                              {category.name}
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
