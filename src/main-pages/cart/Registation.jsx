"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegistation, verifyUserEmail } from "../../redux/auth/authSlice";
import { useRouter } from "next/navigation";

const Registation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", general: "" });
  const mobileNumber = useSelector((state) => state.auth.mob);

  const dispatch = useDispatch();
  const router = useRouter();

  const validateEmail = (email) => {
    let error = "";
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!reg.test(email)) {
      error = "Email is invalid";
    }
    setErrors((prev) => ({ ...prev, email: error }));
    return error;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!name.trim()) {
      setErrors((prev) => ({ ...prev, name: "Full name is required" }));
      return;
    }
    const emailError = validateEmail(email.toLowerCase());
    if (emailError) return;
     router.push("/");
    // try {
    //   const resp = await dispatch(verifyUserEmail(email.toLowerCase()));
    //   if (resp.payload.success === true) {
    //     setErrors((prev) => ({ ...prev, email: "Email already exists" }));
    //   } else {
    //     const response = await dispatch(
    //       userRegistation({
    //         name,
    //         Email: email.toLowerCase(),
    //         Mobile: mobileNumber,
    //       })
    //     );
    //     if (response.payload) {
    //       router.push("/");
    //     } else {
    //       setErrors((prev) => ({ ...prev, general: "Please try again" }));
    //     }
    //   }
    // } catch (err) {
    //   setErrors((prev) => ({ ...prev, general: err.message || "Something went wrong" }));
    // }
  };

  return (
    <section className="log-in-section section-b-space register_for_mobile_only">
      <div className="container-fluid-lg w-100">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div className="image-contain">
              <img
                src="../assets/images/inner-page/sign-up.png"
                className="img-fluid"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div className="log-in-box">
              <div className="log-in-title">
                <h3>Welcome To Slice&Dice </h3>
                <h4>Create New Account</h4>
              </div>
              <div className="input-box">
                <form className="row g-4" onSubmit={handleRegister}>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        style={{ textTransform: "capitalize" }}
                      />
                      <label htmlFor="fullname">Full Name</label>
                    </div>
                    {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
                  </div>

                  <div className="col-12 mt-3">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          validateEmail(e.target.value);
                        }}
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className="form-control"
                        value={mobileNumber}
                        id="Mobile"
                        readOnly
                      />
                      <label htmlFor="Mobile">Mobile Number</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-animation w-100" type="submit">
                      Submit
                    </button>
                    {errors.general && (
                      <span style={{ color: "red" }}>{errors.general}</span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6" />
        </div>
      </div>
    </section>
  );
};

export default Registation;
