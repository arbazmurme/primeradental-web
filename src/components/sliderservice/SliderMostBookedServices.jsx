"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function SliderMostBookedServices() {
  const { mostBookedServices } = useSelector((state) => state.services);
  
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500, // Changed from 250000 to 2.5 seconds for better UX
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {    // @0.00 - 576px
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {  // @0.75 - 768px
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {  // @1.00 - 992px
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {  // @1.50 - 1200px
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      }}
      modules={[Autoplay]}
      className="most-booked-swiper"
      style={{ marginTop: "-6px", padding: "10px 0" }}
    >
      {mostBookedServices?.map((service) => (
        <SwiperSlide key={service._id}>
          <div className="blog-box" style={{ marginRight: "0px"}}>
            <div className="blog-box-image" style={{ marginRight: "0px"}}>
              <Link
                href={`/service/${service.slugUrl}`}
                className="blog-image bg-size blur-up lazyloaded"
                style={{
                  backgroundImage: `url("${service.Image}")`,
                  borderRadius: "5px",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                  width: "100%",
                  height: "200px",
                }}
              >
                <img
                  src={service.Image}
                  className="bg-img blur-up lazyload"
                  alt={service.ServiceName}
                  style={{ display: "none" }}
                />
              </Link>
            </div>
            <Link href={`/service/${service.slugUrl}`} className="blog-detail">
              <h6>{service.ServiceName}</h6>
              <h5>
                ₹{service.TotalPrice}
                {service.Discount > 0 && (
                  <span style={{ textDecoration: "line-through", marginLeft: "8px", opacity: 0.7 }}>
                    ₹{service.Price}
                  </span>
                )}
              </h5>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}