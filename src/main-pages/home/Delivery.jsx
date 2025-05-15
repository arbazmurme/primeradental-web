"use client";
import React from "react";

const Delivery = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container-fluid-lg">
          <div className="row gy-lg-0 gy-3">
            <div className="col-lg-8">
              <div
                className="banner-contain-3 h-100 pt-sm-5 hover-effect bg-size blur-up lazyloaded"
                style={{
                  backgroundImage:
                    'url("../assets/images/grocery/banner/8.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/grocery/banner/8.png"
                  className="bg-img blur-up lazyload"
                  alt="Banner Image"
                  style={{ display: "none" }}
                />
                <div className="banner-detail banner-p-sm p-center-right position-relative banner-minus-position banner-detail-deliver">
                  <div>
                    <h3 className="fw-bold banner-contain">
                      Safe Delivery to the door
                    </h3>
                    <h4 className="mb-sm-3 mb-2 delivery-contain">
                      {/* <br /> */}
                      <br />
                      Got a Question? Call us between 9am-7pm
                    </h4>
                    <ul className="banner-list">
                      <li>
                        <div className="delivery-box">
                          <div className="check-icon">
                            <i className="fa-solid fa-check" />
                          </div>
                          <div className="check-contain">
                            <h5>Get live order tracking</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="delivery-box">
                          <div className="check-icon">
                            <i className="fa-solid fa-check" />
                          </div>
                          <div className="check-contain">
                            <h5>Get latest feature updates</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <button
                      className="btn  text-white mt-sm-4 mt-3 fw-bold"
                    >
                      <br />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banner-contain-3 pt-lg-4 h-100 hover-effect">
                <a href="javascript:void(0)">
                  <img
                    src="../assets/p/africa.webp"
                    className="img-fluid social-image blur-up w-100 lazyloaded"
                    alt="banner image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Delivery;
