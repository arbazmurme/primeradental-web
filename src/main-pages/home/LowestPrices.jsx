"use client";
import SliderLowestPrices from "@/components/slidercomponents/SliderLowestPrices";
import React from "react";

const LowestPrices = () => {
  return (
    <>
      <br />
      <div className="bg-effect">
        <footer className="section-t-space">
          <div className="container-fluid-lg" style={{ marginBottom: "-57px" }}>
            <div className="service-section">
              <div className="row g-3">
                <div className="col-12">
                  <div className="service-contain">
                    <marquee className="" direction="left">
                      <SliderLowestPrices />
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LowestPrices;
