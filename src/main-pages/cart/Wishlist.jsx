"use client";
import Link from "next/link";
import React from "react";

const Wishlist = () => {
  return (
    <>
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2>Wishlist</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Wishlist</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wishlist-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-3 g-2">
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt
                      />
                    </Link>
                    <div className="product-header-top">
                      <button
                        className="btn wishlist-button close_button"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <div style={{ color: "#BF3131" }}>
                          <b>X</b>
                        </div>
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link href="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">1 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹08.02</span>
                      <del>₹15.15</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <Link href="/cart">
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt
                      />
                    </Link>
                    <div className="product-header-top">
                      <button
                        className="btn wishlist-button close_button"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <div style={{ color: "#BF3131" }}>
                          <b>X</b>
                        </div>
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link href="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">2 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹04.33</span>
                      <del>₹10.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <Link href="/cart">
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt
                      />
                    </Link>
                    <div className="product-header-top">
                      <button
                        className="btn wishlist-button close_button"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <div style={{ color: "#BF3131" }}>
                          <b>X</b>
                        </div>
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link href="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">1 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹12.52</span>
                      <del>₹13.62</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <Link href="/cart">
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt
                      />
                    </Link>
                    <div className="product-header-top">
                      <button
                        className="btn wishlist-button close_button"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <div style={{ color: "#BF3131" }}>
                          <b>X</b>
                        </div>
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link href="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">1 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹10.25</span>
                      <del>₹12.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <Link href="/cart">
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt
                      />
                    </Link>
                    <div className="product-header-top">
                      <button
                        className="btn wishlist-button close_button"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <div style={{ color: "#BF3131" }}>
                          <b>X</b>
                        </div>
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link href="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">1 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹10.25</span>
                      <del>₹12.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt
                      />
                    </Link>
                    <div className="product-header-top">
                      <button
                        className="btn wishlist-button close_button"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <div style={{ color: "#BF3131" }}>
                          <b>X</b>
                        </div>
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link href="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">1 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹10.25</span>
                      <del>₹12.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt
                      />
                    </Link>
                    <div className="product-header-top">
                      <button
                        className="btn wishlist-button close_button"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <div style={{ color: "#BF3131" }}>
                          <b>X</b>
                        </div>
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link href="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">1 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹10.25</span>
                      <del>₹12.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <Link href="/product-info">
                      <img
                        src="../assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt
                      />
                    </Link>
                    <div className="product-header-top">
                      <button
                        className="btn wishlist-button close_button"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <div style={{ color: "#BF3131" }}>
                          <b>X</b>
                        </div>
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link href="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">1 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹10.25</span>
                      <del>₹12.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
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
      </section>
    </>
  );
};

export default Wishlist;
