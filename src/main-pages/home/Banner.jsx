"use client";
import SliderBanner from '@/components/slidercomponents/SliderBanner'
import React from 'react'
import { useSelector } from 'react-redux';


const Banner = () => {
  const {mainHomeSliderTotal} = useSelector(state => state.slider);
  return (
    <>
      <section style={{ overflow: "hidden", paddingTop: "0px" }}>
        <div
          id="carouselExampleControls"
          className=""
          data-bs-ride="carousel"
        >
          <div className="" style={{ overflow: "hidden" }}>
            <SliderBanner mainHomeSliderTotal={mainHomeSliderTotal} />
          </div>

        </div>
      </section>
    </>
  )
}

export default Banner