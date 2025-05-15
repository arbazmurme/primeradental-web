"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';




export default function SliderAllProducts() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}

        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className=' px-0'>
            <div className="row m-0" >
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img src="/assets/p/Waldent.webp" className="img-fluid blur-up lazyload" alt="Product" />
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6 className="name h-100" style={{ fontWeight: "700", fontSize: "15px" }}>Waldent Rctprep </h6>
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
                      <h6 className="theme-color" style={{ marginLeft: "-15px" }}>In Stock</h6>
                    </div>

                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button type="button" className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa fa-minus" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus" data-type="plus" data-field>
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
          <div >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img src="/assets/p/Waldent Contra-angle.webp" className="img-fluid blur-up lazyload" alt="Product" />
                    </Link>

                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6 className="name h-100" style={{ fontWeight: "700", fontSize: "15px" }}>Waldent Contra</h6>
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
                      <h6 className="theme-color" style={{ marginLeft: "-15px" }}>In Stock</h6>
                    </div>

                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button type="button" className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa fa-minus" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus" data-type="plus" data-field>
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
          <div className=' px-0'>
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img src="/assets/p/Waldent BEST Etch.webp" className="img-fluid blur-up lazyload" alt="Product" />
                    </Link>

                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6 className="name h-100" style={{ fontWeight: "700", fontSize: "15px" }}>Waldent BEST</h6>
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
                      <h6 className="theme-color" style={{ marginLeft: "-15px" }}>In Stock</h6>
                    </div>

                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button type="button" className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa fa-minus" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus" data-type="plus" data-field>
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
          <div className=' px-0' >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img src="/assets/p/Waldent DenTemp.webp" className="img-fluid blur-up lazyload" alt="Product" />
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6 className="name h-100" style={{ fontWeight: "700", fontSize: "15px" }}>Waldent DenTemp</h6>
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
                      <h6 className="theme-color" style={{ marginLeft: "-15px" }}>In Stock</h6>
                    </div>

                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button type="button" className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa fa-minus" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus" data-type="plus" data-field>
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
          <div className=' px-0' >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img src="/assets/p/Waldent Premium Taper.webp" className="img-fluid blur-up lazyload" alt="Product" />
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6 className="name h-100" style={{ fontWeight: "700", fontSize: "15px" }}> Waldent Premium </h6>
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
                      <h6 className="theme-color" style={{ marginLeft: "-15px" }}>In Stock</h6>
                    </div>

                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button type="button" className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa fa-minus" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus" data-type="plus" data-field>
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
          <div className=' px-0' >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img src="/assets/p/Woodpecker-Apex.webp" className="img-fluid blur-up lazyload" alt="Product" />
                    </Link>
                    <ul className="product-option">
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                        <Link href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                          <i data-feather="eye" />
                        </Link>
                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                        <Link href="compare.html">
                          <i data-feather="refresh-cw" />
                        </Link>
                      </li>
                      <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                        <Link href="wishlist.html" className="notifi-wishlist">
                          <i data-feather="heart" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <Link href="/product-info">
                      <h6 className="name h-100" style={{ fontWeight: "700", fontSize: "15px" }}>Woodpecker Apex</h6>
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
                      <h6 className="theme-color" style={{ marginLeft: "-15px" }}>In Stock</h6>
                    </div>

                    <div className="add-to-cart-box">
                      <Link href="/cart">
                        <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon">
                            <i className="fa-solid fa-plus" />
                          </span>
                        </button>
                      </Link>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button type="button" className="qty-left-minus" data-type="minus" data-field>
                            <i className="fa fa-minus" />
                          </button>
                          <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                          <button type="button" className="qty-right-plus" data-type="plus" data-field>
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
