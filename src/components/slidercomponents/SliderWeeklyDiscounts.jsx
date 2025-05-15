"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function SliderWeeklyDiscounts() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ marginTop: "-10px" }}
      >
        <SwiperSlide>
          <div className="row m-0">
            <div className="col-12 px-0">
              <div className="product-box">
                <div className="product-image">
                  <Link href="/product-info">
                    <img
                      src="../assets/p/Apple Dental Airotor.webp"
                      className="img-fluid blur-up lazyload"
                      alt="Product"
                    />
                  </Link>
                </div>
                <div className="product-detail">
                  <Link href="/product-info">
                    <h6
                      className="name h-100"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Apple Dental{" "}
                    </h6>
                  </Link>
                  <h5 className="sold text-content">
                    <span className="theme-color price">₹26.69</span>
                    <del>28.56</del>
                  </h5>
                  <div className="product-rating mt-sm-2 mt-1">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <h6 className="theme-color" style={{ marginLeft: "-15px" }}>
                      In Stock
                    </h6>
                  </div>
                  <br />
                  <div className="add-to-cart-box">
                    <Link href="/cart">
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                    </Link>
                    <div className="cart_qty qty-box">
                      <div className="input-group">
                        <button
                          type="button"
                          className="qty-left-minus"
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
                          className="qty-right-plus"
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
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Being Airotor.webp"
                        className="img-fluid blur-up lazyload"
                        alt="Product"
                      />
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6
                        className="name h-100"
                        style={{ fontWeight: "700", fontSize: "15px" }}
                      >
                        Being Airotor
                      </h6>
                    </Link>
                    <h5 className="sold text-content">
                      <span className="theme-color price">₹26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" />
                        </li>
                      </ul>
                      <h6
                        className="theme-color"
                        style={{ marginLeft: "-15px" }}
                      >
                        In Stock
                      </h6>
                    </div>
                    <br />
                    <div className="add-to-cart-box" style={{ marginLeft: "" }}>
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
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
                            className="qty-right-plus"
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
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent ECO PLUS.webp"
                        className="img-fluid blur-up lazyload"
                        alt="Product"
                      />
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6
                        className="name h-100"
                        style={{ fontWeight: "700", fontSize: "15px" }}
                      >
                        Waldent ECO
                      </h6>
                    </Link>
                    <h5 className="sold text-content">
                      <span className="theme-color price">₹26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" />
                        </li>
                      </ul>
                      <h6
                        className="theme-color"
                        style={{ marginLeft: "-15px" }}
                      >
                        In Stock
                      </h6>
                    </div>
                    <br />
                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
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
                            className="qty-right-plus"
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
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/NSK Contra Angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt="Product"
                      />
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6
                        className="name h-100"
                        style={{ fontWeight: "700", fontSize: "15px" }}
                      >
                        NSK Contra Angle
                      </h6>
                    </Link>
                    <h5 className="sold text-content">
                      <span className="theme-color price">₹26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" />
                        </li>
                      </ul>
                      <h6
                        className="theme-color"
                        style={{ marginLeft: "-15px" }}
                      >
                        In Stock
                      </h6>
                    </div>
                    <br />
                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
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
                            className="qty-right-plus"
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
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent Spectra Airotor.webp"
                        className="img-fluid blur-up lazyload"
                        alt="Product"
                      />
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6
                        className="name h-100"
                        style={{ fontWeight: "700", fontSize: "15px" }}
                      >
                        Waldent Spectra{" "}
                      </h6>
                    </Link>
                    <h5 className="sold text-content">
                      <span className="theme-color price">₹26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" />
                        </li>
                      </ul>
                      <h6
                        className="theme-color"
                        style={{ marginLeft: "-15px" }}
                      >
                        In Stock
                      </h6>
                    </div>
                    <br />
                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
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
                            className="qty-right-plus"
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
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/shofu_amalgam_polishing_kit-500x500_1-removebg-preview-300x300.webp"
                        className="img-fluid blur-up lazyload"
                        alt="Product"
                      />
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6
                        className="name h-100"
                        style={{ fontWeight: "700", fontSize: "15px" }}
                      >
                        Shofu Amalgam{" "}
                      </h6>
                    </Link>
                    <h5 className="sold text-content">
                      <span className="theme-color price">₹26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" />
                        </li>
                      </ul>
                      <h6
                        className="theme-color"
                        style={{ marginLeft: "-15px" }}
                      >
                        In Stock
                      </h6>
                    </div>
                    <br />
                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">
                          Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
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
                            className="qty-right-plus"
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}
