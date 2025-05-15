"use client";
import SliderAllProducts from "@/components/slidercomponents/SliderAllProducts";
import React, { useState } from "react";

const AllProduct = () => {
  return (
    <>
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-9 col-xl-12">
              <div className="title d-block" style={{ marginTop: "0px" }}>
                <h2>Hot Selling</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
                {/* <p>A virtual assistant collects the products from your list</p> */}
              </div>
              <div className="product-border overflow-hidden wow fadeInUp">
                <div className="product-box-slide no-arrow">
                  <SliderAllProducts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
