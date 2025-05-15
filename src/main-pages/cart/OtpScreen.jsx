'use client';
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mobileExist } from "../../redux/auth/authSlice";
import { useRouter } from 'next/navigation';

const OtpScreen = () => {
  const [otp1, setOtp] = useState(["", "", "", "", "", ""]);
  const router = useRouter();
  const [error, setError] = useState(null);
  const { mob, otp } = useSelector((state) => state.auth);
  console.log(otp, "otp");
  const dispatch = useDispatch();
  const inputs = useRef([]);
  const handleOtpChange = (text, index) => {
    console.log(index, "1");
    console.log(text, "2");
    const newOtp = [...otp1];
    newOtp[index] = text;
    setOtp(newOtp);
    setError(null);

    if (text !== "" && index < 5) {
      inputs.current[index + 1].focus();
    }

    if (text === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyClick = async () => {
    const otpString = otp1.join("");
    console.log(otpString, "1");
    console.log(otp, "2");
    if (otpString.length < 6) {
      setError("Please enter a valid OTP");
    } else if (otpString === otp) {
      setError(null);
      const response = await dispatch(mobileExist({ number: mob }));
      if (response.payload.success) {
        router.push("/");
      } else {
        router.push("/registation");
      }
    } else {
      setError("OTP does not match. Please try again.");
    }
  };

  return (
    <>
      <section className="log-in-section otp-section section-b-space for_otp_for-only_desk">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="../assets/images/inner-page/otp.png"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3 className="text-title">
                      Please enter the one time password to verify your account
                    </h3>
                    <h5 className="text-content">
                      A code has been sent to <span>{mob}</span>
                      <span
                        className="mx-3"
                        style={{ color: "#0e947a", cursor: "pointer" }}
                        // onClick={() => dispatch(pageStatusChange(0))}
                      >
                        change number
                      </span>
                    </h5>
                  </div>
                  <div
                    id="otp"
                    className="inputs d-flex flex-row justify-content-center"
                  >
                    {otp1.map((digit, index) => (
                      <input
                        className="text-center form-control rounded"
                        value={digit}
                        onChange={(e) =>
                          handleOtpChange(e.nativeEvent.data, index)
                        }
                        type="tel"
                        ref={(ref) => (inputs.current[index] = ref)}
                        id="first"
                        maxLength={1}
                        placeholder="0"
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                    ))}
                  </div>
                  {/* <div className="send-box pt-4">
                    <h5 style={{ color: logerrorcolor }}>{logerror}</h5>
                  </div> */}
                  {/* <div className="send-box pt-4">
                    <h5>
                      Didn't get the code?
                      <a
                        className="theme-color fw-bold"
                        onClick={() => resendclick()}
                      >
                        Resend It
                      </a>
                    </h5>
                  </div> */}
                  <button
                    className="btn btn-animation w-100 mt-3"
                    onClick={verifyClick}
                    id="btnsubmit"
                    type="submit"
                  >
                    Validate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="otp_for_mobile"> */}
      {/* <OtpMobile /> */}
      {/* </section> */}
    </>
  );
};

export default OtpScreen;
