"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function SliderWeeklyDiscounts() {
  const { dealOfTheDay } = useSelector((state) => state.product);
  
  // Check if dealOfTheDay exists and has dodProducts
  if (!dealOfTheDay?.success || !dealOfTheDay.dodProducts?.length) {
    return null; // or return a loading spinner/placeholder
  }

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
        {dealOfTheDay.dodProducts.map((product) => (
          <SwiperSlide key={product._id}>
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
                  </div>
                  <div className="product-detail">
                    <Link href={`/product-info/${product.slugUrl}`}>
                      <h6
                        className="name h-100"
                        style={{ fontWeight: "700", fontSize: "15px" }}
                      >
                        {product.name}
                      </h6>
                    </Link>
                    <h5 className="sold text-content">
                      <span className="theme-color price">
                        ₹{product.PackSizes.SellingPrice}
                      </span>
                      <del>₹{product.PackSizes.Mrp}</del>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}