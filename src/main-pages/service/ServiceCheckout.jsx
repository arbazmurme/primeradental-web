"use client";
import Link from "next/link";
import React, { useState } from "react";

const ServiceCheckout = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(null);

  const dates = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
  ];
  // const times = [
  //     "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  //     "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  //     "06:00 PM", "07:00 PM"
  // ];
  return (
    <>
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2>Checkout</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="fa-solid fa-house" />
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Checkout</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="checkout-section-2 section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-lg-8">
              <div className="left-sidebar-checkout">
                <div className="checkout-detail-box">
                  <ul>
                    <li>
                      <div className="checkout-icon">
                        <Link href="/service-cart">
                          <img
                            src="../assets/p/home.png"
                            className="img-fluid blur-up lazyload"
                            alt
                          />
                        </Link>
                      </div>
                      <div className="checkout-box">
                        <div className="checkout-title">
                          <h4>Delivery Address</h4>
                        </div>
                        <div className="checkout-detail">
                          <div className="row g-4">
                            <div className="col-xxl-6 col-lg-12 col-md-6">
                              <div className="delivery-address-box">
                                <div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="jack"
                                      id="flexRadioDefault2"
                                      defaultChecked="checked"
                                    />
                                  </div>
                                  <div className="label">
                                    <Link href="/change">
                                      <label
                                        style={{
                                          color: "white",
                                          fontSize: "13px",
                                        }}
                                      >
                                        {" "}
                                        <b> Change</b>
                                      </label>
                                    </Link>
                                  </div>
                                  <ul className="delivery-address-detail">
                                    <li>
                                      <h4 className="fw-500">Jack Jennas</h4>
                                    </li>
                                    <li>
                                      <p className="text-content">
                                        <span className="text-title">
                                          Address :
                                        </span>
                                        xxxxxxxxxxxxxxxxxx
                                      </p>
                                    </li>
                                    <li>
                                      <h6 className="text-content">
                                        <span className="text-title">
                                          Pin Code :
                                        </span>
                                        xxxxxx
                                      </h6>
                                    </li>
                                    <li>
                                      <h6 className="text-content mb-0">
                                        <span className="text-title">
                                          Phone :
                                        </span>{" "}
                                        +91 xxxxxxx
                                      </h6>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="checkout-icon">
                        <Link href="/service-cart">
                          <img
                            src="../assets/p/timetab.png"
                            className="img-fluid blur-up lazyload"
                            alt
                          />
                        </Link>
                      </div>
                      <div className="checkout-box">
                        <div className="checkout-detail">
                          <div className="row g-4">
                            <div className="col-12 future-box show">
                              <div className="future-option">
                                <div className="row g-md-0 gy-4">
                                  <div className="checkout-title">
                                    <h4 className="mt-lg-3">
                                      Select Slot & Tlme{" "}
                                    </h4>
                                  </div>
                                  <div className="col-md-12">
                                    <form className="form-floating theme-form-floating date-box">
                                      <input
                                        type="date"
                                        className="form-control"
                                      />
                                      <label style={{ color: "black" }}>
                                        Select Date
                                      </label>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="checkout-icon">
                        <Link href="/service-cart">
                          <img
                            src="../assets/p/Payment Option.png"
                            className="img-fluid blur-up lazyload"
                            alt
                          />
                        </Link>
                      </div>
                      {/* <div className="checkout-box">

                                                <div className="checkout-detail">
                                                    <div className="accordion accordion-flush custom-accordion" id="accordionFlushExample">
                                                        <div className="accordion-item">
                                                            <div id="flush-collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample" style={{}}>
                                                                <div className="accordion-body">

                                                                    <div className="row g-2">
                                                                        <div className="checkout-title">
                                                                            <h4 className='mt-lg-3'>Select start time of service  </h4>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="bank1" />
                                                                                <label className="form-check-label" htmlFor="bank1">06:00 AM </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="bank2" />
                                                                                <label className="form-check-label" htmlFor="bank2">07:00 AM </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="bank3" />
                                                                                <label className="form-check-label" htmlFor="bank3">08:00 AM </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="bank4" />
                                                                                <label className="form-check-label" htmlFor="bank4">09:00 AM </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="bank5" />
                                                                                <label className="form-check-label" htmlFor="bank5">10:00 AM </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="custom-form-check form-check">
                                                                                <input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="bank6" />
                                                                                <label className="form-check-label" htmlFor="bank6">11:00 AM </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                      <div
                        className="p-4 max-w-md mx-auto"
                        style={{
                          overflow: "hidden",
                          padding: "2.5rem !important",
                        }}
                      >
                        {/* <h3 className="text-lg font-semibold mt-4">Select start time of service</h3> */}
                        <div className="flex gap-2 mt-2">
                          {dates.map((date) => (
                            <button
                              key={date}
                              className={`px-4 py-2 border rounded-md ${
                                selectedDate === date
                                  ? "bg-blue-500 text-white bg-info"
                                  : "bg-gray-100"
                              }`}
                              onClick={() => setSelectedDate(date)}
                              style={{ margin: "10px" }}
                            >
                              {date}
                            </button>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li>
                      {/* <Link  href="/service-cart">
                                                <img src="../assets/p/images.png" className="img-fluid blur-up lazyload" alt="dummy" />
                                            </Link> */}
                      <div className="checkout-box">
                        <div className="checkout-title">
                          <h4>Payment Option</h4>
                        </div>
                        <div className="checkout-detail">
                          <div
                            className="accordion accordion-flush custom-accordion"
                            id="accordionFlushExample"
                          >
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="flush-headingFour"
                              >
                                <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseFour"
                                  aria-expanded="false"
                                >
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      htmlFor="cash"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="cash"
                                        defaultChecked
                                      />{" "}
                                      Cash On Delivery
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="flush-headingTwo"
                              >
                                <div
                                  className="accordion-button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseTwo"
                                  aria-expanded="true"
                                >
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      htmlFor="banking"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="banking"
                                      />
                                      UPI{" "}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionFlushExample"
                                style={{}}
                              >
                                <div className="accordion-body">
                                  <div className="row g-2">
                                    <div className="col-12">
                                      <div className="select-option">
                                        <div className="form-floating theme-form-floating">
                                          <select className="form-select theme-form-select">
                                            <option value="hsbc">GPay</option>
                                            <option value="loyds">
                                              PhonePe{" "}
                                            </option>
                                            <option value="natwest">
                                              Pay Via UPI ID
                                            </option>
                                          </select>
                                          <label>Pay by any UPI app </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <div className="accordion-button collapsed">
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      htmlFor="credit"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="credit"
                                      />
                                      Credit or Debit Card
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                                style={{}}
                              >
                                <div className="accordion-body">
                                  <div className="row g-2">
                                    <div className="col-12">
                                      <div className="payment-method">
                                        <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="credit2"
                                            placeholder="Enter Credit & Debit Card Number"
                                          />
                                          <label htmlFor="credit2">
                                            Enter Credit &amp; Debit Card Number
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="expiry"
                                          placeholder="Enter Expiry Date"
                                        />
                                        <label htmlFor="expiry">
                                          Expiry Date
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="cvv"
                                          placeholder="Enter CVV Number"
                                        />
                                        <label htmlFor="cvv">CVV Number</label>
                                      </div>
                                    </div>
                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="password"
                                          className="form-control"
                                          id="password"
                                          placeholder="Enter Password"
                                        />
                                        <label htmlFor="password">
                                          Password
                                        </label>
                                      </div>
                                    </div>
                                    <div className="button-group mt-0">
                                      <ul>
                                        <li>
                                          <button className="btn btn-light shopping-button">
                                            Cancel
                                          </button>
                                        </li>
                                        <li>
                                          <button className="btn btn-animation">
                                            Use This Card
                                          </button>
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-side-summery-box">
                <div className="summery-box-2">
                  <div className="summery-header">
                    <h3>Order Summery</h3>
                  </div>
                  <ul className="summery-contain">
                    <li>
                      <img
                        src="../assets/p/Wal.png"
                        className="img-fluid blur-up lazyloaded checkout-image"
                        alt
                      />
                      <h4>
                        Baby Chili <span>X 1</span>
                      </h4>
                      <h4 className="price">₹xxx</h4>
                    </li>
                    <li>
                      <img
                        src="../assets/p/images.png"
                        className="img-fluid blur-up lazyloaded checkout-image"
                        alt
                      />
                      <h4>
                        Broccoli <span>X 2</span>
                      </h4>
                      <h4 className="price">₹xxx</h4>
                    </li>
                  </ul>
                  <ul className="summery-total">
                    <li>
                      <h4>Sub-Total</h4>
                      <h4 className="price">₹xxx</h4>
                    </li>
                    <li>
                      <h4>Tax</h4>
                      <h4 className="price">₹xxx</h4>
                    </li>
                    <li>
                      <h4>Coupon/Code</h4>
                      {/* <h4 className="price"> - ₹xxx</h4> */}
                      <Link href="/coupon">
                        <div
                          style={{
                            marginLeft: "169px",
                            color: "rgb(13, 164, 135)",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          <b>Apply</b>{" "}
                        </div>
                      </Link>
                    </li>

                    <li>
                      <h4>Wallet Used</h4>
                      <h4 className="price"> - ₹xxx</h4>
                    </li>

                    <li className="list-total">
                      <h4>Total :</h4>
                      <h4 className="price">₹xxx</h4>
                    </li>
                  </ul>
                </div>

                <Link href="/booking">
                  <button className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCheckout;
