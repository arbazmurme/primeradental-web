"use client";
import Link from "next/link";
import React from "react";

const Empty = () => {
  return (
    <>
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain breadcrumb-order">
                <div className="order-box">
                  <div className="order-image">
                    <Link href="/product-info">
                      <img
                        src="./assets/p/Empty.png"
                        className="img-fluid blur-up lazyload"
                        alt
                      />
                    </Link>
                  </div>
                  <div className="order-contain">
                    <h3 className="theme-color">Your Cart is Empty</h3>
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

export default Empty;
