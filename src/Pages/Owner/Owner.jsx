import React, { useState } from "react";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";
import "./owner.css";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { userAction } from "../../Redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { ownerDataRegister } from "../../Redux/Feature/OwnerDataSlices";

function Owner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerNumber: "",
    ownerEmail: "",
    ownerPassword: "",
    ownerGender: "",
    ownerPropertyType: "",
  });
  const [errors, setErrors] = useState({});

  // get redux state
  const ownerData = useSelector((state) => state.ownerData.userData[0]);
  // console.log(ownerData);
  const validateForm = () => {
    const newErrors = {};
    // Validate ownerName
    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "Owner Name is required";
    }
    // Validate ownerNumber
    if (!formData.ownerNumber.trim()) {
      newErrors.ownerNumber = "Mobile number is required";
    }
    // Validate ownerEmail
    if (!formData.ownerEmail.trim()) {
      newErrors.ownerEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.ownerEmail)) {
      newErrors.ownerEmail = "Invalid email address";
    }
    // Validate ownerPassword
    if (!formData.ownerPassword.trim()) {
      newErrors.ownerPassword = "Password is required";
    }
    // Validate ownerGender
    if (!formData.ownerGender.trim()) {
      newErrors.ownerGender = "Gender is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    // Assuming this code is inside a function or an event handler
    if (formData.ownerPropertyType === "pg") {
      // Redirect to the 'pglist' page
      navigate("/pglist", { replace: true });
    } else {
      // Redirect to the 'list-property' page
      const owenerData = {
        name: formData.ownerName,
        phonenumber: formData.ownerNumber,
        email: formData.ownerEmail,
        password: formData.ownerPassword,
        userFor: formData.ownerGender,
        propertyType: formData.ownerPropertyType,
        userType: 2,
      };
      dispatch(ownerDataRegister(owenerData));

      // setTimeout(() => {
        
      //   navigate("/login", { replace: true });
      // },2000)
      // navigate("/list-property", { replace: true });
    }
    return null;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the corresponding error when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  return (
    <>
      <SubNavbar />
      <section id="owner-sec">
        <h2 style={{ color: "#111C55" }}>
          List Property with{" "}
          <span style={{ color: "#5E17EB", fontSize: "2rem" }}>
            {" "}
            BachelorsCave!
          </span>
        </h2>
        <div className="container-fluid">
          <div className="row owner__section">
            <div className="col-lg-3 px-0">
              <div className="owner__left d-flex flex-column align-items-end ">
                <div className="owner__left__box1">
                  <h1>Why post through us?</h1>
                  <p className="d-flex">
                    <img src="/image/image 17.png" alt="" />
                    Zero brokerage
                  </p>
                  <p className="d-flex">
                    <img src="/image/image 18.png" alt="" />
                    Faster Tenants
                  </p>
                  <p className="d-flex">
                    <img src="/image/image 16.png" alt="" />
                    Zero Paperwork
                  </p>
                </div>

                <div className="owner__left__box2">
                  <h1>Thousands of owner trust us! </h1>
                  <p>
                    I posted a property ad online on BachelorsCave. <br />
                    its an efficient real estate wensite because despite my busy
                    schedule they did a great job of contacting me at the right
                    times. To keep me updated they sent mails & messages <br />
                    They found a great tenant for my property as per my demands.{" "}
                    <br />
                    <span>...</span>
                  </p>
                  <h5>
                    Anas <span>|</span> chandigarh
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-9 px-0">
              <div className="owner__right">
                <h1>Let’s start with us!</h1>
                <hr className="divide" />
                <form action="">
                  <div className="row">
                    <div className="col-lg-6 flex-column d-flex owner__form">
                      <label htmlFor="owner-name">Owner Name</label>
                      <input
                        type="text"
                        id="owner-name"
                        name="ownerName"
                        placeholder="Enter your name"
                        value={formData.ownerName}
                        onChange={handleChange}
                        className={errors.ownerName ? "error" : ""}
                      />
                      {errors.ownerName && (
                        <div className="error-message">{errors.ownerName}</div>
                      )}
                    </div>
                    <div className="col-lg-6 flex-column d-flex owner__form">
                      <label htmlFor="owner-number">Mobile number</label>
                      <input
                        type="text"
                        id="owner-number"
                        name="ownerNumber"
                        placeholder="Enter your number"
                        value={formData.ownerNumber}
                        onChange={handleChange}
                        className={errors.ownerNumber ? "error" : ""}
                      />
                    </div>
                    <div className="col-lg-6 flex-column d-flex owner__form mt-4">
                      <label htmlFor="owner-email">Email</label>
                      <input
                        type="email"
                        id="owner-email"
                        name="ownerEmail"
                        placeholder="Enter your email"
                        value={formData.ownerEmail}
                        onChange={handleChange}
                        className={errors.ownerEmail ? "error" : ""}
                      />
                    </div>
                    <div className="col-lg-6 flex-column d-flex owner__form mt-4">
                      <label htmlFor="owner-password">Password</label>
                      <input
                        type="password"
                        id="owner-password"
                        name="ownerPassword"
                        placeholder="Enter your password"
                        value={formData.ownerPassword}
                        onChange={handleChange}
                        className={errors.ownerPassword ? "error" : ""}
                      />
                    </div>

                    <div className="col-lg-12 mt-4 owner__gender">
                      <label htmlFor="owner-gender">For</label>
                      <select
                        id="owner-gender"
                        aria-label="Default select example"
                        name="ownerGender"
                        value={formData.ownerGender}
                        onChange={handleChange}
                        className={
                          errors.ownerGender
                            ? "error form-select"
                            : "form-select"
                        }
                      >
                        <option selected> select </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="owner__property__type d-flex flex-column align-items-center justify-content-center">
                    <h1>Property Type</h1>
                    <div className="property__type__btn d-flex justify-content-between ">
                      <input
                        type="radio"
                        id="property-btn1"
                        name="ownerPropertyType"
                        hidden
                        checked={formData.ownerPropertyType === "flats"}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            ownerPropertyType: "flats",
                          })
                        }
                      />
                      <label htmlFor="property-btn1">Flats/Apartments</label>
                      <input
                        type="radio"
                        id="property-btn2"
                        name="ownerPropertyType"
                        hidden
                        checked={formData.ownerPropertyType === "pg"}
                        onChange={() =>
                          setFormData({ ...formData, ownerPropertyType: "pg" })
                        }
                      />
                      <label htmlFor="property-btn2">PG/Hostel</label>
                      <input
                        type="radio"
                        id="property-btn3"
                        name="ownerPropertyType"
                        hidden
                        checked={formData.ownerPropertyType === "residential"}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            ownerPropertyType: "residential",
                          })
                        }
                      />
                      <label htmlFor="property-btn3">Residential House</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="listing__foot__btns d-flex">
          <button
            className="listing__foot__btn-2"
            type="submit"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </section>
      <div className="container-fluid px-0 ">
        <div className="owner__card__sec d-flex justify-content-center align-items-center flex-column pb-4">
          <h1>How it works?</h1>
          <div className="d-flex justify-content-between pb-4">
            <div className="owner__card">
              <div className="d-flex align-items-start">
                <img src="/image/Component 13.png" alt="" />
                <div className="d-flex flex-column owner__card__content">
                  <h3>Share your Property Details</h3>
                  <p>
                    Enter all details like locality name, amenities etc. along
                    with uploading Photos
                  </p>
                </div>
              </div>
            </div>
            <div className="owner__card">
              <div className="d-flex align-items-start">
                <img src="/image/Component 13.png" alt="" />
                <div className="d-flex flex-column owner__card__content">
                  <h3>Share your Property Details</h3>
                  <p>
                    Enter all details like locality name, amenities etc. along
                    with uploading Photos
                  </p>
                </div>
              </div>
            </div>
            <div className="owner__card">
              <div className="d-flex align-items-start">
                <img src="/image/Component 13.png" alt="" />
                <div className="d-flex flex-column owner__card__content">
                  <h3>Share your Property Details</h3>
                  <p>
                    Enter all details like locality name, amenities etc. along
                    with uploading Photos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Owner;
