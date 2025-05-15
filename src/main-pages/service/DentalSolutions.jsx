import SliderDentalSolutions from "@/components/sliderservice/SliderDentalSolutions";
import Link from "next/link";
import React from "react";

const DentalSolutions = () => {
  return (
    <>
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2>Dental IT Solutions </h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Dental IT Solutions{" "}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="title d-block" style={{ marginTop: "0px" }}>
                <h2>Browse By SubCategories</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
                {/* <p>A virtual assistant collects the products from your list</p> */}
              </div>
              <div className="slider-9 mt-lg-4">
                <SliderDentalSolutions />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-custom-3">
              <div className="left-box wow fadeInUp">
                <div className="shop-left-sidebar">
                  <div className="back-button">
                    <h3>
                      <i className="fa-solid fa-arrow-left" /> Back
                    </h3>
                  </div>

                  <div
                    className="accordion custom-accordion"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                        >
                          <span>Categories</span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                      >
                        <div className="accordion-body">
                          <div className="form-floating theme-form-floating-2 search-box">
                            <input
                              type="search"
                              className="form-control"
                              id="search"
                              placeholder="Search .."
                            />
                            <label htmlFor="search">Search</label>
                          </div>
                          <ul className="category-list custom-padding custom-height">
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Endodontics</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Chairs</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Instruments</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Consumables</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Disposables</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">
                                    General Dentistry
                                  </span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Orthodontics</span>
                                  <span className="number">(15)</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-list-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Steralization</span>
                                  <span className="number">(15)</span>
                                </label>
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
            <div className="col-custom-">
              <div className="show-button">
                <div className="filter-button-group mt-0">
                  <div className="filter-button d-inline-block d-lg-none">
                    <a>
                      <i className="fa-solid fa-filter" /> Repair Service
                    </a>
                  </div>
                </div>
              </div>
              <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section list-style">
                <div>
                  <div className="product-box-3 h-100 wow fadeInUp">
                    <div className="product-header">
                      <div className="product-image">
                        <Link href="/checkout">
                          <img
                            src="../assets/p/images.png"
                            className="img-fluid blur-up lazyload"
                            alt
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Vegetable</span>
                        <Link href="/checkout">
                          <h5 className="name">1 Sec light cure unit + </h5>
                        </Link>
                        <p className="text-content mt-1 mb-2 product-content">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Consequatur autem pariatur, dignissimos ab nemo
                          perspiciatis? Modi ad consequuntur.
                        </p>
                        <h6 className="unit">2 PCS</h6>
                        <h5 className="price">
                          <span className="theme-color">₹xxxx</span>{" "}
                          <del>₹xxxx</del>
                        </h5>
                        <div className="add-to-cart-box bg-white">
                          <Link href="/checkout">
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
                <div>
                  <div className="product-box-3 h-100 wow fadeInUp">
                    <div className="product-header">
                      <div className="product-image">
                        <Link href="/checkout">
                          <img
                            src="../assets/p/Waldent Contra-angle.png"
                            className="img-fluid blur-up lazyload"
                            alt
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Vegetable</span>
                        <Link href="/checkout">
                          <h5 className="name">Waldent Contra</h5>
                        </Link>
                        <p className="text-content mt-1 mb-2 product-content">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Consequatur autem pariatur, dignissimos ab nemo
                          perspiciatis? Modi ad consequuntur.
                        </p>
                        <h6 className="unit">2 PCS</h6>
                        <h5 className="price">
                          <span className="theme-color">₹xxxx</span>{" "}
                          <del>₹xxxx</del>
                        </h5>
                        <div className="add-to-cart-box bg-white">
                          <Link href="/checkout">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DentalSolutions;
