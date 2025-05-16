"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function SliderTopCategory() {
  const { categorytotal } = useSelector((state) => state.category);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
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
      {categorytotal?.length > 0 ? (
        categorytotal.map((category, index) => (
          <SwiperSlide key={index}>
            <div>
              <Link href={`/shop-category/${category.slugUrl}`}>
                <div>
                  <Image
                    src={category.catimage || "/images/under-massage.png"}
                    alt={category.name || "Under Massage"}
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-teal-500"
                  />
                </div>
                <h5 className="mt-4 text-black font-semibold text-center">
                  {category.name || "Under Massage"}
                </h5>
              </Link>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <div className="text-center py-10">
            <h5 className="text-black font-semibold">
              No category data available.
            </h5>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
}

