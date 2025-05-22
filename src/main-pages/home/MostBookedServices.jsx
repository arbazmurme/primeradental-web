"use client"
import SliderMostBookedServices from "@/components/sliderservice/SliderMostBookedServices";
import React from "react";
import { useSelector } from "react-redux";

const MostBookedServices = () => {

  
  return (
    <>
      <section className="">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Most Booked Services</h2>
            <span className="title-leaf" style={{ marginLeft: "55px" }}>
              <svg className="icon-width">
                <use xlinkHref="../assets/svg/leaf.svg#leaf" />
              </svg>
            </span>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="slider-5 ratio_87 slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div className="slick-track">
                    <SliderMostBookedServices />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MostBookedServices;
