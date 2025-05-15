import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeSearch = () => {
  return (
    <>
      <section className="wishlist-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-3 g-2">
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <Link to="/product-info">
                      <img
                        src="./assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt="product"
                      />
                    </Link>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link to="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">1 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹08.02</span>
                      <del>₹15.15</del>
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
                    <Link to="/product-info">
                      <img
                        src="./assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt="product"
                      />
                    </Link>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link to="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">2 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹04.33</span>
                      <del>₹10.36</del>
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
                    <Link to="/product-info">
                      <img
                        src="./assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt="product"
                      />
                    </Link>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link to="/product-info">
                      <h5 className="name">Waldent ECO PLUS</h5>
                    </Link>
                    <h6 className="unit mt-1">1 PCS</h6>
                    <h5 className="price">
                      <span className="theme-color">₹12.52</span>
                      <del>₹13.62</del>
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
                    <Link to="/product-info">
                      <img
                        src="./assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt="product"
                      />
                    </Link>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link to="/product-info">
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
                    <Link to="/product-info">
                      <img
                        src="./assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt="product"
                      />
                    </Link>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link to="/product-info">
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
                    <Link to="/product-info">
                      <img
                        src="./assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt="product"
                      />
                    </Link>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link to="/product-info">
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
                    <Link to="/product-info">
                      <img
                        src="./assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt="product"
                      />
                    </Link>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link to="/product-info">
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
                    <Link to="/product-info">
                      <img
                        src="./assets/p/Waldent Contra-angle.webp"
                        className="img-fluid blur-up lazyload"
                        alt="product"
                      />
                    </Link>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Dental Hub</span>
                    <Link to="/product-info">
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

export default HomeSearch;
