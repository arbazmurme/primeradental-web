import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2>Contact Us</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="fa-solid fa-house" />
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Contact Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-box-section">
        <div className="container-fluid-lg">
          <div className="row g-lg-5 g-3">
            <div className="col-lg-6">
              <div className="left-sidebar-box">
                <div className="row">
                  {/* <div className="col-xl-12">
                                        <div className="contact-image">
                                            <img src="../assets/images/inner-page/contact-us.png" className="img-fluid blur-up lazyloaded" alt="dummy" />
                                        </div>
                                    </div> */}
                  <div className="col-xl-12">
                    <div className="contact-title">
                      <h3>Contact Us</h3>
                    </div>
                    <div className="contact-detail">
                      <div className="row g-4">
                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-phone" />
                            </div>
                            <div className="contact-detail-title">
                              <h4>Phone</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <a
                                style={{ color: "black" }}
                                href="tel:+919108234926"
                              >
                                +91- 9108234926
                              </a>
                              <br />
                              <a
                                style={{ color: "black" }}
                                href="tel:+916363110665"
                              >
                                +91- 6363110665
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-envelope" />
                            </div>
                            <div className="contact-detail-title">
                              <h4>Email</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <a
                                style={{ color: "black" }}
                                href="mailto:info@primeradentalhub.com"
                              >
                                info@primeradentalhub.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-location-dot" />
                            </div>
                            <div className="contact-detail-title">
                              <h4> Office Address </h4>
                            </div>
                            <div className="contact-detail-contain">
                              <p style={{ color: "black" }}>
                                Sarjapur - Marathahalli Rd, Kaikondrahalli,
                                Bengaluru, Karnataka 560035
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title d-xxl-none d-block">
                <h2>Get In Touch</h2>
              </div>
              <div className="right-sidebar-box">
                <div className="row">
                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                    <div className="mb-md-4 mb-3 custom-form">
                      <label
                        htmlFor="exampleFormControlInput"
                        className="form-label"
                      >
                        Full Name
                      </label>
                      <div className="custom-input">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput"
                          placeholder="Enter Full Name"
                        />
                        <i className="fa-solid fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                    <div className="mb-md-4 mb-3 custom-form">
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="form-label"
                      >
                        Email Address
                      </label>
                      <div className="custom-input">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput2"
                          placeholder="Enter Email Address"
                        />
                        <i className="fa-solid fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                    <div className="mb-md-4 mb-3 custom-form">
                      <label
                        htmlFor="exampleFormControlInput3"
                        className="form-label"
                      >
                        Phone Number
                      </label>
                      <div className="custom-input">
                        <input
                          type="tel"
                          className="form-control"
                          id="exampleFormControlInput3"
                          placeholder="Enter Your Phone Number"
                          maxLength={10}
                          oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                      this.value.slice(0, this.maxLength);"
                        />
                        <i className="fa-solid fa-mobile-screen-button" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-md-4 mb-3 custom-form">
                      <label
                        htmlFor="exampleFormControlTextarea"
                        className="form-label"
                      >
                        Message
                      </label>
                      <div className="custom-textarea">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea"
                          placeholder="Enter Your Message"
                          rows={4}
                          defaultValue={""}
                        />
                        <i className="fa-solid fa-message" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-animation btn-md fw-bold ms-auto">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
