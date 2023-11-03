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
            <h2 className="text-center">Create Account</h2>

            <div className="button-box">
              <button type="button" className="toggle-btn">
                owner signup
              </button>{" "}
              <button type="button" className="toggle-btn">
                Tenant signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
