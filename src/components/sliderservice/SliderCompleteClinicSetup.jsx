"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';



export default function SliderCompleteClinicSetup() {
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
                    '@0.00': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    '@0.75': {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    '@1.00': {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    '@1.50': {
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
                                <img src="./assets/p/Interior Designing.jpg" style={{ width: "100px", height: "100px", borderRadius: "100px", border: "2px, solid, #2ec2c6" }} className="blur-up lazyload" alt="dummy" />
                                {/* <h5>Kovident New Launches</h5> */}
                            </div>
                        </a>
                        <h5 style={{ marginTop: "18px", color: "black", fontWeight: "600", textAlign: "" }}>Interior Designing </h5>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="/shop-category" className=" ">
                            <div>
                                <img src="./assets/p/Legal Paperwork.jpeg" style={{ width: "100px", height: "100px", borderRadius: "100px", border: "2px, solid, #2ec2c6" }} className="blur-up lazyload" alt="dummy" />
                                {/* <h5>Kovident New Launches</h5> */}
                            </div>
                        </a>
                        <h5 style={{ marginTop: "18px", color: "black", fontWeight: "600", marginLeft: "" }}>Legal Paperwork </h5>
                        {/* <h5 style={{marginTop:"18px", color:"black", fontWeight:"600", marginLeft:"23px"}}>RVG / Intra Oral Camera</h5> */}

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="/shop-category" className=" ">
                            <div>
                                <img src="./assets/p/Plumbing.jpg" style={{ width: "100px", height: "100px", borderRadius: "100px", border: "2px, solid, #2ec2c6" }} className="blur-up lazyload" alt="dummy" />
                                {/* <h5>Kovident New Launches</h5> */}
                            </div>
                        </a>
                        <h5 style={{ marginTop: "18px", color: "black", fontWeight: "600", marginLeft: "0px" }}>Plumbing</h5>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="/shop-category" className=" ">
                            <div>
                                <img src="./assets/p/Equipment Setu.jpg" style={{ width: "100px", height: "100px", borderRadius: "100px", border: "2px, solid, #2ec2c6" }} className="blur-up lazyload" alt="dummy" />
                                {/* <h5>Kovident New Launches</h5> */}
                            </div>
                        </a>
                        <h5 style={{ marginTop: "18px", color: "black", fontWeight: "600", marginLeft: "0px" }}>Equipment Setup</h5>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="/shop-category" className=" ">
                            <div>
                                <img src="./assets/p/LED and Sign Boards.jpeg" style={{ width: "100px", height: "100px", borderRadius: "100px", border: "2px, solid, #2ec2c6" }} className="blur-up lazyload" alt="dummy" />
                                {/* <h5>Kovident New Launches</h5> */}
                            </div>
                        </a>
                        <h5 style={{ marginTop: "18px", color: "black", fontWeight: "600", marginLeft: "0px" }}>LED and Sign Boards</h5>

                    </div>
                </SwiperSlide>



            </Swiper>
        </>
    );
}
