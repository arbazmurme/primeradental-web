import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function SliderEducationTraining() {
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
                                <img src="./assets/p/Workshops Dental Equipment.webp" style={{width:"100px", height:"100px", borderRadius:"100px", border:"2px, solid, #2ec2c6"}} className="blur-up lazyload" alt="dummy" />
                                {/* <h5>Kovident New Launches</h5> */}
                            </div>
                        </a>
                        <h5 style={{marginTop:"18px", color:"black", fontWeight:"600", textAlign:""}}> Workshops Dental Equipment</h5>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="/shop-category" className=" ">
                            <div>
                                <img src="./assets/p/CAM Training.webp" style={{width:"100px", height:"100px", borderRadius:"100px", border:"2px, solid, #2ec2c6"}} className="blur-up lazyload" alt="dummy" />
                                {/* <h5>Kovident New Launches</h5> */}
                            </div>
                        </a>
                        <h5 style={{marginTop:"18px", color:"black", fontWeight:"600", marginLeft:"", textAlign:""}}>CAD/CAM Training </h5>
                        {/* <h5 style={{marginTop:"18px", color:"black", fontWeight:"600", marginLeft:"23px"}}>RVG / Intra Oral Camera</h5> */}

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="/shop-category" className=" ">
                            <div>
                                <img src="./assets/p/Laser Dentistry.jpg" style={{width:"100px", height:"100px", borderRadius:"100px", border:"2px, solid, #2ec2c6"}} className="blur-up lazyload" alt="dummy" />
                                {/* <h5>Kovident New Launches</h5> */}
                            </div>
                        </a>
                        <h5 style={{marginTop:"18px", color:"black", fontWeight:"600", marginLeft:"0px"}}>Laser Dentistry</h5>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="/shop-category" className=" ">
                            <div>
                                <img src="./assets/p/Implantology & Surgical Training.webp" style={{width:"100px", height:"100px", borderRadius:"100px", border:"2px, solid, #2ec2c6"}} className="blur-up lazyload" alt="dummy" />
                                {/* <h5>Kovident New Launches</h5> */}
                            </div>
                        </a>
                        <h5 style={{marginTop:"18px", color:"black", fontWeight:"600", marginLeft:"0px"}}>Implantology & Surgical Training</h5>

                    </div>
                </SwiperSlide>
               

            </Swiper>
        </>
    );
}
