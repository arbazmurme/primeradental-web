
import Link from 'next/link'
import React from 'react'


const Downloads = () => {
    return (
        <>
            <section className="user-dashboard-section section-b-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 col-lg-4">
                            <div className="dashboard-left-sidebar">
                                <div className="close-button d-flex d-lg-none">
                                    <button className="close-sidebar">
                                        <i className="fa-solid fa-xmark" />
                                    </button>
                                </div>
                                <div className="profile-box">
                                    <div className="cover-image">
                                        <img src="../assets/images/inner-page/cover-img.jpg" className="img-fluid blur-up lazyload" alt="dummy" />
                                    </div>
                                    <div className="profile-contain">
                                        <div className="profile-image">
                                            <div className="position-relative">
                                                <img src="../assets/p/profile.png" className="blur-up lazyload update_img" alt="dummy" />
                                                <div className="cover-icon">
                                                    <i className="fa-solid fa-pen">
                                                        <input type="file" onchange="readURL(this,0)" />
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-name">
                                            <h3>XXXXXXXXX</h3>
                                            <h6 className="text-content">xxxxxxx@gmail.com</h6>
                                        </div>
                                    </div>
                                </div>
                               <ul className="nav nav-pills user-nav-pills" id="pills-tab" role="tablist">
                                                                  <li className="nav-item" role="presentation">
                                                                      <Link href="/dashboard">
                                                                          <button className="nav-link active" id="pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#pills-dashboard" type="button"><i data-feather="home" />
                                                                              Dashboard</button>
                                                                      </Link>
                                                                  </li>
                              
                                                                  <Link href="/Order">
                                                                      <li className="nav-item" role="presentation">
                                                                          <button className="nav-link" id="pills-order-tab" data-bs-toggle="pill" data-bs-target="#pills-order" type="button"><i data-feather="shopping-bag" />Order</button>
                                                                      </li>
                                                                  </Link>
                              
                              
                                                                  <li className="nav-item" role="presentation">
                                                                      <Link href="/downloads">
                                                                          <button className="nav-link" id="pills-wishlist-tab" data-bs-toggle="pill" data-bs-target="#pills-wishlist" type="button"><i data-feather="heart" />
                                                                              Downloads</button>
                                                                      </Link>
                                                                  </li>
                              
                                                                  <li className="nav-item" role="presentation">
                                                                      <Link href="/address">
                                                                          <button className="nav-link" id="pills-card-tab" data-bs-toggle="pill" data-bs-target="#pills-card" type="button" role="tab"><i data-feather="credit-card" /> Addresses</button>
                                                                      </Link>
                                                                  </li>
                                                                  <li className="nav-item" role="presentation">
                                                                      <Link href="/wallet">
                                                                          <button className="nav-link" id="pills-card-tab" data-bs-toggle="pill" data-bs-target="#pills-card" type="button" role="tab"><i data-feather="credit-card" /> Wallet</button>
                                                                      </Link>
                                                                  </li>
                              
                                                                  <li className="nav-item" role="presentation">
                                                                      <Link href="/">
                                                                          <button className="nav-link" id="pills-address-tab" data-bs-toggle="pill" data-bs-target="#pills-address" type="button" role="tab"><i data-feather="map-pin" />Logout</button>
                                                                      </Link>
                                                                  </li>
                                                                  {/* <li className="nav-item" role="presentation">
                                                                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"><i data-feather="user" />
                                                                          Account details</button>
                                                                  </li>
                                                                  <li className="nav-item" role="presentation">
                                                                      <button className="nav-link" id="pills-download-tab" data-bs-toggle="pill" data-bs-target="#pills-download" type="button" role="tab"><i data-feather="download" />My Coupons</button>
                                                                  </li>
                                                                  <li className="nav-item" role="presentation">
                                                                      <button className="nav-link" id="pills-security-tab" data-bs-toggle="pill" data-bs-target="#pills-security" type="button" role="tab"><i data-feather="shield" />
                                                                          Logout</button>
                                                                  </li> */}
                                                              </ul>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-lg-8">
                            <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">Show
                                Menu</button>
                            <div className="dashboard-right-sidebar">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-dashboard" role="tabpanel">
                                        <div className="dashboard-home">
                                            {/* <div className="title">
                                                    <h2>My Dashboard</h2>
                                                    <span className="title-leaf">
                                                        <svg className="icon-width bg-gray">
                                                            <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf">
                                                            </use>
                                                        </svg>
                                                    </span>
                                                </div> */}
                                            <div className="dashboard-user-name">
                                                <h6 className="text-content">No downloads available yet .
                                                    <b className="text-title"> <Link href="/">Browse products</Link></b></h6>
                                                {/* <p className="text-content">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p> */}
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
    )
}

export default Downloads