"use client";
import SliderHomeService from "@/components/slidercomponents/SliderHomeService";
import React from "react";

const HomeService = () => {
  return (
    <>
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-9 col-xl-12">
              <div
                className="title section-t-space"
                style={{ marginTop: "-38px" }}
              >
                <h2>Services</h2>
                <span className="title-leaf" style={{ marginLeft: "0px" }}>
                  <svg className="icon-width">
                    <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
              </div>
              {/* <div className="slider-3-blog ratio_65 no-arrow product-wrapper"> */}
              <div className="slider-3-blog ratio_65 no-arrow product-wrapper">
                <SliderHomeService />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeService;
