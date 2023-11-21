import React, { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Login.css";

function LoginPage() {
  let initialData = {
    name: "",
    email: "",
    phone_number: "",
    password: "",
    agree: "",
  };
  const [visible, setVisible] = useState("");
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

  return (
    <>
      <section className="loginSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="logoLogin text-center">
                <img src="/icons/brand.svg" alt="" width={150} />
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
            <div className="col-lg-6">
              <div className="loginForm">
                <div className="row">
                  <h1 className="loginText">Login</h1>
                  <p style={{ paddingLeft: "50px" }}>
                    Enter your credentials and get ready to explore
                  </p>
                </div>

                <form id="ownerSignup" action="" style={{ marginTop: "50px" }}>
                  <div className="form-group mb-3" style={{ width: "100%" }}>
                    <div className="text-left loginWidth">
                      <img
                        src="/icons/email.svg"
                        style={{ width: "25px", paddingBottom: "5px" }}
                      />
                      <input
                        type="text"
                        className="emailInput"
                        placeholder="Your Email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleInputChange}
                        required
                      />
                      <div className="error">{formErrors.email}</div>
                    </div>
                  </div>

                  <div className="form-group mb-3" style={{ width: "100%" }}>
                    <div className=" text-left loginWidth">
                      <img
                        src="/icons/password.svg"
                        style={{ width: "25px", paddingBottom: "5px" }}
                      />
                      <input
                        type={visible ? "text" : "password"}
                        className="emailInput"
                        placeholder="Password"
                        name="password"
                        // value={formData.password}
                        // onChange={handleInputChange}
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
                  <div className="text-center" style={{ padding: "0px 40px" }}>
                    <button
                      type="submit"
                      class="w-100 btn btn-primary btn-lg btn-block"
                      style={{ background: "#5E17EB", padding: "5px 0px" }}
                    >
                      Login
                    </button>
                  </div>

                  <div className="social-icons mt-5" style={{overflow:'hidden'}}>
                    <div className="row">
                      <div
                        className="googleButton"
                        style={{ padding: "0px 50px"}}
                      >
                        <button className="w-100 lognwithbutton" style={{border:"2px #5E17EB solid"}}>
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
                    </div>
                  </div>

                  {/* Register buttons */}
                  <div className="text-center">
                    <p>
                      Don’t have an account? <a href="#!" style={{color:'#5E17EB'}}>Sign up now</a>
                    </p>
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
