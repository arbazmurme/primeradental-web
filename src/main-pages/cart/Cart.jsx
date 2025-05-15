import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <section className="breadcrumb-section pt-0">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-contain breadcrumb-item active">
                  {/* <h2>Product Cart</h2> */}
                  <ol className="breadcrumb mb-0">
                    {/* <li className="breadcrumb-item active"> */}
                    <li className="breadcrumb-item active">
                      <Link href="/checkout">
                        <h2 style={{ color: "#2ec2c6" }}>Product Cart</h2>
                      </Link>
                    </li>
                  </ol>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      {/* <li className="breadcrumb-item active"> */}
                      <li className="">
                        <Link href="/service-cart">
                          <h2 style={{ color: "black" }}>Service Cart</h2>
                        </Link>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="" style={{ overflow: "hidden" }}>
          <div className="">
            <div className="row">
              <div
                className="col-xxl-6 col-lg-6"
                style={{ boxShadow: "inherit" }}
              >
                <section className="cart-section">
                  <div className="container">
                    <div className="row g-sm-5 g-3">
                      <div className="col-xxl-9">
                        <div className="cart-table">
                          <div className="table-responsive-xl">
                            <table className="table">
                              <tbody>
                                <tr className="product-box-contain">
                                  <td className="product-detail">
                                    <div className="product border-0">
                                      <a
                                        href="product-left-thumbnail.html"
                                        className="product-image"
                                      >
                                        <img
                                          src="../assets/p/Waldent Contra-angle.webp"
                                          className="img-fluid blur-up lazyload"
                                          alt
                                        />
                                      </a>
                                      <div className="product-detail">
                                        <ul>
                                          <li className="name">
                                            <a href="product-left-thumbnail.html">
                                              Waldent Straight
                                            </a>
                                          </li>

                                          <li className="text-content">
                                            <span className="text-title">
                                              Quantity
                                            </span>{" "}
                                            - 1 PCS
                                          </li>
                                          <li>
                                            <h5 className="text-content d-inline-block">
                                              <b>Price: ₹xxxxx </b>
                                            </h5>
                                            {/* <span>₹35.10</span> */}
                                          </li>
                                          <li>
                                            <h5 className="saving theme-color">
                                              Saving : ₹20.68
                                            </h5>
                                          </li>
                                          <li className="quantity-price-box">
                                            <div className="cart_qty">
                                              <div className="input-group">
                                                <button
                                                  type="button"
                                                  className="btn qty-left-minus"
                                                  data-type="minus"
                                                  data-field
                                                >
                                                  <i className="fa fa-minus ms-0" />
                                                </button>
                                                <input
                                                  className="form-control input-number qty-input"
                                                  type="text"
                                                  name="quantity"
                                                  defaultValue={0}
                                                />
                                                <button
                                                  type="button"
                                                  className="btn qty-right-plus"
                                                  data-type="plus"
                                                  data-field
                                                >
                                                  <i className="fa fa-plus ms-0" />
                                                </button>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <h5>Total: ₹35.10</h5>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </td>
                                  <div className="note-box product-package">
                                    <div className="cart_qty qty-box product-qty">
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
                                          defaultValue={1}
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
                                    <div
                                      style={{
                                        marginLeft: "60px",
                                        marginTop: "20px",
                                        color: "red",
                                        textDecoration: "underline",
                                      }}
                                      className=""
                                    >
                                      Remove
                                    </div>
                                  </div>
                                </tr>

                                <tr className="product-box-contain">
                                  <td className="product-detail">
                                    <div className="product border-0">
                                      <a
                                        href="product-left-thumbnail.html"
                                        className="product-image"
                                      >
                                        <img
                                          src="../assets/p/Waldent Contra-angle.webp"
                                          className="img-fluid blur-up lazyload"
                                          alt
                                        />
                                      </a>
                                      <div className="product-detail">
                                        <ul>
                                          <li className="name">
                                            <a href="product-left-thumbnail.html">
                                              Waldent Straight
                                            </a>
                                          </li>

                                          <li className="text-content">
                                            <span className="text-title">
                                              Quantity
                                            </span>{" "}
                                            - 1 PCS
                                          </li>
                                          <li>
                                            <h5 className="text-content d-inline-block">
                                              <b> Price: ₹xxxxx </b>
                                            </h5>
                                            {/* <span>₹35.10</span> */}
                                          </li>
                                          <li>
                                            <h5 className="saving theme-color">
                                              Saving : ₹20.68
                                            </h5>
                                          </li>
                                          <li className="quantity">
                                            <div className="quantity-price">
                                              <div className="cart_qty">
                                                <div className="input-group">
                                                  <button
                                                    type="button"
                                                    className="btn qty-left-minus"
                                                    data-type="minus"
                                                    data-field
                                                  >
                                                    <i className="fa fa-minus ms-0" />
                                                  </button>
                                                  <input
                                                    className="form-control input-number qty-input"
                                                    type="text"
                                                    name="quantity"
                                                    defaultValue={0}
                                                  />
                                                  <button
                                                    type="button"
                                                    className="btn qty-right-plus"
                                                    data-type="plus"
                                                    data-field
                                                  >
                                                    <i className="fa fa-plus ms-0" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <h5>Total: ₹67.36</h5>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </td>

                                  <div className="note-box product-package">
                                    <div className="cart_qty qty-box product-qty">
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
                                          defaultValue={1}
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
                                    <div
                                      style={{
                                        marginLeft: "60px",
                                        marginTop: "20px",
                                        color: "red",
                                        textDecoration: "underline",
                                      }}
                                      className=""
                                    >
                                      Remove
                                    </div>

                                    {/* <button onclick="location.href = 'cart.html';" className="btn btn-md bg-dark cart-button text-white w-100">Add To Cart</button> */}
                                  </div>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-xxl-6 col-lg-6">
                <section className="cart-section section-b-space">
                  <div className="container">
                    <div className="row g-sm-5 g-3">
                      <div className="col-xxl-3">
                        <div className="summery-box p-sticky">
                          <div className="summery-header">
                            <h3 style={{ fontSize: "26px" }}>Product Cart</h3>
                          </div>
                          <div className="summery-contain">
                            <ul>
                              <li>
                                <h4>Total MRP</h4>
                                <h4 className="price">₹xxxx</h4>
                              </li>
                              <li className="align-items-start">
                                <h4>Sub-Total</h4>
                                <h4 className="price text-end">₹xxxx</h4>
                              </li>
                              <li className="align-items-start">
                                <h4>Coupon/Code</h4>
                                {/* <h4 className="price text-end"> - ₹xxxx</h4> */}
                                <Link href="/coupon">
                                  <div
                                    style={{
                                      marginLeft: "445px",
                                      color: "rgb(13, 164, 135)",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    {" "}
                                    <b>Apply</b>{" "}
                                  </div>
                                </Link>
                              </li>
                              <li className="align-items-start">
                                <h4>Wallet Used</h4>
                                <h4 className="price text-end">₹xxxx</h4>
                              </li>
                              <li className="align-items-start">
                                <h4>Delivery Fee</h4>
                                <h4 className="price text-end">₹xxxx</h4>
                              </li>
                            </ul>
                          </div>
                          <ul className="summery-total">
                            <li className="list-total border-top-0">
                              <h4>Total :- </h4>
                              <h4 className="price theme-color">₹xxxx</h4>
                            </li>
                          </ul>
                          <div className="button-group cart-button">
                            <ul>
                              <Link href="/check-out">
                                <li>
                                  <button
                                    onclick="location.to = 'checkout.html';"
                                    className="btn btn-animation proceed-btn fw-bold"
                                  >
                                    Checkout
                                  </button>
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
