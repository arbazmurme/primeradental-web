"use client";
import React from "react";

const HomeBanner = () => {
  return (
    <>
      <section className="home-section pt-2 mt-lg-4">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xl-8 ratio_65">
              <div className="home-contain h-100">
                <div
                  className="h-100 bg-size blur-up lazyloaded"
                  style={{
                    backgroundImage: 'url("/assets/p/mini.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }}
                >
                  <img
                    src="/assets/p/mini.png"
                    className="bg-img blur-up lazyloaded"
                    alt="Banner Image"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 ratio_65">
              <div className="row g-4">
                <div className="col-xl-12 col-md-6">
                  <div
                    className="home-contain bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("/assets/p/close-up-dentist-instruments.webp")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >
                    <img
                      src="/assets/images/vegetable/banner/2.webp"
                      className="bg-img blur-up lazyloaded"
                      alt="Dentist Instruments"
                      style={{ display: "none" }}
                    />
                    <div className="home-detail p-center-left home-p-sm w-75">
                      <div>
                        <h2 className="mt-0" style={{ color: "white" }}>
                          45%{" "}
                          <span className="discount text-title">
                            <b style={{ color: "white" }}>OFF</b>
                          </span>
                        </h2>
                        <h3 className="" style={{ color: "#0da487" }}>
                          Welcome Extra Savings!
                        </h3>
                        <p className="w-75">
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div
                    className="home-contain bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage: 'url("/assets/p/homeBanner.webp")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >
                    <img
                      src="/assets/images/vegetable/banner/mini.png"
                      className="bg-img blur-up lazyload"
                      alt="Banner Image"
                      style={{ display: "none" }}
                    />
                    <div className="home-detail p-center-left home-p-sm w-75">
                      {/* Additional content can go here */}
                    </div>
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

export default HomeBanner;
