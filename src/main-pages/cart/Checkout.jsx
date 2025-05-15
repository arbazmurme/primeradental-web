import Link from 'next/link'
import React from 'react'


const Checkout = () => {
    return (
        <>
            <div>
                <section className="breadcrumb-section pt-0">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-contain">
                                    <h2>Checkout</h2>
                                    <nav>
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item">
                                                <a href="/">
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
                                                        <img src="../assets/p/home.png" className="img-fluid blur-up lazyload" alt="dummy" />
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
                                                                            <input className="form-check-input" type="radio" name="jack" id="flexRadioDefault2" defaultChecked="checked" />
                                                                        </div>
                                                                        <div className="label">
                                                                            <label>Office</label>
                                                                        </div>
                                                                        <ul className="delivery-address-detail">
                                                                            <li>
                                                                                <h4 className="fw-500">Jack Jennas</h4>
                                                                            </li>
                                                                            <li>
                                                                                <p className="text-content"><span className="text-title">Address
                                                                                    :</span> XXXXXXXXX
                                                                                </p>
                                                                            </li>
                                                                            <li>
                                                                                <h6 className="text-content"><span className="text-title">Pin Code :</span>
                                                                                    XXXXXXXXX</h6>
                                                                            </li>
                                                                            <li>
                                                                                <h6 className="text-content mb-0"><span className="text-title">Phone
                                                                                    :</span> + XXXXXXXXX</h6>
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
                                                        <img src="../assets/p/Payment Option.png" className="img-fluid blur-up lazyload" alt="dummy" />
                                                    </Link>
                                                </div>
                                                <div className="checkout-box">
                                                    <div className="checkout-title">
                                                        <h4>Payment Option</h4>
                                                    </div>
                                                    <div className="checkout-detail">
                                                        <div className="accordion accordion-flush custom-accordion" id="accordionFlushExample">
                                                            <div className="accordion-item">
                                                                <div className="accordion-header" id="flush-headingFour">
                                                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false">
                                                                        <div className="custom-form-check form-check mb-0">
                                                                            <label className="form-check-label" htmlFor="cash"><input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="cash" defaultChecked /> Cash
                                                                                On Delivery</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <div className="accordion-header" id="flush-headingTwo">
                                                                    <div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="true">
                                                                        <div className="custom-form-check form-check mb-0">
                                                                            <label className="form-check-label" htmlFor="banking"><input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="banking" />UPI </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="flush-collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample" style={{}}>
                                                                    <div className="accordion-body">

                                                                        <div className="row g-2">
                                                                            <div className="col-12">
                                                                                <div className="select-option">
                                                                                    <div className="form-floating theme-form-floating">
                                                                                        <select className="form-select theme-form-select">
                                                                                            <option value="hsbc">GPay
                                                                                            </option>
                                                                                            <option value="loyds">PhonePe </option>
                                                                                            <option value="natwest">Pay Via UPI ID
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
                                                                <div className="accordion-header" id="flush-headingTwo">
                                                                    <div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="true">
                                                                        <div className="custom-form-check form-check mb-0">
                                                                            <label className="form-check-label" htmlFor="banking"><input className="form-check-input mt-0" type="radio" name="flexRadioDefault" id="banking" />Credit/Debit/Atm Card  </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="flush-collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample" style={{}}>
                                                                    <div className="accordion-body">

                                                                        <div className="row g-2">
                                                                            <div className="col-12">
                                                                                <div className="select-option">
                                                                                    <div className="form-floating theme-form-floating">
                                                                                        <select className="form-select theme-form-select">
                                                                                            <option value="hsbc">Add New Card
                                                                                            </option>
                                                                                            <option value="loyds">Cards - HDFC Bank </option>
                                                                                            <option value="natwest">Cards - ICICI Bank
                                                                                            </option>
                                                                                        </select>
                                                                                        <label>Credit/Debit/Atm Card  </label>
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
                                                <img src="../assets/p/Waldent Contra-angle.png" className="img-fluid blur-up lazyloaded checkout-image" alt="dummy" />
                                                <h4>Waldent Contra <span>X 1</span></h4>
                                                <h4 className="price">₹xxxx</h4>
                                            </li>
                                            <li>
                                                <img src="../assets/p/Waldent Contra-angle.png" className="img-fluid blur-up lazyloaded checkout-image" alt="dummy" />
                                                <h4>Waldent Contra <span>X 2</span></h4>
                                                <h4 className="price">₹xxxx</h4>
                                            </li>
                                        </ul>
                                        <ul className="summery-total">
                                            <li>
                                                <h4>Total MRP</h4>
                                                <h4 className="price">₹xxxx</h4>
                                            </li>
                                            <li>
                                                <h4>Sub-Total</h4>
                                                <h4 className="price">₹xxxx</h4>
                                            </li>
                                            <li>
                                                <h4>Coupon/Code</h4>
                                                {/* <h4 className="price"> - ₹xxxx</h4> */}
                                                <Link href="/coupon" >
                                                    <div style={{ marginLeft: "169px", color: "rgb(13, 164, 135)", textDecoration: "underline" }} > <b>Apply</b> </div>
                                                </Link>
                                            </li>
                                            <li className="list-total">
                                                <h4>Wallet Used</h4>
                                                <h4 className="price"> - ₹xxxx</h4>
                                            </li>
                                            <li className="list-total">
                                                <h4>Delivery Fee</h4>
                                                <h4 className="price">₹xxxx</h4>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="checkout-offer">
                                        <div className="offer-title">
                                            <div className="offer-icon">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/offer.svg" className="img-fluid" alt="dummy" />
                                            </div>
                                            <div className="offer-name">
                                                <h6>Available Offers</h6>
                                            </div>
                                        </div>
                                        <ul className="offer-detail">
                                            <li>
                                                <p>Combo: BB Royal Almond/Badam Californian, Extra Bold 100 gm...</p>
                                            </li>
                                            <li>
                                                <p>combo: Royal Cashew Californian, Extra Bold 100 gm + BB Royal Honey 500 gm</p>
                                            </li>
                                        </ul>
                                    </div> */}
                                    <Link href="/successfully">
                                        <button className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold">Place Order</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Checkout