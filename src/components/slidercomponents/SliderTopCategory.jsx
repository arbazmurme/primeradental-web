"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function SliderTopCategory() {
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
            <Link href="/shop-category">
              <div>
                <Image
                  src="/assets/p/CateBack/Endodontics.webp"
                  alt="Endodontics"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-teal-500"
                />
              </div>
            </Link>
            <h5 className="mt-4 text-black font-semibold text-center">
              Endodontics
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/shop-category">
              <div>
                <Image
                  src="/assets/p/CateBack/Chairs.webp"
                  alt="Chairs"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-teal-500"
                />
              </div>
            </Link>
            <h5 className="mt-4 text-black font-semibold text-center">
              Chairs
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/shop-category">
              <div>
                <Image
                  src="/assets/p/CateBack/Instruments.webp"
                  alt="Instruments"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-teal-500"
                />
              </div>
            </Link>
            <h5 className="mt-4 text-black font-semibold text-center">
              Instruments
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/shop-category">
              <div>
                <Image
                  src="/assets/p/CateBack/consumables.webp"
                  alt="Consumables"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-teal-500"
                />
              </div>
            </Link>
            <h5 className="mt-4 text-black font-semibold text-center">
              Consumables
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/shop-category">
              <div>
                <Image
                  src="/assets/p/CateBack/Disposables.webp"
                  alt="Disposables"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-teal-500"
                />
              </div>
            </Link>
            <h5 className="mt-4 text-black font-semibold text-center">
              Disposables
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/shop-category">
              <div>
                <Image
                  src="/assets/p/CateBack/General Dentistry.webp"
                  alt="General Dentistry"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-teal-500"
                />
              </div>
            </Link>
            <h5 className="mt-4 text-black font-semibold text-center">
              General
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/shop-category">
              <div>
                <Image
                  src="/assets/p/CateBack/Orthodontics.webp"
                  alt="Orthodontics"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-teal-500"
                />
              </div>
            </Link>
            <h5 className="mt-4 text-black font-semibold text-center">
              Orthodontics
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/shop-category">
              <div>
                <Image
                  src="/assets/p/CateBack/Steralization.webp"
                  alt="Steralization"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-teal-500"
                />
              </div>
            </Link>
            <h5 className="mt-4 text-black font-semibold text-center">
              Steralization
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
