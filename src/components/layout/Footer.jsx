import React from 'react';

import WhatsappIcon from './WhatsappIcon';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className='bg-effect'>
        <footer className="section-t-space">
          <div className="container-fluid-lg">
            <div className="main-footer section-b-space section-t-space">
              <div className="row g-md-4 g-3">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="footer-logo">
                    <div className="theme-logo">
                      <Link href="/">
                        <img src="/assets/primeradentalhub.png" className="blur-up lazyload" alt="Logo" />
                      </Link>
                    </div>
                    <div className="footer-logo-contain">
                      <p>Got a Question? Call us between 9am-7pm</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer-title">
                    <h4>Popular Categories</h4>
                  </div>
                  <div className="footer-contain">
                    <ul>
                      <li>
                        <Link href="/shop-left-sidebar" className="text-content">Chair Combos</Link>
                      </li>
                      <li>
                        <Link href="/shop-left-sidebar" className="text-content">RVG Sensors</Link>
                      </li>
                      <li>
                        <Link href="/shop-left-sidebar" className="text-content">Portable X-Rays</Link>
                      </li>
                      <li>
                        <Link href="/shop-left-sidebar" className="text-content">Soft Tissue Lasers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl col-lg-2 col-sm-3">
                  <div className="footer-title">
                    <h4>Useful Links</h4>
                  </div>
                  <div className="footer-contain">
                    <ul>
                      <li>
                        <Link href="/contact-us" className="text-content">Enquiry</Link>
                      </li>
                      <li>
                        <Link href="/shop-left-sidebar" className="text-content">Delivery</Link>
                      </li>
                      <li>
                        <Link href="/about-us" className="text-content">About Us</Link>
                      </li>
                      <li>
                        <Link href="/contact-us" className="text-content">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-3">
                  <div className="footer-title">
                    <h4>Help Center</h4>
                  </div>
                  <div className="footer-contain">
                    <ul>
                      <li>
                        <Link href="/order-success" className="text-content">Your Order</Link>
                      </li>
                      <li>
                        <Link href="/user-dashboard" className="text-content">Your Account</Link>
                      </li>
                      <li>
                        <Link href="/order-tracking" className="text-content">Track Order</Link>
                      </li>
                      <li>
                        <Link href="/wishlist" className="text-content">Your Wishlist</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="footer-title">
                    <h4>Contact Us</h4>
                  </div>
                  <div className="footer-contact">
                    <ul>
                      <li>
                        <div className="footer-number">
                          <i data-feather="phone" />
                          <div className="contact-number">
                            <h6 className="text-content">Hotline 24/7 :</h6>
                            <h5>+91-9108234926 <br /> +91-6363110665</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="footer-number">
                          <i data-feather="mail" />
                          <div className="contact-number">
                            <h6 className="text-content">Email Address :</h6>
                            <a href="mailto:info@primeradentalhub.com"><h5>info@primeradentalhub.com</h5></a>
                          </div>
                        </div>
                      </li>
                      <li className="social-app mb-0">
                        <h5 className="mb-2 text-content">Download App :</h5>
                        <ul>
                          <li className="mb-0">
                            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                              <img src="https://themes.pixelstrap.com/fastkart/assets/images/playstore.svg" className="blur-up lazyload" alt="Play Store" />
                            </a>
                          </li>
                          <li className="mb-0">
                            <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
                              <img src="https://themes.pixelstrap.com/fastkart/assets/images/appstore.svg" className="blur-up lazyload" alt="App Store" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-footer section-small-space">
              <div className="reserve">
                <h6 className="text-content">© 2025 Powered By Dexterous Technology</h6>
              </div>
              <div className="payment">
                <img src="/assets/images/payment/1.png" className="blur-up lazyload" alt="Payment Methods" />
              </div>
              <div className="social-link">
                <h6 className="text-content">Stay connected :</h6>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        
        <div className="modal fade theme-modal view-modal" id="view" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header p-0">
                <button type="button" className="btn-close" data-bs-dismiss="modal">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="modal-body">
                <div className="row g-sm-4 g-2">
                  <div className="col-lg-6">
                    <div className="slider-image">
                      <img src="/assets/images/product/category/1.jpg" className="img-fluid blur-up lazyload" alt="Product" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-sidebar-modal">
                      <h4 className="title-name">Peanut Butter Bite Premium Butter Cookies 600 g</h4>
                      <h4 className="price">$36.99</h4>
                      <div className="product-rating">
                        <ul className="rating">
                          <li><i data-feather="star" className="fill" /></li>
                          <li><i data-feather="star" className="fill" /></li>
                          <li><i data-feather="star" className="fill" /></li>
                          <li><i data-feather="star" className="fill" /></li>
                          <li><i data-feather="star" /></li>
                        </ul>
                        <span className="ms-2">8 Reviews</span>
                        <span className="ms-2 text-danger">6 sold in last 16 hours</span>
                      </div>
                      <div className="product-detail">
                        <h4>Product Details :</h4>
                        <p>Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love. Caramels marshmallow icing dessert candy canes I love soufflé I love toffee. Marshmallow pie sweet sweet roll sesame snaps tiramisu jelly bear claw. Bonbon muffin I love carrot cake sugar plum dessert bonbon.</p>
                      </div>
                      <ul className="brand-list">
                        <li>
                          <div className="brand-box">
                            <h5>Brand Name:</h5>
                            <h6>Black Forest</h6>
                          </div>
                        </li>
                        <li>
                          <div className="brand-box">
                            <h5>Product Code:</h5>
                            <h6>W0690034</h6>
                          </div>
                        </li>
                        <li>
                          <div className="brand-box">
                            <h5>Product Type:</h5>
                            <h6>White Cream Cake</h6>
                          </div>
                        </li>
                      </ul>
                      <div className="select-size">
                        <h4>Cake Size :</h4>
                        <select className="form-select select-form-size">
                          <option defaultValue>Select Size</option>
                          <option value="1.2">1/2 KG</option>
                          <option value={0}>1 KG</option>
                          <option value="1.5">1/5 KG</option>
                          <option value="red">Red Roses</option>
                          <option value="pink">With Pink Roses</option>
                        </select>
                      </div>
                      <div className="modal-button">
                        <button onClick={() => window.location.href = 'cart.html'} className="btn btn-md add-cart-button icon">Add To Cart</button>
                        <button onClick={() => window.location.href = 'product-left.html'} className="btn theme-bg-color view-button icon text-white fw-bold btn-md">View More Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal location-modal fade theme-modal" id="locationModal" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Choose your Delivery Location</h5>
                <p className="mt-1 text-content">Enter your address and we will specify the offer for your area.</p>
                <button type="button" className="btn-close" data-bs-dismiss="modal">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="modal-body">
                <div className="location-list">
                  <div className="search-input">
                    <input type="search" className="form-control" placeholder="Search Your Area" />
                    <i className="fa-solid fa-magnifying-glass" />
                  </div>
                  <div className="disabled-box">
                    <h6>Select a Location</h6>
                  </div>
                  <ul className="location-select custom-height">
                    <li>
                      <a href="javascript:void(0)">
                        <h6>Alabama</h6>
                        <span>Min: $130</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h6>Arizona</h6>
                        <span>Min: $150</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h6>California</h6>
                        <span>Min: $110</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h6>Colorado</h6>
                        <span>Min: $140</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h6>Florida</h6>
                        <span>Min: $160</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h6>Georgia</h6>
                        <span>Min: $120</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h6>Kansas</h6>
                        <span>Min: $170</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h6>Minnesota</h6>
                        <span>Min: $120</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h6>New York</h6>
                        <span>Min: $110</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h6>Washington</h6>
                        <span>Min: $130</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade theme-modal deal-modal" id="deal-box" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <h5 className="modal-title w-100" id="deal_today">Deal Today</h5>
                  <p className="mt-1 text-content">Recommended deals for you.</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="modal-body">
                <div className="deal-offer-box">
                  <ul className="deal-offer-list">
                    <li className="list-1">
                      <div className="deal-offer-contain">
                        <Link href="/shop-left-sidebar" className="deal-image">
                          <img src="/assets/images/vegetable/product/10.png" className="blur-up lazyload" alt="Deal" />
                        </Link>
                        <Link href="/shop-left-sidebar" className="deal-contain">
                          <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                          <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                        </Link>
                      </div>
                    </li>
                    <li className="list-2">
                      <div className="deal-offer-contain">
                        <Link href="/shop-left-sidebar" className="deal-image">
                          <img src="/assets/images/vegetable/product/11.png" className="blur-up lazyload" alt="Deal" />
                        </Link>
                        <Link href="/shop-left-sidebar" className="deal-contain">
                          <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                          <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                        </Link>
                      </div>
                    </li>
                    <li className="list-3">
                      <div className="deal-offer-contain">
                        <Link href="/shop-left-sidebar" className="deal-image">
                          <img src="/assets/images/vegetable/product/12.png" className="blur-up lazyload" alt="Deal" />
                        </Link>
                        <Link href="/shop-left-sidebar" className="deal-contain">
                          <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                          <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                        </Link>
                      </div>
                    </li>
                    <li className="list-1">
                      <div className="deal-offer-contain">
                        <Link href="/shop-left-sidebar" className="deal-image">
                          <img src="/assets/images/vegetable/product/13.png" className="blur-up lazyload" alt="Deal" />
                        </Link>
                        <Link href="/shop-left-sidebar" className="deal-contain">
                          <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                          <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="theme-option">
          <div className="back-to-top" style={{ background: "#0da487" }}>
            <a id="back-to-top" href="#">
              <i className="fas fa-chevron-up" />
            </a>
          </div>
        </div>
      </div>
      <WhatsappIcon />
    </>
  );
}

export default Footer;
