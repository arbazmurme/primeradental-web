"use client";
import Link from "next/link";
import React from "react";

const Order = () => {
  return (
    <>
      <section className="user-dashboard-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 col-lg-4">
              <div className="dashboard-left-sidebar">
                <div className="close-button d-flex d-lg-none">
                  <button className="close-sidebar">
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
                <div className="profile-box">
                  <div className="cover-image">
                    <img
                      src="../assets/images/inner-page/cover-img.jpg"
                      className="img-fluid blur-up lazyload"
                      alt
                    />
                  </div>
                  <div className="profile-contain">
                    <div className="profile-image">
                      <div className="position-relative">
                        <img
                          src="../assets/p/profile.png"
                          className="blur-up lazyload update_img"
                          alt
                        />
                        <div className="cover-icon">
                          <i className="fa-solid fa-pen">
                            <input type="file" onchange="readURL(this,0)" />
                          </i>
                        </div>
                      </div>
                    </div>
                    <div className="profile-name">
                      <h3>XXXXXXXXX</h3>
                      <h6 className="text-content">xxxxxxx@gmail.com</h6>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-pills user-nav-pills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <Link href="/dashboard">
                      <button
                        className="nav-link active"
                        id="pills-dashboard-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-dashboard"
                        type="button"
                      >
                        <i data-feather="home" />
                        Dashboard
                      </button>
                    </Link>
                  </li>

                  <Link href="/Order">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-order-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-order"
                        type="button"
                      >
                        <i data-feather="shopping-bag" />
                        Order
                      </button>
                    </li>
                  </Link>

                  <li className="nav-item" role="presentation">
                    <Link href="/downloads">
                      <button
                        className="nav-link"
                        id="pills-wishlist-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-wishlist"
                        type="button"
                      >
                        <i data-feather="heart" />
                        Downloads
                      </button>
                    </Link>
                  </li>

                  <li className="nav-item" role="presentation">
                    <Link href="/address">
                      <button
                        className="nav-link"
                        id="pills-card-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-card"
                        type="button"
                        role="tab"
                      >
                        <i data-feather="credit-card" /> Addresses
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link href="/wallet">
                      <button
                        className="nav-link"
                        id="pills-card-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-card"
                        type="button"
                        role="tab"
                      >
                        <i data-feather="credit-card" /> Wallet
                      </button>
                    </Link>
                  </li>

                  <li className="nav-item" role="presentation">
                    <Link href="/">
                      <button
                        className="nav-link"
                        id="pills-address-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-address"
                        type="button"
                        role="tab"
                      >
                        <i data-feather="map-pin" />
                        Logout
                      </button>
                    </Link>
                  </li>
                  {/* <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"><i data-feather="user" />
                                            Account details</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-download-tab" data-bs-toggle="pill" data-bs-target="#pills-download" type="button" role="tab"><i data-feather="download" />My Coupons</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-security-tab" data-bs-toggle="pill" data-bs-target="#pills-security" type="button" role="tab"><i data-feather="shield" />
                                            Logout</button>
                                    </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xxl-9 col-lg-8">
              <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">
                Show Menu
              </button>
              <div className="dashboard-right-sidebar">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-dashboard"
                    role="tabpanel"
                  >
                    <div className="dashboard-home">
                      {/* <div className="title">
                                                    <h2>My Dashboard</h2>
                                                    <span className="title-leaf">
                                                        <svg className="icon-width bg-gray">
                                                            <use xlinkto="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf">
                                                            </use>
                                                        </svg>
                                                    </span>
                                                </div> */}
                      <div className="dashboard-user-name">
                        <h6 className="text-content">
                          No order has been made yet.
                          <b className="text-title">
                            {" "}
                            <Link href="/">Browse products</Link>
                          </b>
                        </h6>
                        {/* <p className="text-content">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p> */}
                      </div>

                      <div className="dashboard-right-sidebar">
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade"
                            id="pills-dashboard"
                            role="tabpanel"
                          >
                            <div className="dashboard-home">
                              <div className="title">
                                <h2>My Dashboard</h2>
                                <span className="title-leaf">
                                  <svg className="icon-width bg-gray">
                                    <use xlinkto="../assets/svg/leaf.svg#leaf" />
                                  </svg>
                                </span>
                              </div>
                              <div className="dashboard-user-name">
                                <h6 className="text-content">
                                  Hello,{" "}
                                  <b className="text-title">Vicki E. Pope</b>
                                </h6>
                                <p className="text-content">
                                  From your My Account Dashboard you have the
                                  ability to view a snapshot of your recent
                                  account activity and update your account
                                  information. Select a link below to view or
                                  edit information.
                                </p>
                              </div>
                              <div className="total-box">
                                <div className="row g-sm-4 g-3">
                                  <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                    <div className="total-contain">
                                      <img
                                        src="../assets/images/svg/order.svg"
                                        className="img-1 blur-up lazyloaded"
                                        alt
                                      />
                                      <img
                                        src="../assets/images/svg/order.svg"
                                        className="blur-up lazyloaded"
                                        alt
                                      />
                                      <div className="total-detail">
                                        <h5>Total Order</h5>
                                        <h3>3658</h3>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                    <div className="total-contain">
                                      <img
                                        src="../assets/images/svg/pending.svg"
                                        className="img-1 blur-up lazyloaded"
                                        alt
                                      />
                                      <img
                                        src="../assets/images/svg/pending.svg"
                                        className="blur-up lazyloaded"
                                        alt
                                      />
                                      <div className="total-detail">
                                        <h5>Total Pending Order</h5>
                                        <h3>254</h3>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                    <div className="total-contain">
                                      <img
                                        src="../assets/images/svg/wishlist.svg"
                                        className="img-1 blur-up lazyloaded"
                                        alt
                                      />
                                      <img
                                        src="../assets/images/svg/wishlist.svg"
                                        className="blur-up lazyloaded"
                                        alt
                                      />
                                      <div className="total-detail">
                                        <h5>Total Wishlist</h5>
                                        <h3>32158</h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="dashboard-title">
                                <h3>Account Information</h3>
                              </div>
                              <div className="row g-4">
                                <div className="col-xxl-6">
                                  <div className="dashboard-content-title">
                                    <h4>
                                      Contact Information{" "}
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                      >
                                        Edit
                                      </a>
                                    </h4>
                                  </div>
                                  <div className="dashboard-detail">
                                    <h6 className="text-content">MARK JECNO</h6>
                                    <h6 className="text-content">
                                      vicki.pope@gmail.com
                                    </h6>
                                    <a href="javascript:void(0)">
                                      Change Password
                                    </a>
                                  </div>
                                </div>
                                <div className="col-xxl-6">
                                  <div className="dashboard-content-title">
                                    <h4>
                                      Newsletters{" "}
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                      >
                                        Edit
                                      </a>
                                    </h4>
                                  </div>
                                  <div className="dashboard-detail">
                                    <h6 className="text-content">
                                      You are currently not subscribed to any
                                      newsletter
                                    </h6>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="dashboard-content-title">
                                    <h4>
                                      Address Book{" "}
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                      >
                                        Edit
                                      </a>
                                    </h4>
                                  </div>
                                  <div className="row g-4">
                                    <div className="col-xxl-6">
                                      <div className="dashboard-detail">
                                        <h6 className="text-content">
                                          Default Billing Address
                                        </h6>
                                        <h6 className="text-content">
                                          You have not set a default billing
                                          address.
                                        </h6>
                                        <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#editProfile"
                                        >
                                          Edit Address
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col-xxl-6">
                                      <div className="dashboard-detail">
                                        <h6 className="text-content">
                                          Default Shipping Address
                                        </h6>
                                        <h6 className="text-content">
                                          You have not set a default shipping
                                          address.
                                        </h6>
                                        <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#editProfile"
                                        >
                                          Edit Address
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-wishlist"
                            role="tabpanel"
                          >
                            <div className="dashboard-wishlist">
                              <div className="title">
                                <h2>My Wishlist History</h2>
                                <span className="title-leaf title-leaf-gray">
                                  <svg className="icon-width bg-gray">
                                    <use xlinkto="../assets/svg/leaf.svg#leaf" />
                                  </svg>
                                </span>
                              </div>
                              <div className="row g-sm-4 g-3">
                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                  <div className="product-box-3 theme-bg-white h-100">
                                    <div className="product-header">
                                      <div className="product-image">
                                        <a href="product-left-thumbnail.html">
                                          <img
                                            src="../assets/images/cake/product/2.png"
                                            className="img-fluid blur-up lazyload"
                                            alt
                                          />
                                        </a>
                                        <div className="product-header-top">
                                          <button className="btn wishlist-button close_button">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-x"
                                            >
                                              <line
                                                x1={18}
                                                y1={6}
                                                x2={6}
                                                y2={18}
                                              />
                                              <line
                                                x1={6}
                                                y1={6}
                                                x2={18}
                                                y2={18}
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-footer">
                                      <div className="product-detail">
                                        <span className="span-name">
                                          Vegetable
                                        </span>
                                        <a href="product-left-thumbnail.html">
                                          <h5 className="name">
                                            Fresh Bread and Pastry Flour 200 g
                                          </h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">
                                          Cheesy feet cheesy grin brie.
                                          Mascarpone cheese and wine hard cheese
                                          the big cheese everyone loves smelly
                                          cheese macaroni cheese croque
                                          monsieur.
                                        </p>
                                        <h6 className="unit mt-1">250 ml</h6>
                                        <h5 className="price">
                                          <span className="theme-color">
                                            ₹08.02
                                          </span>
                                          <del>₹15.15</del>
                                        </h5>
                                        <div className="add-to-cart-box mt-2">
                                          <button
                                            className="btn btn-add-cart addcart-button"
                                            tabIndex={0}
                                          >
                                            Add
                                            <span className="add-icon">
                                              <i className="fa-solid fa-plus" />
                                            </span>
                                          </button>
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
                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                  <div className="product-box-3 theme-bg-white h-100">
                                    <div className="product-header">
                                      <div className="product-image">
                                        <a href="product-left-thumbnail.html">
                                          <img
                                            src="../assets/images/cake/product/3.png"
                                            className="img-fluid blur-up lazyload"
                                            alt
                                          />
                                        </a>
                                        <div className="product-header-top">
                                          <button className="btn wishlist-button close_button">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-x"
                                            >
                                              <line
                                                x1={18}
                                                y1={6}
                                                x2={6}
                                                y2={18}
                                              />
                                              <line
                                                x1={6}
                                                y1={6}
                                                x2={18}
                                                y2={18}
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-footer">
                                      <div className="product-detail">
                                        <span className="span-name">
                                          Vegetable
                                        </span>
                                        <a href="product-left-thumbnail.html">
                                          <h5 className="name">
                                            Peanut Butter Bite Premium Butter
                                            Cookies 600 g
                                          </h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">
                                          Feta taleggio croque monsieur swiss
                                          manchego cheesecake dolcelatte
                                          jarlsberg. Hard cheese danish fontina
                                          boursin melted cheese fondue.
                                        </p>
                                        <h6 className="unit mt-1">350 G</h6>
                                        <h5 className="price">
                                          <span className="theme-color">
                                            ₹04.33
                                          </span>
                                          <del>₹10.36</del>
                                        </h5>
                                        <div className="add-to-cart-box mt-2">
                                          <button
                                            className="btn btn-add-cart addcart-button"
                                            tabIndex={0}
                                          >
                                            Add
                                            <span className="add-icon">
                                              <i className="fa-solid fa-plus" />
                                            </span>
                                          </button>
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
                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                  <div className="product-box-3 theme-bg-white h-100">
                                    <div className="product-header">
                                      <div className="product-image">
                                        <a href="product-left-thumbnail.html">
                                          <img
                                            src="../assets/images/cake/product/4.png"
                                            className="img-fluid blur-up lazyload"
                                            alt
                                          />
                                        </a>
                                        <div className="product-header-top">
                                          <button className="btn wishlist-button close_button">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-x"
                                            >
                                              <line
                                                x1={18}
                                                y1={6}
                                                x2={6}
                                                y2={18}
                                              />
                                              <line
                                                x1={6}
                                                y1={6}
                                                x2={18}
                                                y2={18}
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-footer">
                                      <div className="product-detail">
                                        <span className="span-name">
                                          Snacks
                                        </span>
                                        <a href="product-left-thumbnail.html">
                                          <h5 className="name">
                                            SnackAmor Combo Pack of Jowar Stick
                                            and Jowar Chips
                                          </h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">
                                          Lancashire hard cheese parmesan.
                                          Danish fontina mozzarella cream cheese
                                          smelly cheese cheese and wine
                                          cheesecake dolcelatte stilton. Cream
                                          cheese parmesan who moved my cheese
                                          when the cheese comes out everybody's
                                          happy cream cheese red leicester
                                          ricotta edam.
                                        </p>
                                        <h6 className="unit mt-1">570 G</h6>
                                        <h5 className="price">
                                          <span className="theme-color">
                                            ₹12.52
                                          </span>
                                          <del>₹13.62</del>
                                        </h5>
                                        <div className="add-to-cart-box mt-2">
                                          <button
                                            className="btn btn-add-cart addcart-button"
                                            tabIndex={0}
                                          >
                                            Add
                                            <span className="add-icon">
                                              <i className="fa-solid fa-plus" />
                                            </span>
                                          </button>
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
                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                  <div className="product-box-3 theme-bg-white h-100">
                                    <div className="product-header">
                                      <div className="product-image">
                                        <a href="product-left-thumbnail.html">
                                          <img
                                            src="../assets/images/cake/product/5.png"
                                            className="img-fluid blur-up lazyload"
                                            alt
                                          />
                                        </a>
                                        <div className="product-header-top">
                                          <button className="btn wishlist-button close_button">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-x"
                                            >
                                              <line
                                                x1={18}
                                                y1={6}
                                                x2={6}
                                                y2={18}
                                              />
                                              <line
                                                x1={6}
                                                y1={6}
                                                x2={18}
                                                y2={18}
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-footer">
                                      <div className="product-detail">
                                        <span className="span-name">
                                          Snacks
                                        </span>
                                        <a href="product-left-thumbnail.html">
                                          <h5 className="name">
                                            Yumitos Chilli Sprinkled Potato
                                            Chips 100 g
                                          </h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">
                                          Cheddar cheddar pecorino hard cheese
                                          hard cheese cheese and biscuits
                                          bocconcini babybel. Cow goat paneer
                                          cream cheese fromage cottage cheese
                                          cauliflower cheese jarlsberg.
                                        </p>
                                        <h6 className="unit mt-1">100 G</h6>
                                        <h5 className="price">
                                          <span className="theme-color">
                                            ₹10.25
                                          </span>
                                          <del>₹12.36</del>
                                        </h5>
                                        <div className="add-to-cart-box mt-2">
                                          <button
                                            className="btn btn-add-cart addcart-button"
                                            tabIndex={0}
                                          >
                                            Add
                                            <span className="add-icon">
                                              <i className="fa-solid fa-plus" />
                                            </span>
                                          </button>
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
                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                  <div className="product-box-3 theme-bg-white h-100">
                                    <div className="product-header">
                                      <div className="product-image">
                                        <a href="product-left-thumbnail.html">
                                          <img
                                            src="../assets/images/cake/product/6.png"
                                            className="img-fluid blur-up lazyload"
                                            alt
                                          />
                                        </a>
                                        <div className="product-header-top">
                                          <button className="btn wishlist-button close_button">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-x"
                                            >
                                              <line
                                                x1={18}
                                                y1={6}
                                                x2={6}
                                                y2={18}
                                              />
                                              <line
                                                x1={6}
                                                y1={6}
                                                x2={18}
                                                y2={18}
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-footer">
                                      <div className="product-detail">
                                        <span className="span-name">
                                          Vegetable
                                        </span>
                                        <a href="product-left-thumbnail.html">
                                          <h5 className="name">
                                            Fantasy Crunchy Choco Chip Cookies
                                          </h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">
                                          Bavarian bergkase smelly cheese swiss
                                          cut the cheese lancashire who moved my
                                          cheese manchego melted cheese. Red
                                          leicester paneer cow when the cheese
                                          comes out everybody's happy croque
                                          monsieur goat melted cheese
                                          port-salut.
                                        </p>
                                        <h6 className="unit mt-1">550 G</h6>
                                        <h5 className="price">
                                          <span className="theme-color">
                                            ₹14.25
                                          </span>
                                          <del>₹16.57</del>
                                        </h5>
                                        <div className="add-to-cart-box mt-2">
                                          <button
                                            className="btn btn-add-cart addcart-button"
                                            tabIndex={0}
                                          >
                                            Add
                                            <span className="add-icon">
                                              <i className="fa-solid fa-plus" />
                                            </span>
                                          </button>
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
                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                  <div className="product-box-3 theme-bg-white h-100">
                                    <div className="product-header">
                                      <div className="product-image">
                                        <a href="product-left-thumbnail.html">
                                          <img
                                            src="../assets/images/cake/product/7.png"
                                            className="img-fluid blur-up lazyload"
                                            alt
                                          />
                                        </a>
                                        <div className="product-header-top">
                                          <button className="btn wishlist-button close_button">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-x"
                                            >
                                              <line
                                                x1={18}
                                                y1={6}
                                                x2={6}
                                                y2={18}
                                              />
                                              <line
                                                x1={6}
                                                y1={6}
                                                x2={18}
                                                y2={18}
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-footer">
                                      <div className="product-detail">
                                        <span className="span-name">
                                          Vegetable
                                        </span>
                                        <a href="product-left-thumbnail.html">
                                          <h5 className="name">
                                            Fresh Bread and Pastry Flour 200 g
                                          </h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">
                                          Melted cheese babybel chalk and
                                          cheese. Port-salut port-salut cream
                                          cheese when the cheese comes out
                                          everybody's happy cream cheese hard
                                          cheese cream cheese red leicester.
                                        </p>
                                        <h6 className="unit mt-1">1 Kg</h6>
                                        <h5 className="price">
                                          <span className="theme-color">
                                            ₹12.68
                                          </span>
                                          <del>₹14.69</del>
                                        </h5>
                                        <div className="add-to-cart-box mt-2">
                                          <button
                                            className="btn btn-add-cart addcart-button"
                                            tabIndex={0}
                                          >
                                            Add
                                            <span className="add-icon">
                                              <i className="fa-solid fa-plus" />
                                            </span>
                                          </button>
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
                                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                  <div className="product-box-3 theme-bg-white h-100">
                                    <div className="product-header">
                                      <div className="product-image">
                                        <a href="product-left-thumbnail.html">
                                          <img
                                            src="../assets/images/cake/product/2.png"
                                            className="img-fluid blur-up lazyload"
                                            alt
                                          />
                                        </a>
                                        <div className="product-header-top">
                                          <button className="btn wishlist-button close_button">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-x"
                                            >
                                              <line
                                                x1={18}
                                                y1={6}
                                                x2={6}
                                                y2={18}
                                              />
                                              <line
                                                x1={6}
                                                y1={6}
                                                x2={18}
                                                y2={18}
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-footer">
                                      <div className="product-detail">
                                        <span className="span-name">
                                          Vegetable
                                        </span>
                                        <a href="product-left-thumbnail.html">
                                          <h5 className="name">
                                            Fresh Bread and Pastry Flour 200 g
                                          </h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">
                                          Squirty cheese cottage cheese cheese
                                          strings. Red leicester paneer danish
                                          fontina queso lancashire when the
                                          cheese comes out everybody's happy
                                          cottage cheese paneer.
                                        </p>
                                        <h6 className="unit mt-1">250 ml</h6>
                                        <h5 className="price">
                                          <span className="theme-color">
                                            ₹08.02
                                          </span>
                                          <del>₹15.15</del>
                                        </h5>
                                        <div className="add-to-cart-box mt-2">
                                          <button
                                            className="btn btn-add-cart addcart-button"
                                            tabIndex={0}
                                          >
                                            Add
                                            <span className="add-icon">
                                              <i className="fa-solid fa-plus" />
                                            </span>
                                          </button>
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
                            </div>
                          </div>
                          <div
                            className="tab-pane fade active show"
                            id="pills-order"
                            role="tabpanel"
                          >
                            <div className="dashboard-order">
                              <div className="title">
                                <h2>My Orders History</h2>
                                <span className="title-leaf title-leaf-gray">
                                  <svg className="icon-width bg-gray">
                                    <use xlinkto="../assets/svg/leaf.svg#leaf" />
                                  </svg>
                                </span>
                              </div>
                              <div className="order-contain">
                                <div className="order-box dashboard-bg-box">
                                  <div className="order-container">
                                    <div className="order-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-box"
                                      >
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line
                                          x1={12}
                                          y1="22.08"
                                          x2={12}
                                          y2={12}
                                        />
                                      </svg>
                                    </div>
                                    <div className="order-detail">
                                      <h4>
                                        Delivers <span>Pending</span>
                                      </h4>
                                      <h6 className="text-content">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloribus vitae vero
                                        aut deleniti. Quasi sed laboriosam odit,
                                        illo deserunt harum alias repellat.
                                        Eaque harum blanditiis nemo dolorem
                                        dignissimos illo beatae..
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="product-order-detail">
                                    <a
                                      href="product-left-thumbnail.html"
                                      className="order-image"
                                    >
                                      <img
                                        src="../assets/p/images.png"
                                        className="blur-up lazyloaded"
                                        alt
                                      />
                                    </a>
                                    <div className="order-wrap">
                                      <a href="product-left-thumbnail.html">
                                        <h3>XXXXXXXXXXXXX</h3>
                                      </a>
                                      <p className="text-content">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Laboriosam repellendus
                                        non, pariatur quisquam voluptate nobis
                                        molestiae aperiam tempore voluptatem
                                        porro nisi blanditiis ipsum, repellat,
                                        quo vero quas sint minima natus.
                                      </p>
                                      <ul className="product-size">
                                        <li>
                                          <div className="size-box">
                                            <h6 className="text-content">
                                              Price :{" "}
                                            </h6>
                                            <h5>₹20.68</h5>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="size-box">
                                            <h6 className="text-content">
                                              Rate :{" "}
                                            </h6>
                                            <div className="product-rating ms-2">
                                              <ul className="rating">
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star fill"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star fill"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star fill"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star fill"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li></li>
                                        <li>
                                          <div className="size-box">
                                            <h6 className="text-content">
                                              Quantity :{" "}
                                            </h6>
                                            <h5>2 PCS</h5>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="order-box dashboard-bg-box">
                                  <div className="order-container">
                                    <div className="order-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-box"
                                      >
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line
                                          x1={12}
                                          y1="22.08"
                                          x2={12}
                                          y2={12}
                                        />
                                      </svg>
                                    </div>
                                    <div className="order-detail">
                                      <h4>
                                        Delivered{" "}
                                        <span className="success-bg">
                                          Success
                                        </span>
                                      </h4>
                                      <h6 className="text-content">
                                        {" "}
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Nostrum soluta tempora
                                        nam minus odio. Minus perspiciatis ea
                                        cumque sed eos veniam consequuntur
                                        laboriosam eligendi quaerat ullam non
                                        in, provident soluta!
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="product-order-detail">
                                    <a
                                      href="product-left-thumbnail.html"
                                      className="order-image"
                                    >
                                      <img
                                        src="../assets/p/images.png"
                                        alt
                                        className="blur-up lazyloaded"
                                      />
                                    </a>
                                    <div className="order-wrap">
                                      <a href="product-left-thumbnail.html">
                                        <h3>XXXXXXXXXXXXXXXXXX</h3>
                                      </a>
                                      <p className="text-content">
                                        Pecorino paneer port-salut when the
                                        cheese comes out everybody's happy red
                                        leicester mascarpone blue castello
                                        cauliflower cheese.
                                      </p>
                                      <ul className="product-size">
                                        <li>
                                          <div className="size-box">
                                            <h6 className="text-content">
                                              Price :{" "}
                                            </h6>
                                            <h5>₹3 PCS</h5>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="size-box">
                                            <h6 className="text-content">
                                              Rate :{" "}
                                            </h6>
                                            <div className="product-rating ms-2">
                                              <ul className="rating">
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star fill"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star fill"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star fill"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star fill"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                                <li>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-star"
                                                  >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                  </svg>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li></li>
                                        <li>
                                          <div className="size-box">
                                            <h6 className="text-content">
                                              Quantity :{" "}
                                            </h6>
                                            <h5>2 PCS</h5>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-address"
                            role="tabpanel"
                          >
                            <div className="dashboard-address">
                              <div className="title title-flex">
                                <div>
                                  <h2>My Address Book</h2>
                                  <span className="title-leaf">
                                    <svg className="icon-width bg-gray">
                                      <use xlinkto="../assets/svg/leaf.svg#leaf" />
                                    </svg>
                                  </span>
                                </div>
                                <button
                                  className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add-address"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-plus me-2"
                                  >
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                  </svg>{" "}
                                  Add New Address
                                </button>
                              </div>
                              <div className="row g-sm-4 g-3">
                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                  <div className="address-box">
                                    <div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="jack"
                                          id="flexRadioDefault2"
                                          defaultChecked
                                        />
                                      </div>
                                      <div className="label">
                                        <label>Home</label>
                                      </div>
                                      <div className="table-responsive address-table">
                                        <table className="table">
                                          <tbody>
                                            <tr>
                                              <td colSpan={2}>Jack Jennas</td>
                                            </tr>
                                            <tr>
                                              <td>Address :</td>
                                              <td>
                                                <p>
                                                  8424 James Lane South San
                                                  Francisco, CA 94080
                                                </p>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Pin Code :</td>
                                              <td>+380</td>
                                            </tr>
                                            <tr>
                                              <td>Phone :</td>
                                              <td>+ 812-710-3798</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div className="button-group">
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-edit"
                                        >
                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                        Edit
                                      </button>
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#removeProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-trash-2"
                                        >
                                          <polyline points="3 6 5 6 21 6" />
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                          <line
                                            x1={10}
                                            y1={11}
                                            x2={10}
                                            y2={17}
                                          />
                                          <line
                                            x1={14}
                                            y1={11}
                                            x2={14}
                                            y2={17}
                                          />
                                        </svg>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                  <div className="address-box">
                                    <div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="jack"
                                          id="flexRadioDefault3"
                                        />
                                      </div>
                                      <div className="label">
                                        <label>Office</label>
                                      </div>
                                      <div className="table-responsive address-table">
                                        <table className="table">
                                          <tbody>
                                            <tr>
                                              <td colSpan={2}>
                                                Terry S. Sutton
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Address :</td>
                                              <td>
                                                <p>
                                                  2280 Rose Avenue Kenner, LA
                                                  70062
                                                </p>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Pin Code :</td>
                                              <td>+25</td>
                                            </tr>
                                            <tr>
                                              <td>Phone :</td>
                                              <td>+ 504-228-0969</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div className="button-group">
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-edit"
                                        >
                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                        Edit
                                      </button>
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#removeProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-trash-2"
                                        >
                                          <polyline points="3 6 5 6 21 6" />
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                          <line
                                            x1={10}
                                            y1={11}
                                            x2={10}
                                            y2={17}
                                          />
                                          <line
                                            x1={14}
                                            y1={11}
                                            x2={14}
                                            y2={17}
                                          />
                                        </svg>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                  <div className="address-box">
                                    <div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="jack"
                                          id="flexRadioDefault4"
                                        />
                                      </div>
                                      <div className="label">
                                        <label>Neighbour</label>
                                      </div>
                                      <div className="table-responsive address-table">
                                        <table className="table">
                                          <tbody>
                                            <tr>
                                              <td colSpan={2}>
                                                Juan M. McKeon
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Address :</td>
                                              <td>
                                                <p>
                                                  1703 Carson Street Lexington,
                                                  KY 40593
                                                </p>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Pin Code :</td>
                                              <td>+78</td>
                                            </tr>
                                            <tr>
                                              <td>Phone :</td>
                                              <td>+ 859-257-0509</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div className="button-group">
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-edit"
                                        >
                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                        Edit
                                      </button>
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#removeProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-trash-2"
                                        >
                                          <polyline points="3 6 5 6 21 6" />
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                          <line
                                            x1={10}
                                            y1={11}
                                            x2={10}
                                            y2={17}
                                          />
                                          <line
                                            x1={14}
                                            y1={11}
                                            x2={14}
                                            y2={17}
                                          />
                                        </svg>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                  <div className="address-box">
                                    <div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="jack"
                                          id="flexRadioDefault5"
                                        />
                                      </div>
                                      <div className="label">
                                        <label>Home 2</label>
                                      </div>
                                      <div className="table-responsive address-table">
                                        <table className="table">
                                          <tbody>
                                            <tr>
                                              <td colSpan={2}>
                                                Gary M. Bailey
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Address :</td>
                                              <td>
                                                <p>
                                                  2135 Burning Memory Lane
                                                  Philadelphia, PA 19135
                                                </p>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Pin Code :</td>
                                              <td>+26</td>
                                            </tr>
                                            <tr>
                                              <td>Phone :</td>
                                              <td>+ 215-335-9916</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div className="button-group">
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-edit"
                                        >
                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                        Edit
                                      </button>
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#removeProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-trash-2"
                                        >
                                          <polyline points="3 6 5 6 21 6" />
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                          <line
                                            x1={10}
                                            y1={11}
                                            x2={10}
                                            y2={17}
                                          />
                                          <line
                                            x1={14}
                                            y1={11}
                                            x2={14}
                                            y2={17}
                                          />
                                        </svg>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                  <div className="address-box">
                                    <div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="jack"
                                          id="flexRadioDefault1"
                                        />
                                      </div>
                                      <div className="label">
                                        <label>Home 2</label>
                                      </div>
                                      <div className="table-responsive address-table">
                                        <table className="table">
                                          <tbody>
                                            <tr>
                                              <td colSpan={2}>
                                                Gary M. Bailey
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Address :</td>
                                              <td>
                                                <p>
                                                  2135 Burning Memory Lane
                                                  Philadelphia, PA 19135
                                                </p>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Pin Code :</td>
                                              <td>+26</td>
                                            </tr>
                                            <tr>
                                              <td>Phone :</td>
                                              <td>+ 215-335-9916</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div className="button-group">
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-edit"
                                        >
                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                        Edit
                                      </button>
                                      <button
                                        className="btn btn-sm add-button w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#removeProfile"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-trash-2"
                                        >
                                          <polyline points="3 6 5 6 21 6" />
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                          <line
                                            x1={10}
                                            y1={11}
                                            x2={10}
                                            y2={17}
                                          />
                                          <line
                                            x1={14}
                                            y1={11}
                                            x2={14}
                                            y2={17}
                                          />
                                        </svg>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-card"
                            role="tabpanel"
                          >
                            <div className="dashboard-card">
                              <div className="title title-flex">
                                <div>
                                  <h2>My Card Details</h2>
                                  <span className="title-leaf">
                                    <svg className="icon-width bg-gray">
                                      <use xlinkto="../assets/svg/leaf.svg#leaf" />
                                    </svg>
                                  </span>
                                </div>
                                <button
                                  className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-plus me-2"
                                  >
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                  </svg>{" "}
                                  Add New Card
                                </button>
                              </div>
                              <div className="row g-4">
                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                                  <div className="payment-card-detail">
                                    <div className="card-details">
                                      <div className="card-number">
                                        <h4>XXXX - XXXX - XXXX - 2548</h4>
                                      </div>
                                      <div className="valid-detail">
                                        <div className="title">
                                          <span>valid</span>
                                          <span>thru</span>
                                        </div>
                                        <div className="date">
                                          <h3>08/05</h3>
                                        </div>
                                        <div className="primary">
                                          <span className="badge bg-pill badge-light">
                                            primary
                                          </span>
                                        </div>
                                      </div>
                                      <div className="name-detail">
                                        <div className="name">
                                          <h5>Audrey Carol</h5>
                                        </div>
                                        <div className="card-img">
                                          <img
                                            src="../assets/images/payment-icon/1.jpg"
                                            className="img-fluid blur-up lazyloaded"
                                            alt
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-card">
                                      <a
                                        data-bs-toggle="modal"
                                        data-bs-target="#editCard"
                                        href="javascript:void(0)"
                                      >
                                        <i className="far fa-edit" /> edit
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#removeProfile"
                                      >
                                        <i className="far fa-minus-square" />{" "}
                                        delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="edit-card-mobile">
                                    <a
                                      data-bs-toggle="modal"
                                      data-bs-target="#editCard"
                                      href="javascript:void(0)"
                                    >
                                      <i className="far fa-edit" /> edit
                                    </a>
                                    <a href="javascript:void(0)">
                                      <i className="far fa-minus-square" />
                                      delete
                                    </a>
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                                  <div className="payment-card-detail">
                                    <div className="card-details card-visa">
                                      <div className="card-number">
                                        <h4>XXXX - XXXX - XXXX - 1536</h4>
                                      </div>
                                      <div className="valid-detail">
                                        <div className="title">
                                          <span>valid</span>
                                          <span>thru</span>
                                        </div>
                                        <div className="date">
                                          <h3>12/23</h3>
                                        </div>
                                        <div className="primary">
                                          <span className="badge bg-pill badge-light">
                                            primary
                                          </span>
                                        </div>
                                      </div>
                                      <div className="name-detail">
                                        <div className="name">
                                          <h5>Leah Heather</h5>
                                        </div>
                                        <div className="card-img">
                                          <img
                                            src="../assets/images/payment-icon/2.jpg"
                                            className="img-fluid blur-up lazyloaded"
                                            alt
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-card">
                                      <a
                                        data-bs-toggle="modal"
                                        data-bs-target="#editCard"
                                        href="javascript:void(0)"
                                      >
                                        <i className="far fa-edit" /> edit
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#removeProfile"
                                      >
                                        <i className="far fa-minus-square" />{" "}
                                        delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="edit-card-mobile">
                                    <a
                                      data-bs-toggle="modal"
                                      data-bs-target="#editCard"
                                      href="javascript:void(0)"
                                    >
                                      <i className="far fa-edit" /> edit
                                    </a>
                                    <a href="javascript:void(0)">
                                      <i className="far fa-minus-square" />
                                      delete
                                    </a>
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                                  <div className="payment-card-detail">
                                    <div className="card-details debit-card">
                                      <div className="card-number">
                                        <h4>XXXX - XXXX - XXXX - 1366</h4>
                                      </div>
                                      <div className="valid-detail">
                                        <div className="title">
                                          <span>valid</span>
                                          <span>thru</span>
                                        </div>
                                        <div className="date">
                                          <h3>05/21</h3>
                                        </div>
                                        <div className="primary">
                                          <span className="badge bg-pill badge-light">
                                            primary
                                          </span>
                                        </div>
                                      </div>
                                      <div className="name-detail">
                                        <div className="name">
                                          <h5>mark jecno</h5>
                                        </div>
                                        <div className="card-img">
                                          <img
                                            src="../assets/images/payment-icon/3.jpg"
                                            className="img-fluid blur-up lazyloaded"
                                            alt
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="edit-card">
                                      <a
                                        data-bs-toggle="modal"
                                        data-bs-target="#editCard"
                                        href="javascript:void(0)"
                                      >
                                        <i className="far fa-edit" /> edit
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#removeProfile"
                                      >
                                        <i className="far fa-minus-square" />{" "}
                                        delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="edit-card-mobile">
                                    <a
                                      data-bs-toggle="modal"
                                      data-bs-target="#editCard"
                                      href="javascript:void(0)"
                                    >
                                      <i className="far fa-edit" /> edit
                                    </a>
                                    <a href="javascript:void(0)">
                                      <i className="far fa-minus-square" />
                                      delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                          >
                            <div className="dashboard-profile">
                              <div className="title">
                                <h2>My Profile</h2>
                                <span className="title-leaf">
                                  <svg className="icon-width bg-gray">
                                    <use xlinkto="../assets/svg/leaf.svg#leaf" />
                                  </svg>
                                </span>
                              </div>
                              <div className="profile-detail dashboard-bg-box">
                                <div className="dashboard-title">
                                  <h3>Profile Name</h3>
                                </div>
                                <div className="profile-name-detail">
                                  <div className="d-sm-flex align-items-center d-block">
                                    <h3>Vicki E. Pope</h3>
                                    <div className="product-rating profile-rating">
                                      <ul className="rating">
                                        <li>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star fill"
                                          >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star fill"
                                          >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star fill"
                                          >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star"
                                          >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star"
                                          >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                          </svg>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <a
                                    href="javascript:void(0)"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProfile"
                                  >
                                    Edit
                                  </a>
                                </div>
                                <div className="location-profile">
                                  <ul>
                                    <li>
                                      <div className="location-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-map-pin"
                                        >
                                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                          <circle cx={12} cy={10} r={3} />
                                        </svg>
                                        <h6>Downers Grove, IL</h6>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="location-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-mail"
                                        >
                                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                          <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <h6>vicki.pope@gmail.com</h6>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="location-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-check-square"
                                        >
                                          <polyline points="9 11 12 14 22 4" />
                                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                        <h6>Licensed for 2 years</h6>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="profile-description">
                                  <p>
                                    Residences can be classified by and how they
                                    are connected to neighbouring residences and
                                    land. Different types of housing tenure can
                                    be used for the same physical type.
                                  </p>
                                </div>
                              </div>
                              <div className="profile-about dashboard-bg-box">
                                <div className="row">
                                  <div className="col-xxl-7">
                                    <div className="dashboard-title mb-3">
                                      <h3>Profile About</h3>
                                    </div>
                                    <div className="table-responsive">
                                      <table className="table">
                                        <tbody>
                                          <tr>
                                            <td>Gender :</td>
                                            <td>Female</td>
                                          </tr>
                                          <tr>
                                            <td>Birthday :</td>
                                            <td>21/05/1997</td>
                                          </tr>
                                          <tr>
                                            <td>Phone Number :</td>
                                            <td>
                                              <a href="javascript:void(0)">
                                                {" "}
                                                +91 846 - 547 - 210
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Address :</td>
                                            <td>
                                              549 Sulphur Springs Road, Downers,
                                              IL
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="dashboard-title mb-3">
                                      <h3>Login Details</h3>
                                    </div>
                                    <div className="table-responsive">
                                      <table className="table">
                                        <tbody>
                                          <tr>
                                            <td>Email :</td>
                                            <td>
                                              <a href="javascript:void(0)">
                                                vicki.pope@gmail.com
                                                <span
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#editProfile"
                                                >
                                                  Edit
                                                </span>
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Password :</td>
                                            <td>
                                              <a href="javascript:void(0)">
                                                ●●●●●●
                                                <span
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#editProfile"
                                                >
                                                  Edit
                                                </span>
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="col-xxl-5">
                                    <div className="profile-image">
                                      <img
                                        src="../assets/images/inner-page/dashboard-profile.png"
                                        className="img-fluid blur-up lazyloaded"
                                        alt
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-download"
                            role="tabpanel"
                          >
                            <div className="dashboard-download">
                              <div className="title">
                                <h2>My Download</h2>
                                <span className="title-leaf">
                                  <svg className="icon-width bg-gray">
                                    <use xlinkto="../assets/svg/leaf.svg#leaf" />
                                  </svg>
                                </span>
                              </div>
                              <div className="download-detail dashboard-bg-box">
                                <form>
                                  <div className="input-group download-form">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Search your download"
                                    />
                                    <button
                                      className="btn theme-bg-color text-light"
                                      type="button"
                                      id="button-addon2"
                                    >
                                      Search
                                    </button>
                                  </div>
                                </form>
                                <div className="select-filter-box">
                                  <select className="form-select">
                                    <option selected>All marketplaces</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                  </select>
                                  <ul
                                    className="nav nav-pills filter-box"
                                    id="pills-tab"
                                    role="tablist"
                                  >
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link active"
                                        id="pills-data-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-data"
                                        type="button"
                                      >
                                        Data Purchased
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-title-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-title"
                                        type="button"
                                      >
                                        Title
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-rating-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-rating"
                                        type="button"
                                      >
                                        My Rating
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-recent-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-recent"
                                        type="button"
                                      >
                                        Recent Updates
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="tab-content"
                                  id="pills-tabContent"
                                >
                                  <div
                                    className="tab-pane fade show active"
                                    id="pills-data"
                                    role="tabpanel"
                                  >
                                    <div className="download-table">
                                      <div className="table-responsive">
                                        <table className="table">
                                          <thead>
                                            <tr>
                                              <th>No</th>
                                              <th>Image</th>
                                              <th>Name</th>
                                              <th />
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/1.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Sheltos - Real Estate Angular 17
                                                Template
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/2.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Oslo - Multipurpose Shopify
                                                Theme. Fast, Clean, and
                                                Flexible. OS 2.0
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/3.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Boho - React JS Admin Dashboard
                                                Template
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="pills-title"
                                  >
                                    <div className="download-table">
                                      <div className="table-responsive">
                                        <table className="table">
                                          <thead>
                                            <tr>
                                              <th>No</th>
                                              <th>Image</th>
                                              <th>Name</th>
                                              <th />
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/1.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Sheltos - Real Estate Angular 17
                                                Template
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/2.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Oslo - Multipurpose Shopify
                                                Theme. Fast, Clean, and
                                                Flexible. OS 2.0
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/3.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Boho - React JS Admin Dashboard
                                                Template
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="pills-rating"
                                  >
                                    <div className="download-table">
                                      <div className="table-responsive">
                                        <table className="table">
                                          <thead>
                                            <tr>
                                              <th>No</th>
                                              <th>Image</th>
                                              <th>Name</th>
                                              <th />
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/1.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Sheltos - Real Estate Angular 17
                                                Template
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/2.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Oslo - Multipurpose Shopify
                                                Theme. Fast, Clean, and
                                                Flexible. OS 2.0
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/3.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Boho - React JS Admin Dashboard
                                                Template
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="pills-recent"
                                  >
                                    <div className="download-table">
                                      <div className="table-responsive">
                                        <table className="table">
                                          <thead>
                                            <tr>
                                              <th>No</th>
                                              <th>Image</th>
                                              <th>Name</th>
                                              <th />
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/1.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Sheltos - Real Estate Angular 17
                                                Template
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/2.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Oslo - Multipurpose Shopify
                                                Theme. Fast, Clean, and
                                                Flexible. OS 2.0
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>
                                                <img
                                                  src="../assets/images/theme-icon/3.png"
                                                  className="img-fluid"
                                                  alt
                                                />
                                              </td>
                                              <td>
                                                Boho - React JS Admin Dashboard
                                                Template
                                              </td>
                                              <td>
                                                <div className="dropdown download-dropdown">
                                                  <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    Download
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        All files &amp;
                                                        documentation
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (PDF)
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="#"
                                                      >
                                                        License certificate
                                                        &amp; purchase code
                                                        (text)
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-security"
                            role="tabpanel"
                          >
                            <div className="dashboard-privacy">
                              <div className="dashboard-bg-box">
                                <div className="dashboard-title mb-4">
                                  <h3>Privacy</h3>
                                </div>
                                <div className="privacy-box">
                                  <div className="d-flex align-items-start">
                                    <h6>Allows others to see my profile</h6>
                                    <div className="form-check form-switch switch-radio ms-auto">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="redio"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="redio"
                                      />
                                    </div>
                                  </div>
                                  <p className="text-content">
                                    all peoples will be able to see my profile
                                  </p>
                                </div>
                                <div className="privacy-box">
                                  <div className="d-flex align-items-start">
                                    <h6>
                                      who has save this profile only that people
                                      see my profile
                                    </h6>
                                    <div className="form-check form-switch switch-radio ms-auto">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="redio2"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="redio2"
                                      />
                                    </div>
                                  </div>
                                  <p className="text-content">
                                    all peoples will not be able to see my
                                    profile
                                  </p>
                                </div>
                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                                  Save Changes
                                </button>
                              </div>
                              <div className="dashboard-bg-box mt-4">
                                <div className="dashboard-title mb-4">
                                  <h3>Account settings</h3>
                                </div>
                                <div className="privacy-box">
                                  <div className="d-flex align-items-start">
                                    <h6>
                                      Deleting Your Account Will Permanently
                                    </h6>
                                    <div className="form-check form-switch switch-radio ms-auto">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="redio3"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="redio3"
                                      />
                                    </div>
                                  </div>
                                  <p className="text-content">
                                    Once your account is deleted, you will be
                                    logged out and will be unable to log in
                                    back.
                                  </p>
                                </div>
                                <div className="privacy-box">
                                  <div className="d-flex align-items-start">
                                    <h6>
                                      Deleting Your Account Will Temporary
                                    </h6>
                                    <div className="form-check form-switch switch-radio ms-auto">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="redio4"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="redio4"
                                      />
                                    </div>
                                  </div>
                                  <p className="text-content">
                                    Once your account is deleted, you will be
                                    logged out and you will be create new
                                    account
                                  </p>
                                </div>
                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                                  Delete My Account
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
        </div>
      </section>
    </>
  );
};

export default Order;
