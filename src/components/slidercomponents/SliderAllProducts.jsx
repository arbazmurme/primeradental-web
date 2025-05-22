"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function SliderAllProducts() {
  const { hotProducts } = useSelector((state) => state.product);
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
        {hotProducts?.trendingProducts?.map((product) => (
          <SwiperSlide key={product._id}>
            <div className='px-0'>
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <Link href={`/product-info/${product.slugUrl}`}>
                        <img 
                          src={product.cardImage} 
                          className="img-fluid blur-up lazyload" 
                          alt={product.name} 
                        />
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
                      <Link href={`/product-info/${product.slugUrl}`}>
                        <h6 className="name h-100" style={{ fontWeight: "700", fontSize: "15px" }}>
                          {product.name}
                        </h6>
                      </Link>
                      <h5 className="sold text-content">
                        <span className="theme-color price">
                          ₹{product.offerPrice ? product.offerPrice.toLocaleString() : product.PackSizes.SellingPrice.toLocaleString()}
                        </span>
                        <del>₹{product.PackSizes.Mrp.toLocaleString()}</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i 
                                data-feather="star" 
                                className={i < product.Rating ? "fill" : ""} 
                              />
                            </li>
                          ))}
                        </ul>
                        <h6 className="theme-color" style={{ marginLeft: "-15px" }}>
                          {product.outOfStock ? "Out of Stock" : "In Stock"}
                        </h6>
                      </div>

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
                            <button type="button" className="qty-left-minus" data-type="minus" data-field>
                              <i className="fa fa-minus" />
                            </button>
                            <input 
                              className="form-control input-number qty-input" 
                              type="text" 
                              name="quantity" 
                              defaultValue={0} 
                            />
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
        ))}
      </Swiper>
    </>
  );
}