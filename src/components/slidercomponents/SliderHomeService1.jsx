import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function SliderHomeService1({serviceCategory}) {
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
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ marginTop: "-15px" }}
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
                        <div className="position-absolute bottom-0 start-0 end-0 text-center p-2" 
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            borderBottomLeftRadius: '2px',
                            borderBottomRightRadius: '2px'
                          }}>
                          <h5 className="m-0" style={{ fontSize: '16px' }}>{category.name}</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
      </Swiper>
    </>
  );
}

