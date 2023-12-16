import React, { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Login.css";

function LoginPage() {
  let initialData = {
    email: "",
    phone_number: "",
  };
  const [visible, setVisible] = useState("");
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialData);
  useEffect(() => {
    // Implement form validation here
    const { email, password, agree } = formData;
    const errors = {};
    if (!email || !email.includes("@")) {
      errors.email = "Valid email is required";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formErrors).every((error) => !error)) {
      // Form is valid, you can proceed with form submission here
      console.log("=========>", formData);
    } else {
      alert("Please fix the form errors before submitting");
    }
  };

  return (
    <>
      <section className="loginSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="logoLogin text-center">
                <img src="/image/brand (1).png" alt="" width={150} />
                <br />
                <span
                  style={{
                    color: "#fff",
                    fontSize: "61.32px",
                    fontWeight: "600",
                  }}
                >
                  BachelorsCave
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="loginForm">
                <div className="row">
                  <h1 className="loginText">Login</h1>
                  <p style={{ paddingLeft: "50px" }} className="login__para">
                    Enter your credentials and get ready to explore
                  </p>
                </div>

                <form onSubmit={handleSubmit} id="ownerSignup" action="" style={{ marginTop: "50px" }}>
                  <div className="form-group mb-3" style={{ width: "100%" }}>
                    <div className="text-left loginWidth d-flex flex-column justify-content-center align-item-center">
                      <img
                        src="/image/email.png"
                        // style={{ width: "25px", paddingBottom: "5px" }}
                      />
                      <input
                        type="text"
                        className="emailInput email__input"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div
                      className="form-group mb-3 mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className=" text-left loginWidth">
                        <img
                          src="/image/password.png"
                          // style={{ width: "25px", paddingBottom: "5px" }}
                        />
                        <input
                          type={visible ? "text" : "password"}
                          className="emailInput email__input"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        {visible ? (
                          <VisibilityIcon
                            style={{
                              color: "#909090",
                              position: "absolute",
                              bottom: "5px",
                              right: "0px",
                            }}
                            onClick={() => setVisible(false)}
                          />
                        ) : (
                          <VisibilityOffIcon
                            style={{
                              color: "#909090",
                              position: "absolute",
                              bottom: "5px",
                              right: "0px",
                            }}
                            onClick={() => setVisible(true)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="row mb-4 mt-4">
                      <div className="col d-flex justify-content-center">
                        {/* Checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input "
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example31"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        {/* Simple link */}
                        <a
                          href="#!"
                          style={{ color: "#5E17EB", fontWeight: "500" }}
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div
                      className="text-center"
                      style={{ padding: "0px 40px" }}
                    >
                      <button
                        type="submit"
                        class="w-100 btn btn-primary btn-lg btn-block"
                        style={{ background: "#5E17EB", padding: "5px 0px" }}
                      >
                        Login
                      </button>
                    </div>
                    <div
                      className="social-icons"
                      style={{ overflow: "hidden" }}
                    >
                      {/* <div className="row"> */}
                      <div
                        className="googleButton"
                        style={{ padding: "0px 50px" }}
                      >
                        <button
                          className="w-100 logn__withbutton"
                          style={{ border: "2px #5E17EB solid" }}
                        >
                          <img
                            src="/icons/devicon_google.svg"
                            alt=""
                            style={{ marginRight: 20, width: 15 }}
                          />
                          <span className="loginWithgoogle">
                            Login with Google
                          </span>
                        </button>
                      </div>
                      {/* </div> */}
                    </div>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>
                        Don’t have an account?{" "}
                        <a href="#!" style={{ color: "#5E17EB" }}>
                          Sign up now
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
