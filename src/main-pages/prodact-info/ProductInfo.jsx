
"use client";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SliderProductInfo from "@/components/slidercomponents/SliderProductInfo";
import WeeklyDiscounts from "../home/WeeklyDiscounts";
import Link from "next/link";

const ProductInfo = () => {
  return (
    <>
      <div>
        <section className="breadcrumb-section pt-0">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-contain">
                  <h2>Product</h2>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">
                          <i className="fa-solid fa-house" />
                        </a>
                      </li>
                      <li className="breadcrumb-item active">Waldent ECO </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-section">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp">
                <div className="row g-4">
                  <div className="col-xl-6 wow fadeInUp">
                    <div className="product-left-box">
                      <div className="row g-2">
                        <div className="col-xxl-10 col-lg-12 col-md-10 order-xxl-2 order-lg-1 order-md-2">
                          <div className="product-main-2 no-arrow">
                            <div>
                              <div className="slider-image">
                                <img
                                  src="../assets/p/Wal.png"
                                  id="img-1"
                                  data-zoom-image="../assets/images/product/category/1.jpg"
                                  className="img-fluid image_zoom_cls-0 blur-up lazyload"
                                  alt
                                />
                              </div>
                            </div>

                            <SliderProductInfo />
                          </div>
                        </div>
                        <div className="col-xxl-2 col-lg-12 col-md-2 order-xxl-1 order-lg-2 order-md-1">
                          <div className="left-slider-image-2 left-slider no-arrow slick-top"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="right-box-contain">
                      {/* <h6 className="offer-top">30% Off</h6> */}
                      <h2 className="name">
                        Waldent ECO PLUS Airotor Handpiece
                      </h2>
                      <div className="price-rating">
                        <h3 className="theme-color price">
                          ₹49.50 <del className="text-content">₹58.46</del>{" "}
                          <span className="offer theme-color">(8% off)</span>
                        </h3>
                        <div className="product-rating custom-rate">
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
                          {/* <span className="review">23 Customer Review</span> */}
                        </div>
                      </div>
                      <div className="product-contain">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Delectus voluptate, nihil eveniet illum
                          consequuntur maxime dolore voluptates.
                        </p>
                      </div>
                      <div className="product-package">
                        <div className="product-title">
                          <h4>Qty</h4>
                        </div>
                        <ul className="select-package">
                          <li>
                            <a href="javascript:void(0)">1 PCS</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">2 PCS</a>
                          </li>
                        </ul>
                      </div>

                      <div className="top-filter-menu">
                        <div className="category-dropdown">
                          <h5
                            className="text-content mt-lg-3"
                            style={{ color: "black" }}
                          >
                            <b>Size :</b>{" "}
                          </h5>
                          <DropdownButton
                            className="mt-lg-3"
                            id="dropdown-basic-button"
                            title="Choice in option"
                          >
                            <Dropdown.Item href="#/action-1">22 MM</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">90 MM</Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                      <div className="top-filter-menu">
                        <div className="category-dropdown">
                          <h5
                            className="text-content mt-lg-3"
                            style={{ color: "black" }}
                          >
                            <b>File type :</b>{" "}
                          </h5>
                          <DropdownButton
                            className="mt-lg-3"
                            id="dropdown-basic-button"
                            title="Choice in option"
                          >
                            <Dropdown.Item href="#/action-1">
                              Assorted (W1-W6) (Pack Of 6)
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              W10 (35/6%)
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              W11 (40/4%)
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              W12 (40/6%)
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>

                      <div className="note-box product-package">
                        <div className="cart_qty qty-box product-qty">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field
                            >
                              <i className="fa fa-plus" />
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field
                            >
                              <i className="fa fa-minus" />
                            </button>
                          </div>
                        </div>
                        <Link href="/cart">
                          <button
                            onclick="location.to = 'cart.html';"
                            className="btn btn-md bg-dark cart-button text-white w-100"
                          >
                            Add To Cart
                          </button>
                        </Link>
                      </div>
                      <div className="progress-sec">
                        <div className="left-progressbar">
                          <h6>Please hurry! Only 5 left in stock</h6>
                          <div
                            role="progressbar"
                            className="progress warning-progress"
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pickup-box">
                        <div className="product-info">
                          <ul className="product-info-list product-info-list-2">
                            <li>
                              Type : <a href="javascript:void(0)">Black Forest</a>
                            </li>
                            <li>
                              SKU : <a href="javascript:void(0)">SDFVW65467</a>
                            </li>
                            <li>
                              MFG : <a href="javascript:void(0)">Jun 4, 2022</a>
                            </li>
                            <li>
                              Stock :{" "}
                              <a href="javascript:void(0)">2 Items Left</a>
                            </li>
                            <li>
                              Tags : <a href="javascript:void(0)">Waldent ECO,</a>{" "}
                              <a href="javascript:void(0)">Airotor</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="product-section-box">
                      <ul
                        className="nav nav-tabs custom-nav"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="description-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#description"
                            type="button"
                            role="tab"
                          >
                            Description
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content custom-tab" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="description"
                          role="tabpanel"
                        >
                          <div className="product-description">
                            <div className="nav-desh">
                              <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt debitis asperiores
                                itaque similique recusandae dolor tenetur nulla
                                sequi ipsum vitae! Minima voluptas quis sint
                                optio quidem quae officiis tenetur tempora?.
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt debitis asperiores
                                itaque similique recusandae dolor tenetur nulla
                                sequi ipsum vitae! Minima voluptas quis sint
                                optio quidem quae officiis tenetur tempora?
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="info"
                          role="tabpanel"
                        >
                          <div className="table-responsive">
                            <table className="table info-table">
                              <tbody>
                                <tr>
                                  <td>Specialty</td>
                                  <td>Vegetarian</td>
                                </tr>
                                <tr>
                                  <td>Ingredient Type</td>
                                  <td>Vegetarian</td>
                                </tr>
                                <tr>
                                  <td>Brand</td>
                                  <td>Lavian Exotique</td>
                                </tr>
                                <tr>
                                  <td>Form</td>
                                  <td>Bar Brownie</td>
                                </tr>
                                <tr>
                                  <td>Package Information</td>
                                  <td>Box</td>
                                </tr>
                                <tr>
                                  <td>Manufacturer</td>
                                  <td>Prayagh Nutri Product Pvt Ltd</td>
                                </tr>
                                <tr>
                                  <td>Item part number</td>
                                  <td>
                                    LE 014 - 20pcs Crème Bakes (Pack of 2)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Net Quantity</td>
                                  <td>40.00 count</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="care"
                          role="tabpanel"
                        >
                          <div className="information-box">
                            <ul>
                              <li>
                                Store cream cakes in a refrigerator. Fondant
                                cakes should be stored in an air conditioned
                                environment.
                              </li>
                              <li>
                                Slice and serve the cake at room temperature and
                                make sure it is not exposed to heat.
                              </li>
                              <li>
                                Use a serrated knife to cut a fondant cake.
                              </li>
                              <li>
                                Sculptural elements and figurines may contain
                                wire supports or toothpicks or wooden skewers
                                for support.
                              </li>
                              <li>
                                Please check the placement of these items before
                                serving to small children.
                              </li>
                              <li>
                                The cake should be consumed within 24 hours.
                              </li>
                              <li>Enjoy your cake!</li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="review"
                          role="tabpanel"
                        >
                          <div className="review-box">
                            <div className="row">
                              <div className="col-xl-5">
                                <div className="product-rating-box">
                                  <div className="row">
                                    <div className="col-xl-12">
                                      <div className="product-main-rating">
                                        <h2>
                                          3.40
                                          <i data-feather="star" />
                                        </h2>
                                        <h5>5 Overall Rating</h5>
                                      </div>
                                    </div>
                                    <div className="col-xl-12">
                                      <ul className="product-rating-list">
                                        <li>
                                          <div className="rating-product">
                                            <h5>
                                              5<i data-feather="star" />
                                            </h5>
                                            <div className="progress">
                                              <div
                                                className="progress-bar"
                                                style={{ width: "40%" }}
                                              ></div>
                                            </div>
                                            <h5 className="total">2</h5>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="rating-product">
                                            <h5>
                                              4<i data-feather="star" />
                                            </h5>
                                            <div className="progress">
                                              <div
                                                className="progress-bar"
                                                style={{ width: "20%" }}
                                              ></div>
                                            </div>
                                            <h5 className="total">1</h5>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="rating-product">
                                            <h5>
                                              3<i data-feather="star" />
                                            </h5>
                                            <div className="progress">
                                              <div
                                                className="progress-bar"
                                                style={{ width: "0%" }}
                                              ></div>
                                            </div>
                                            <h5 className="total">0</h5>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="rating-product">
                                            <h5>
                                              2<i data-feather="star" />
                                            </h5>
                                            <div className="progress">
                                              <div
                                                className="progress-bar"
                                                style={{ width: "20%" }}
                                              ></div>
                                            </div>
                                            <h5 className="total">1</h5>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="rating-product">
                                            <h5>
                                              1<i data-feather="star" />
                                            </h5>
                                            <div className="progress">
                                              <div
                                                className="progress-bar"
                                                style={{ width: "20%" }}
                                              ></div>
                                            </div>
                                            <h5 className="total">1</h5>
                                          </div>
                                        </li>
                                      </ul>
                                      <div className="review-title-2">
                                        <h4 className="fw-bold">
                                          Review this product
                                        </h4>
                                        <p>
                                          Let other customers know what you
                                          think
                                        </p>
                                        <button
                                          className="btn"
                                          type="button"
                                          data-bs-toggle="modal"
                                          data-bs-target="#writereview"
                                        >
                                          Write a review
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-7">
                                <div className="review-people">
                                  <ul className="review-list">
                                    <li>
                                      <div className="people-box">
                                        <div>
                                          <div className="people-image people-text">
                                            <img
                                              alt="user"
                                              className="img-fluid "
                                              src="../assets/images/review/1.jpg"
                                            />
                                          </div>
                                        </div>
                                        <div className="people-comment">
                                          <div className="people-name">
                                            <a
                                              href="javascript:void(0)"
                                              className="name"
                                            >
                                              Jack Doe
                                            </a>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                {" "}
                                                29 Sep 2023 06:40:PM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="reply">
                                            <p>
                                              Avoid this product. The quality is
                                              terrible, and it started falling
                                              apart almost immediately. I wish I
                                              had read more reviews before
                                              buying. Lesson learned.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="people-box">
                                        <div>
                                          <div className="people-image people-text">
                                            <img
                                              alt="user"
                                              className="img-fluid "
                                              src="../assets/images/review/2.jpg"
                                            />
                                          </div>
                                        </div>
                                        <div className="people-comment">
                                          <div className="people-name">
                                            <a
                                              href="javascript:void(0)"
                                              className="name"
                                            >
                                              Jessica Miller
                                            </a>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                {" "}
                                                29 Sep 2023 06:34:PM
                                              </h6>
                                              <div className="product-rating">
                                                <div className="product-rating">
                                                  <ul className="rating">
                                                    <li>
                                                      <i
                                                        data-feather="star"
                                                        className="fill"
                                                      />
                                                    </li>
                                                    <li>
                                                      <i
                                                        data-feather="star"
                                                        className="fill"
                                                      />
                                                    </li>
                                                    <li>
                                                      <i
                                                        data-feather="star"
                                                        className="fill"
                                                      />
                                                    </li>
                                                    <li>
                                                      <i
                                                        data-feather="star"
                                                        className="fill"
                                                      />
                                                    </li>
                                                    <li>
                                                      <i data-feather="star" />
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="reply">
                                            <p>
                                              Honestly, I regret buying this
                                              item. The quality is subpar, and
                                              it feels like a waste of money. I
                                              wouldn't recommend it to anyone.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="people-box">
                                        <div>
                                          <div className="people-image people-text">
                                            <img
                                              alt="user"
                                              className="img-fluid "
                                              src="../assets/images/review/3.jpg"
                                            />
                                          </div>
                                        </div>
                                        <div className="people-comment">
                                          <div className="people-name">
                                            <a
                                              href="javascript:void(0)"
                                              className="name"
                                            >
                                              Rome Doe
                                            </a>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                {" "}
                                                29 Sep 2023 06:18:PM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="reply">
                                            <p>
                                              I am extremely satisfied with this
                                              purchase. The item arrived
                                              promptly, and the quality is
                                              exceptional. It's evident that the
                                              makers paid attention to detail.
                                              Overall, a fantastic buy!
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="people-box">
                                        <div>
                                          <div className="people-image people-text">
                                            <img
                                              alt="user"
                                              className="img-fluid "
                                              src="../assets/images/review/4.jpg"
                                            />
                                          </div>
                                        </div>
                                        <div className="people-comment">
                                          <div className="people-name">
                                            <a
                                              href="javascript:void(0)"
                                              className="name"
                                            >
                                              Sarah Davis
                                            </a>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                {" "}
                                                29 Sep 2023 05:58:PM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="reply">
                                            <p>
                                              I am genuinely delighted with this
                                              item. It's a total winner! The
                                              quality is superb, and it has
                                              added so much convenience to my
                                              daily routine. Highly satisfied
                                              customer!
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="people-box">
                                        <div>
                                          <div className="people-image people-text">
                                            <img
                                              alt="user"
                                              className="img-fluid "
                                              src="../assets/images/review/5.jpg"
                                            />
                                          </div>
                                        </div>
                                        <div className="people-comment">
                                          <div className="people-name">
                                            <a
                                              href="javascript:void(0)"
                                              className="name"
                                            >
                                              John Doe
                                            </a>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                {" "}
                                                29 Sep 2023 05:22:PM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="reply">
                                            <p>
                                              Very impressed with this purchase.
                                              The item is of excellent quality,
                                              and it has exceeded my
                                              expectations.
                                            </p>
                                          </div>
                                        </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <WeeklyDiscounts />

      <br />
    </>
  );
};

export default ProductInfo;
