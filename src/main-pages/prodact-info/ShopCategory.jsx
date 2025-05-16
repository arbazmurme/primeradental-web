import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SliderTopCategory from "@/components/slidercomponents/SliderTopCategory";
import Link from "next/link";

const ShopCategory = () => {
  return (
    <>
      <div>
        <section className="breadcrumb-section pt-0">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-contain">
                  <h2>Shop by Category</h2>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link href="/">
                          <i className="fa-solid fa-house" />
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Shop by Category
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="container-fluid-lg mt-lg-5"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <br />
          <br />
          <SliderTopCategory />
        </div>

        <section className="section-b-space shop-section">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-custom-3 wow fadeInUp">
                <div className="left-box">
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
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingOne"
                        >
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
                            {/* <div className="form-floating theme-form-floating-2 search-box">
                              <input type="search" className="form-control" id="search" placeholder="Search .." />
                              <label htmlFor="search">Search</label>
                            </div> */}
                            <ul className="category-list custom-padding custom-height">
                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="Dental Hub"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Dental Hub"
                                  >
                                    <span className="name">
                                      Kovident New Launches
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
                                    id="cake"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="cake"
                                  >
                                    <span className="name">
                                      Portable X-Ray Units
                                    </span>
                                    <span className="number">(12)</span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="behe"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="behe"
                                  >
                                    <span className="name">
                                      India's top RVG Sensors
                                    </span>
                                    <span className="number">(20)</span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="snacks"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="snacks"
                                  >
                                    <span className="name">
                                      Hottest Chair Combos
                                    </span>
                                    <span className="number">(05)</span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="beauty"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="beauty"
                                  >
                                    <span className="name">
                                      Dental Hanpieces
                                    </span>
                                    <span className="number">(30)</span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="pets"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="pets"
                                  >
                                    <span className="name">
                                      Dental Instruments
                                    </span>
                                    <span className="number">(50)</span>
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
              <div className="col-custom- wow fadeInUp">
                <div className="show-button">
                  <div className="filter-button-group mt-0"></div>
                  <div className="top-filter-menu">
                    <div className="category-dropdown">
                      <h5 className="text-content">Sort By : </h5>

                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Dropdown button"
                      >
                        <Dropdown.Item href="#/action-1">
                          Sort by popularity
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Default sorting
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Sort by price: low to high
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Sort by price: high to low
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                </div>
                <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                  <div>
                    <div className="product-box-3 h-100 wow fadeInUp">
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent Contra-angle.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Contra</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Cheesy feet cheesy grin brie. Mascarpone cheese and
                            wine hard cheese the big cheese everyone loves
                            smelly cheese macaroni cheese croque monsieur.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹08.02</span>{" "}
                            <del>₹15.15</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.05s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent ECO PLUS.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent ECO PLUS</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Feta taleggio croque monsieur swiss manchego
                            cheesecake dolcelatte jarlsberg. Hard cheese danish
                            fontina boursin melted cheese fondue.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹04.33</span>{" "}
                            <del>₹10.36</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Shof.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Spectra </h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Lancashire hard cheese parmesan. Danish fontina
                            mozzarella cream cheese smelly cheese cheese and
                            wine cheesecake dolcelatte stilton. Cream cheese
                            parmesan who moved my cheese when the cheese comes
                            out everybody's happy cream cheese red leicester
                            ricotta edam.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹12.52</span>{" "}
                            <del>₹13.62</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.15s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent DenTemp.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Spectra </h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Cheddar cheddar pecorino hard cheese hard cheese
                            cheese and biscuits bocconcini babybel. Cow goat
                            paneer cream cheese fromage cottage cheese
                            cauliflower cheese jarlsberg.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹10.25</span>{" "}
                            <del>₹12.36</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent Premium Taper.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Spectra Airotor</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Bavarian bergkase smelly cheese swiss cut the cheese
                            lancashire who moved my cheese manchego melted
                            cheese. Red leicester paneer cow when the cheese
                            comes out everybody's happy croque monsieur goat
                            melted cheese port-salut.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹14.25</span>{" "}
                            <del>₹16.57</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.25s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent Spectra Airotor.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Contra-angle</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Melted cheese babybel chalk and cheese. Port-salut
                            port-salut cream cheese when the cheese comes out
                            everybody's happy cream cheese hard cheese cream
                            cheese red leicester.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹12.68</span>{" "}
                            <del>₹14.69</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent Spectra Airotor.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Contra</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Squirty cheese cottage cheese cheese strings. Red
                            leicester paneer danish fontina queso lancashire
                            when the cheese comes out everybody's happy cottage
                            cheese paneer.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹08.02</span>{" "}
                            <del>₹15.15</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.35s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent ECO PLUS.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent ECO PLUS</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Swiss ricotta cauliflower cheese squirty cheese
                            cheesy grin camembert de normandie airedale edam.
                            Squirty cheese babybel cheesecake the big cheese
                            cauliflower cheese hard cheese cheese and biscuits
                            cheese and wine.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹04.33</span>{" "}
                            <del>₹10.36</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Shof.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Spectra </h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Boursin the big cheese cheeseburger. Jarlsberg
                            smelly cheese chalk and cheese gouda blue castello
                            monterey jack swiss boursin. Halloumi cheesy feet
                            mozzarella red leicester paneer boursin who moved my
                            cheese croque monsieur.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹12.52</span>{" "}
                            <del>₹13.62</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.45s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent DenTemp.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Spectra </h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Halloumi mozzarella monterey jack smelly cheese
                            emmental bocconcini when the cheese comes out
                            everybody's happy pecorino. Cut the cheese stilton
                            danish fontina cheesy grin rubber cheese smelly
                            cheese roquefort paneer.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹10.25</span>{" "}
                            <del>₹12.36</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent Premium Taper.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Spectra Airotor</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Manchego cow cheddar. Port-salut roquefort hard
                            cheese babybel when the cheese comes out everybody's
                            happy brie dolcelatte croque monsieur.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹14.25</span>{" "}
                            <del>₹16.57</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.55s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent Spectra Airotor.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Contra-angle</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Roquefort say cheese the big cheese ricotta chalk
                            and cheese when the cheese comes out everybody's
                            happy brie lancashire.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹12.68</span>{" "}
                            <del>₹14.69</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.6"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent Spectra Airotor.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent Contra</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Lancashire when the cheese comes out everybody's
                            happy blue castello halloumi boursin stinking bishop
                            pecorino fromage frais.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹08.02</span>{" "}
                            <del>₹15.15</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
                  <div>
                    <div
                      className="product-box-3 h-100 wow fadeInUp"
                      data-wow-delay="0.65s"
                    >
                      <div className="product-header">
                        <div className="product-image">
                          <Link href="/product-info">
                            <img
                              src="../assets/p/Waldent ECO PLUS.webp"
                              className="img-fluid blur-up lazyload"
                              alt="product"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-footer">
                        <div className="product-detail">
                          <span className="span-name">Dental Hub</span>
                          <Link href="/product-info">
                            <h5 className="name">Waldent ECO PLUS</h5>
                          </Link>
                          <p className="text-content mt-1 mb-2 product-content">
                            Say cheese cheese and biscuits feta. Queso
                            bocconcini danish fontina camembert de normandie
                            brie airedale ricotta feta. Pecorino edam gouda
                            caerphilly croque monsieur red leicester cheese
                            triangles caerphilly.
                          </p>

                          <h6 className="unit">1 PCS</h6>
                          <h5 className="price">
                            <span className="theme-color">₹04.33</span>{" "}
                            <del>₹10.36</del>
                          </h5>
                          <div className="add-to-cart-box bg-white">
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShopCategory;
