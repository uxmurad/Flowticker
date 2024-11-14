import { useState } from "react";
import PageTitle from "../components/PageTitle";
import OtpPopup from "../components/login/OtpPopup";
import Profile from "../components/login/Profile";

import img from "../assets/img/login/left-img.png";
import logo from "../assets/img/logo.png";
import google from "../assets/img/social/google.png";
import PhoneInput from "../components/login/PhoneInput";

export default function Index() {
  const [otpShow, setOtpShow] = useState(false);
  const showOtp = () => {
    setOtpShow(!otpShow);
  };
  const [profileShow, setProfileShow] = useState(false);
  const showProfile = () => {
    setProfileShow(!profileShow);
    setOtpShow(false);
  };
  const toggleModal = () => {
    setProfileShow(false);
    setOtpShow(true);
  };

  return (
    <>
      <PageTitle title="Login" />
      <div className="login d-flex flex-wrap align-items-center w-100 vh-100">
        <div className="login-right d-flex align-items-center mx-auto">
          <div className="login-wrap mx-auto w-100">
            <div className="logo text-center">
              <img src={logo} className="mx-auto" alt="" />
            </div>
            <div className="login-wrap-content">
              <div className="mb-3 pb-md-1">
                <h2 className="fw-semibold mb-1">Welcome Back</h2>
                <p className="fs-14">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia.
                </p>
              </div>
              <div className="mb-3 pb-md-1">
                <PhoneInput />
              </div>
              <div>
                <button
                  onClick={() => showOtp()}
                  className="btn bg-primary text-heading w-100 fs-6"
                >
                  Get Otp
                </button>
              </div>
              <div className="login-or mt-3 pt-1 pt-md-2">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-3 pb-1 pb-md-2">
                  <span className="d-block login-or-line"></span>
                  <span className="text-uppercase">or</span>
                  <span className="d-block login-or-line"></span>
                </div>
                <button className="btn fs-6 gap-2 bg-transparent d-flex w-100 align-items-center justify-content-center">
                  <img src={google} alt="" />
                  Continue with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OtpModal */}
      {otpShow && (
        <OtpPopup
          clickProfile={() => showProfile()}
          onClick={() => showOtp()}
          className={otpShow ? "d-flex" : "d-none"}
        />
      )}
      {/* OtpModal */}

      {/* ProfileModal */}
      {profileShow && (
        <Profile
          onClick={() => toggleModal()}
          className={profileShow ? "d-flex" : "d-none"}
        />
      )}
      {/* ProfileModal */}
    </>
  );
}
