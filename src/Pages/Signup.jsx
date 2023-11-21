import React, { useEffect, useState } from "react";
import "./signup.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { BounceLoader } from "react-spinners";
import { Link } from "react-router-dom";
const Signup = () => {
  const [visible, setVisible] = useState("");

  // get Form Value usign Onchange funcation

  let initialData = {
    name: "",
    email: "",
    phone_number: "",
    password: "",
    agree: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialData);
  useEffect(() => {
    // Implement form validation here
    const { name, email, phone, password, agree } = formData;
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }

    if (!email || !email.includes("@")) {
      errors.email = "Valid email is required";
    }

    if (!phone || phone.length !== 10) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!agree) {
      errors.agree = "You must agree to the terms and conditions";
    } else {
      errors.agree = "";
    }

    setFormErrors(errors);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formErrors).every((error) => !error)) {
      // Form is valid, you can proceed with form submission here
      alert("Form submitted successfully");
    } else {
      alert("Please fix the form errors before submitting.");
    }
  };

  // Toggle Funcationality

  const [activeTab, setActiveTab] = useState("right");
  const [loading, setLoading] = useState(false);

  const handleTabClick = (tab) => {
    var x = document.getElementById("btn");
    var y = document.getElementById("tenantSignup");
    var z = document.getElementById("ownerSignup");

    setLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      if (tab == "right") {
        x.style.left = "0px";
        y.style.display = "none";
        z.style.display = "block";
      } else if (tab == "left") {
        x.style.left = "200px";
        y.style.display = "block";
        z.style.display = "none";
      }
      setLoading(false);
    }, 100);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 signupLeft">
            <div className="text-left" style={{ paddingTop: "20px" }}>
              <a
                className="navbar-brand"
                href="#"
                style={{
                  fontWeight: "800",
                  fontSize: "21px",
                  color: "#373737",
                }}
              >
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
              <button
                id="ownerColor"
                type="button"
                className={`toggle-btn ${
                  activeTab === "right" ? "active" : ""
                }`}
                onClick={() => handleTabClick("right")}
              >
                owner signup
              </button>{" "}
              <button
                id="tennatColor"
                type="button"
                className={`toggle-btn ${activeTab === "left" ? "active" : ""}`}
                onClick={() => handleTabClick("left")}
              >
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

            <div className="text-center mt-2">
              {loading ? (
                <div
                  className="loading text-center"
                  style={{ margin: "0 auto" }}
                >
                  <div
                    className="spinner-border"
                    role="status"
                    style={{ color: "#5E17EB" }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>

                  {/* <BounceLoader
                    className="text-center"
                    color="#5E17EB"
                    style={{ margin: "0 auto" }}
                  /> */}
                </div>
              ) : (
                <>
                  <form id="ownerSignup" action="">
                    <div className="form-group mb-3" style={{ width: "100%" }}>
                      <div className="field text-left">
                        <img src="/icons/avatar.svg" />
                        <input
                          type="text"
                          className="emailInput"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Full Name"
                        />
                        <div className="error">{formErrors.name}</div>
                      </div>
                    </div>
                    <div className="form-group mb-3" style={{ width: "100%" }}>
                      <div className="field text-left">
                        <img src="/icons/email.svg" />
                        <input
                          type="text"
                          className="emailInput"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="error">{formErrors.email}</div>
                      </div>
                    </div>
                    <div className="form-group mb-3" style={{ width: "100%" }}>
                      <div className="field text-left">
                        <img src="/icons/phone.svg" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          pattern="[0-9]{10}"
                          required
                          className="emailInput"
                          placeholder="Phone Number"
                        />
                        <div className="error">{formErrors.phone}</div>
                      </div>
                    </div>
                    <div className="form-group mb-3" style={{ width: "100%" }}>
                      <div className="field text-left">
                        <img src="/icons/password.svg" />
                        <input
                          type={visible ? "text" : "password"}
                          className="emailInput"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        {visible ? (
                          <VisibilityIcon
                            style={{ color: "#909090" }}
                            onClick={() => setVisible(false)}
                          />
                        ) : (
                          <VisibilityOffIcon
                            ilityOffIcon
                            style={{ color: "#909090" }}
                            onClick={() => setVisible(true)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <ul
                          className="list-inline"
                          style={{ marginRight: "60px" }}
                        >
                          <li className="list-inline-item">
                            <input
                              className="emailInput"
                              type="checkbox"
                              name="agree"
                              checked={formData.agree}
                              onChange={handleInputChange}
                            />
                          </li>
                          <li className="list-inline-item">
                            <label
                              className="form-check-label"
                              htmlFor="invalidCheck"
                            >
                              By signing up I agree to{" "}
                              <span
                                style={{ color: "#5E17EB", fontWeight: "500" }}
                              >
                                Terms & Conditions!
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="createAccountButton"
                        style={{ background: "var( --primary-color)" }}
                      >
                        <span className="text-center">Create Account</span>
                      </button>
                    </div>
                    <div className="col-12" style={{ padding: "10px 0px" }}>
                      <span>
                        Already have an account?
                        <Link
                          to="/login"
                          style={{ color: "#5E17EB", marginRight: "80px" }}
                        >
                          Login now
                        </Link>
                      </span>
                    </div>
                  </form>
                  <form id="tenantSignup" action="">
                    <div className="form-group mb-3" style={{ width: "100%" }}>
                      <div className="field text-left">
                        <img src="/icons/avatar.svg" />
                        <input
                          type="text"
                          className="emailInput"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Full Name"
                        />
                        <div className="error">{formErrors.name}</div>
                      </div>
                    </div>
                    <div className="form-group mb-3" style={{ width: "100%" }}>
                      <div className="field text-left">
                        <img src="/icons/email.svg" />
                        <input
                          type="text"
                          className="emailInput"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="error">{formErrors.email}</div>
                      </div>
                    </div>
                    <div className="form-group mb-3" style={{ width: "100%" }}>
                      <div className="field text-left">
                        <img src="/icons/phone.svg" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          pattern="[0-9]{10}"
                          required
                          className="emailInput"
                          placeholder="Phone Number"
                        />
                        <div className="error">{formErrors.phone}</div>
                      </div>
                    </div>
                    <div className="form-group mb-3" style={{ width: "100%" }}>
                      <div className="field text-left">
                        <img src="/icons/password.svg" />
                        <input
                          type={visible ? "text" : "password"}
                          className="emailInput"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        {visible ? (
                          <VisibilityIcon
                            style={{ color: "#909090" }}
                            onClick={() => setVisible(false)}
                          />
                        ) : (
                          <VisibilityOffIcon
                            ilityOffIcon
                            style={{ color: "#909090" }}
                            onClick={() => setVisible(true)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <ul
                          className="list-inline"
                          style={{ marginRight: "60px" }}
                        >
                          <li className="list-inline-item">
                            <input
                              className="emailInput"
                              type="checkbox"
                              name="agree"
                              checked={formData.agree}
                              onChange={handleInputChange}
                            />
                          </li>
                          <li className="list-inline-item">
                            <label
                              className="form-check-label"
                              htmlFor="invalidCheck"
                            >
                              By signing up I agree to{" "}
                              <span
                                style={{ color: "#5E17EB", fontWeight: "500" }}
                              >
                                Terms & Conditions!
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="createAccountButton"
                        style={{ background: "var( --primary-color)" }}
                      >
                        <span className="text-center">
                          Create  Account
                        </span>
                      </button>
                    </div>
                    <div className="col-12" style={{ padding: "10px 0px" }}>
                      <span>
                        Already have an account?
                        <Link
                          to="/login"
                          style={{ color: "#5E17EB", marginRight: "80px" }}
                        >
                          Login now
                        </Link>
                      </span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
