import React from "react";
import "./signup.css";
const Signup = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 signupLeft">
            <div className="text-left">
              <a className="navbar-brand " href="#">
                <img
                  decoding="async"
                  src="/icons/brand1.svg"
                  className="img-fluid navbar-brand-sticky"
                />
                BachelorsCave
              </a>
            </div>

            <div className="text-center signupParentDiv">
              <span className="signupText">
                A House is made of bricks and beams.A Home is made of hope and
                dreams. We’ll help you find your home.
              </span>
            </div>

            <div className="d-flex flex-column align-items-end">
              <img
                className="signupImg img-fluid"
                src="/icons/signup.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="createAccountDiv"></div>
            <h2
              className="text-center"
              style={{
                fontSize: "40px",
                fontWeight: "800",
                letterSpacing: "10px",
              }}
            >
              Create Account
            </h2>

            <div className="button-box">
              <div id="btn"></div>
              <button type="button" className="toggle-btn">
                owner signup
              </button>{" "}
              <button type="button" className="toggle-btn">
                Tenant signup
              </button>
            </div>
            <div className="social-icons mt-3">
              <div className="row">
                <div className="googleButton">
                  <button className="lognwithbutton">
                    <img
                      src="/icons/devicon_google.svg"
                      alt=""
                      style={{ marginRight: "20px", width: "15px" }}
                    />
                    <span className="loginWithgoogle">Login with Google</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="account__login--divide">
              <span className="account__login--divide__text">OR</span>
            </div>
            <div className="text-center">
              <form action="">
                <div className="form-group">
                  <input type="text" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
