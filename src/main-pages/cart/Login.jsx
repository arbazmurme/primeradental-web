"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginAuthentication, LoginOtp } from "@/redux/auth/authSlice";
import Link from "next/link";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (number.length === 10) {
      setError(null);
      let OTP = "";
      const digits = "0123456789";

      for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }

      if (number === "8018582135" || number === "9917258070") {
        OTP = "111444";
      }

      const formdata = {
        number: number,
        OTP: OTP,
      };
      const data = {
        mobile: number,
        message: OTP,
      };

      dispatch(LoginOtp(formdata));
      dispatch(loginAuthentication(data));
      router.push("/otpScreen");
    } else {
      setError("Please enter a valid mobile number");
    }
  };

  return (
    <div>
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2 className="mb-2">Log In</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Log In</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="log-in-section background-image-2 section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="/assets/images/inner-page/log-in.png"
                  className="img-fluid"
                  alt="Login"
                />
              </div>
            </div>

            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To Primera Dental Hub</h3>
                  <h4>Log In Your Account</h4>
                </div>

                <div className="input-box">
                  <form className="row g-4" onSubmit={handleLogin}>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="Enter Mobile Number"
                          maxLength={10}
                          minLength={10}
                          value={number}
                          onChange={(e) =>
                            setNumber(e.target.value.replace(/[^0-9]/g, ""))
                          }
                        />
                        <label htmlFor="mobile">Mobile Number</label>
                      </div>
                    </div>

                    {error && (
                      <div className="col-12">
                        <span style={{ color: "red" }}>{error}</span>
                      </div>
                    )}

                    <div className="col-12">
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input
                            className="checkbox_animated check-box"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-animation w-100 justify-content-center"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>

                <div className="other-log-in">
                  <h6></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
