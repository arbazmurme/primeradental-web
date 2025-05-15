import "./OtpPage.css";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import {
//   authActions,
//   getClientByMob,
//   loginAuthentication,
//   pageStatusChange,
// } from "../../redux/auth/authSlice";
// import { getOrderbyClId } from "../../redux/order/OrderSlice";
import animationData from "../animated/Animation222.json";
import Lottie from "lottie-react";

export const OtpMobile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { mob, otp } = useSelector((state) => state.Athentication);
  const mob = "456789876"
  const otp = "787667"
  const [counter, setCounter] = useState(30);
  const [otpValues, setOtpValues] = useState(new Array(6).fill("")); // Array to hold OTP digits
  const [logerror, setLogerror] = useState("");
  const [logerrorcolor, setLogerrorcolor] = useState("red");

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    document.getElementById("otp-input-0").focus(); // Focus on the first input
  }, []);

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Ensure only numbers are entered and the length is 1
    if (/^[0-9]$/.test(value)) {
      let newOtp = [...otpValues];
      newOtp[index] = value; // Update the OTP array
      setOtpValues(newOtp);

      // Focus the next input if available
      if (index < otpValues.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Handle backspace key to move to previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      let newOtp = [...otpValues];

      if (otpValues[index] !== "") {
        // If the current field has a value, clear it
        newOtp[index] = "";
        setOtpValues(newOtp);
      } else if (index > 0) {
        // If the current field is empty, move focus to the previous field
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  // const verifyClick = async () => {
  //   let otpvalue = otpValues.join(""); // Combine OTP values into a single string

  //   if (otpvalue.length === 6) {
  //     setLogerrorcolor("green");
  //     setLogerror("OTP verifying");
  //     if (otpvalue === otp) {
  //       const formData = {
  //         Mobile: mob,
  //       };
  //       const ClientDetails = await dispatch(getClientByMob(formData));
  //       if (ClientDetails.payload.success === false) {
  //         navigate("/registation");
  //       } else {
  //         dispatch(
  //           authActions.signin({
  //             ...ClientDetails.payload.client,
  //             isAuth: true,
  //           })
  //         );
  //         const client = ClientDetails.payload.client;
  //         dispatch(getOrderbyClId(client._id));
  //         navigate("/");
  //         dispatch(pageStatusChange(0));
  //       }
  //     } else {
  //       setLogerrorcolor("red");
  //       setLogerror("Please enter correct OTP");
  //     }
  //   }
  // };

  const resendclick = () => {
    const formdata = {
      number: mob,
      OTP: otp,
    };
    // dispatch(loginAuthentication(formdata));
    setCounter(30);
  };

  return (
    <div className="MainofOtpPage">
      <div className="subContainerofOtpPage">
        <div className="part1ofOtp">
          <Lottie animationData={animationData} loop={true} className="Giffff" />
        </div>
        <div className="part2ofOtp">
          <span>ENTER OTP</span>
        </div>
        <div className="part3ofOtp">
          <div className="Numbs">
            {otpValues.map((otp, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="tel"
                maxLength="1"
                inputMode="numeric"
                pattern="[0-9]*"
                value={otp}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                style={{ width: "40px", height: "40px", textAlign: "center", margin: "5px" }}
              />
            ))}
          </div>
          <div className="send-box pt-4">
            <h5 style={{ color: logerrorcolor }}>{logerror}</h5>
          </div>
          <span>
            Didn't receive the OTP ?
            {counter ? (
              <a className="theme-color fw-bold"> 00 : {counter}</a>
            ) : (
              <a className="theme-color fw-bold" > Resend It</a>
            )}
          </span>
          <div className="btnContainerrr">
            <button type="submit">
              Validate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
