import Link from "next/link";
import React from "react";

const BookingDetails = () => {
  return (
    <>
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2>Booking Details</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="fa-solid fa-house" />
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Booking Details</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="order-detail">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 col-lg-6">
              <div className="order-image">
                <img
                  src="assets/p/Order Success.gif"
                  className="img-fluid blur-up lazyloaded"
                  alt
                />
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-6">
              <div className="row g-sm-4 g-3">
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
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
                        className="feather feather-map-pin text-content"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Destination</h5>
                      <h4 style={{ fontSize: "15px" }}>
                        Home-Lane number 13, Sr nagar
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
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
                        className="feather feather-calendar text-content"
                      >
                        <rect
                          x={3}
                          y={4}
                          width={18}
                          height={18}
                          rx={2}
                          ry={2}
                        />
                        <line x1={16} y1={2} x2={16} y2={6} />
                        <line x1={8} y1={2} x2={8} y2={6} />
                        <line x1={3} y1={10} x2={21} y2={10} />
                      </svg>
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Estimated Time</h5>
                      <h4 style={{ fontSize: "15px" }}>
                        Mon, Feb 10 at 1:00 PM
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
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
                        className="feather feather-crosshair text-content"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <line x1={22} y1={12} x2={18} y2={12} />
                        <line x1={6} y1={12} x2={2} y2={12} />
                        <line x1={12} y1={6} x2={12} y2={2} />
                        <line x1={12} y1={22} x2={12} y2={18} />
                      </svg>
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">From</h5>
                      <h4 style={{ fontSize: "15px" }}>₹xxx total amount </h4>
                      <h4 style={{ fontSize: "15px" }}>
                        ₹xxx payment pending{" "}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 overflow-hidden">
                  <ol className="progtrckr">
                    <li className="progtrckr-done">
                      <h5>Booking Process</h5>
                      <h6 style={{ color: "rgb(0, 0, 0)" }}>05:43 AM</h6>
                    </li>

                    <li className="progtrckr-done">
                      <h5 style={{ color: "rgb(13, 164, 135)" }}>
                        Booking Complete
                      </h5>
                      <h6 style={{ color: "rgb(0, 0, 0)" }}>Success</h6>
                    </li>
                  </ol>
                </div>
              </div>
              <Link href="/">
                <button
                  style={{ backgroundColor: "#2ec2c6", color: "white" }}
                  type="button"
                  class="btn btn"
                >
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default BookingDetails;
