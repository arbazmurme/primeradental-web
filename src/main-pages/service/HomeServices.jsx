"use client";
import React, { useState } from "react";
import Link from "next/link";
import SliderHomeServices from "@/components/slidercomponents/SliderHomeServices";

const HomeServices = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  // const dates = ["Airotors", "Lasers"];
  const dates = [
    "Airotors",
    "RVG / Intra Oral Camera",
    "Portable X-Rays",
    "Dental Chairs",
    "Autoclaves",
    "Light Cure Units",
    "Physiodispensers",
    "Lasers",
  ];

  return (
    <>
      <br />
      <br />
      <div className="container">
        <SliderHomeServices />
      </div>

      <div
        className="p-4 max-w-md mx-auto  "
        style={{ overflow: "hidden", marginLeft: "-40px" }}
      >
        <div
          className="flex gap-2 mt-2"
          style={{ marginLeft: "82px", fontWeight: "700" }}
        >
          {dates.map((date) => (
            <button
              key={date}
              className={`px-4 py-2 border rounded-md ${
                selectedDate === date
                  ? "bg-success-500 text-white bg-info"
                  : "bg-gray-100"
              }`}
              onClick={() => setSelectedDate(date)}
              style={{ margin: "10px", fontWeight: "600" }}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-custom-3">
              <div className="left-box wow fadeInUp">
                <div className="shop-left-sidebar">
                  <div className="back-button">
                    <h3>
                      <i className="fa-solid fa-arrow-left" /> Back
                    </h3>
                  </div>

                  <div
                    className="accordion custom-accordion"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                        >
                          <span>Categories</span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                      >
                        <div className="accordion-body">
                          <ul className="category-list custom-padding custom-height">
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Endodontics</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Chairs</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Instruments</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Consumables</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Disposables</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">
                                    General Dentistry
                                  </span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Orthodontics</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Steralization</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-custom-">
              <div className="show-button">
                <div className="filter-button-group mt-0">
                  <div className="filter-button d-inline-block d-lg-none active">
                    <a>
                      <i className="fa-solid fa-filter" /> Repair Service
                    </a>
                  </div>
                </div>
              </div>
              <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section list-style">
                <div>
                  <div className="product-box-3 h-100 wow fadeInUp">
                    <div className="product-header">
                      <div className="product-image">
                        <Link href="/service-cart">
                          <img
                            src="../assets/p/images.webp"
                            className="img-fluid blur-up lazyload"
                            alt
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Vegetable</span>
                        <Link href="/service-cart">
                          <h5 className="name">1 Sec light cure unit + </h5>
                        </Link>
                        <p className="text-content mt-1 mb-2 product-content">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Consequatur autem pariatur, dignissimos ab nemo
                          perspiciatis? Modi ad consequuntur.
                        </p>
                        <h6 className="unit">2 PCS</h6>
                        <h5 className="price">
                          <span className="theme-color">₹xxxx</span>{" "}
                          <del>₹xxxx</del>
                        </h5>
                        <div className="add-to-cart-box bg-white">
                          <Link href="/service-cart">
                            <button className="btn btn-add-cart addcart-button">
                              Add
                              <span className="add-icon bg-light-gray">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                          </Link>
                          <div className="cart_qty qty-box">
                            <div className="input-group bg-white">
                              <button
                                type="button"
                                className="qty-left-minus bg-gray"
                                data-type="minus"
                                data-field
                              >
                                <i className="fa fa-minus" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={0}
                              />
                              <button
                                type="button"
                                className="qty-right-plus bg-gray"
                                data-type="plus"
                                data-field
                              >
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="product-box-3 h-100 wow fadeInUp">
                    <div className="product-header">
                      <div className="product-image">
                        <Link href="/service-cart">
                          <img
                            src="../assets/p/Waldent Contra-angle.webp"
                            className="img-fluid blur-up lazyload"
                            alt
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Vegetable</span>
                        <Link href="/service-cart">
                          <h5 className="name">Waldent Contra</h5>
                        </Link>
                        <p className="text-content mt-1 mb-2 product-content">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Consequatur autem pariatur, dignissimos ab nemo
                          perspiciatis? Modi ad consequuntur.
                        </p>
                        <h6 className="unit">2 PCS</h6>
                        <h5 className="price">
                          <span className="theme-color">₹xxxx</span>{" "}
                          <del>₹xxxx</del>
                        </h5>
                        <div className="add-to-cart-box bg-white">
                          <Link href="/service-cart">
                            <button className="btn btn-add-cart addcart-button">
                              Add
                              <span className="add-icon bg-light-gray">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                          </Link>
                          <div className="cart_qty qty-box">
                            <div className="input-group bg-white">
                              <button
                                type="button"
                                className="qty-left-minus bg-gray"
                                data-type="minus"
                                data-field
                              >
                                <i className="fa fa-minus" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={0}
                              />
                              <button
                                type="button"
                                className="qty-right-plus bg-gray"
                                data-type="plus"
                                data-field
                              >
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default HomeServices;
