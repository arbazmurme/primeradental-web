"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { CiHome, CiSearch } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

const Hadear = () => {
  return (
    <>
      {/* Header Start */}
      <header className="pb-md-1">
        <div className="header-top pb-md-1" style={{ background: "#2dbdc5" }}>
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-xxl-3 d-xxl-block d-none"></div>
              <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                <div className="header-offer">
                  <div className="notification-slider">
                    <div>
                      <div className="timer-notification">
                        <h6 className="text-light">
                          <strong className="me-1">
                            <marquee direction="left">
                              Free Delivery Above ₹XXXX +91-9108234926
                            </marquee>
                          </strong>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-nav top-header sticky-header">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="navbar-top">
                  <Link href="/" className="web-logo nav-logo">
                    <img
                      src="./assets/primeradentalhub.webp"
                      className="img-fluid blur-up lazyload"
                      alt="img"
                      style={{ height: "36px", width: "190px" }}
                    />
                  </Link>

                  <div className="middle-box dextop">
                    <div className="search-box">
                      <form>
                        <div className="input-group">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="I'm searching for..."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <Link href="/search">
                            <button
                              className="btn"
                              type="submit"
                              id="button-addon2"
                            >
                              <FiSearch />
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="rightside-box">
                    <div className="search-full">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FiSearch />
                        </span>
                        <input
                          type="text"
                          className="form-control search-type"
                          placeholder="Search here.."
                        />
                        <span className="input-group-text close-search">
                          <i data-feather="x" className="font-light" />
                        </span>
                      </div>
                    </div>
                    <ul className="right-side-menu">
                      <li className="right-side">
                        <div className="delivery-login-box">
                          <div className="delivery-icon">
                            <div className="search-box">
                              <i data-feather="search" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="right-side">
                        <Link
                          href="/wishlist"
                          className="btn p-0 position-relative header-wishlist"
                        >
                          <FaRegHeart />
                        </Link>
                      </li>

                      <li className="right-side">
                        <div className="onhover-dropdown header-badge">
                          <Link href="/cart">
                            <button
                              type="button"
                              className="btn p-0 position-relative header-wishlist"
                            >
                              <BsCart3 />
                              <span className="position-absolute top-0 start-100 translate-middle badge"></span>
                            </button>
                          </Link>
                        </div>
                      </li>

                      <li className="right-side onhover-dropdown">
                        <div className="delivery-login-box">
                          <Link
                            href="/login"
                            style={{ color: "#2dbdc5", fontSize: "18px" }}
                          >
                            <div className="delivery-icon">
                              {" "}
                              <b>Login</b>
                            </div>
                          </Link>
                        </div>
                      </li>

                      <li className="right-side">
                        <div className="onhover-dropdown header-badge">
                          <Link href="/dashboard">
                            <button
                              type="button"
                              className="btn p-0 position-relative header-wishlist"
                              style={{ fontSize: "25px" }}
                            >
                              <img
                                src="./assets/p/profile.png"
                                className="blur-up lazyload"
                                alt=""
                                style={{ width: "40px", height: "40px" }}
                              />
                            </button>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* mobile fix menu start */}
      <div
        className="mobile-menu d-md-none d-block mobile-cart"
        style={{ position: "" }}
      >
        <ul>
          <li className="">
            <Link href="/">
              <CiHome className="icli" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mobile-category">
            <Link href="/shop-category">
              <BiCategoryAlt className="iconly-Category icli js-link" />
              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link href="/service" className="notifi-wishlist">
              <img
                src="./assets/p/sty.png"
                className="img-fluid blur-up lazyload"
                alt="img"
                style={{ height: "21px", width: "21px" }}
              />
              <span>Service</span>
            </Link>
          </li>
          <li>
            <Link href="" className="search-box">
              <CiSearch className="iconly-Search icli" />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <BsCart3 className="iconly-Bag-2 icli fly-cate" />
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* mobile fix menu end */}
    </>
  );
};

export default Hadear;
