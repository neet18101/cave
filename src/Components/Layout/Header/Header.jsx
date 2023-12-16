import React, { useEffect, useState } from "react";
import "../../../Pages/Testing.css";
import "./Header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BorderColor } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { decryptData } from "../../../_helper/cryptoUtils";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // counter
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    const startCount = 0;
    const endCount1 = 1500;
    const endCount2 = 500;
    const duration = 3500; // Animation duration in milliseconds
    const startTime = Date.now();

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;

        // Update each counter independently
        setCount1(Math.ceil(startCount + progress * (endCount1 - startCount)));
        setCount2(Math.ceil(startCount + progress * (endCount2 - startCount)));

        requestAnimationFrame(updateCounter);
      } else {
        // Ensure the counters reach their final values
        setCount1(endCount1);
        setCount2(endCount2);
      }
    };
    updateCounter();
  }, []);

  // navbar sticky
  const [active, setActive] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const [sortedData, setSortedData] = useState("");
  // console.log(userData && userData.token,VITE_SECRET_KEY);
  const decode = (token, secertKey) => {
    setSortedData(decryptData(token, secertKey));
  };
  useEffect(() => {
    decode(userData && userData.token, import.meta.env.VITE_SECRET_KEY);
  }, []);

  const logOut = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  return (
    <>
      <header>
        <nav
          className={`${
            active === true
              ? "navbar fixed-top active navbar-expand-lg navbar-sticky"
              : "navbar navbar-expand-lg navbar-sticky"
          }`}
        >
          <div className="container-fluid nav__padding">
            <a className="navbar-brand logoName" href="#">
              {active === true ? (
                <>
                  {/* <img
                    decoding="async"
                    src="/icons/pajamas_hamburger.svg"
                    className="img-fluid w-25 navbar-brand-regular px-3"
                  /> */}

                  <img
                    decoding="async"
                    src="/icons/brand2.svg"
                    className="img-fluid navbar-brand-sticky"
                  />
                </>
              ) : (
                <>
                  {/* <img
                    decoding="async"
                    src="/icons/vector.svg"
                    className="img-fluid w-25 navbar-brand-regular px-3"
                  /> */}

                  <img
                    decoding="async"
                    src="/icons/brand2.svg"
                    className="img-fluid navbar-brand-sticky"
                  />
                </>
              )}
              BachelorsCave
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ti-align-justify navbar-toggler-icon" />
            </button>
            {sortedData && sortedData != null ? (
              <>
                <div class="nav__right d-flex justify-content-between align-items-center">
                  <div class="user d-flex justify-content-start align-items-center">
                    <a href="#">
                      <img
                        src="image/account-circle.png"
                        class="user__icon"
                        alt="user account"
                      />
                    </a>
                    <div className="dropdown">
                      <button
                        id="user__name"
                        className="d-flex justify-content-between align-items-center"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {sortedData?.name}{" "}
                        <i className="fa-solid fa-chevron-down" />
                      </button>
                      <ul className="dropdown-menu mt-2">
                        <li>
                          <Link to={'/profile'} className="dropdown__item">
                            My Profile
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown__item" href="#">
                            Manage Subscription
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown__item" href="#">
                            Tenant Space
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown__item" href="#">
                            Shortlist
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown__item" href="#">
                            Seen Properties
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown__item" href="#">
                            Owners you contacted
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown__item log__out" href="#" onClick={logOut}>
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#" class="up__plan">
                    Upgrade Plan
                  </a>
                  <button class="nav__register">Register</button>
                </div>
              </>
            ) : (
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link scroll active"
                      aria-current="page"
                      href="#home"
                    >
                      <form action="" className="">
                        <img src="/image/Vector.png" alt="" />
                      </form>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={
                        active === true
                          ? {
                              color: "#000",
                              textTransform: "none",
                              fontWeight: "bold",
                            }
                          : {
                              color: "#000",
                              textTransform: "none",
                              fontWeight: "bold",
                            }
                      }
                    >
                      I’m an owner <KeyboardArrowDownIcon />
                    </a>
                    <div
                      className="dropdown-menu dropdown__menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link to={"/listing"} className="dropdown-item">
                        List Property
                      </Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" to="/signup">
                        Signup
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link scroll">
                      <Button
                        variant="outlined"
                        style={
                          active
                            ? {
                                color: "#000",
                                borderColor: "#000",
                                padding: "0px 15px",
                                textTransform: "capitalize",
                              }
                            : {
                                color: "#000",
                                borderColor: "#000",
                                padding: "0px 15px",
                                textTransform: "capitalize",
                              }
                        }
                      >
                        Register
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
      <section className="banner-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row r">
                <div className="col-md-8 banner-heading hero__inne">
                  <div className="hero-inner " />

                  <p className="discover_a">
                    <span>Discover</span> a place <br /> you will love to live
                  </p>
                  <p className="hero__description">
                    Connect with more than 75K renters looking for new homes
                    using our comprehensive marketing platform.
                  </p>
                </div>
                <div className="col-md-4">
                  <img src="/image/ellipse.png" className="ellipse" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <form className="search-form container">
                    <div className="row">
                      <div className="col-md-3 col-6 line-left">
                        <select name="" className="select-city">
                          <option value="">City</option>
                          <option value="">Lucknow</option>
                          <option value="">Hardoi</option>
                          <option value="">Kanpur</option>
                        </select>
                      </div>
                      <div className="col-md-9 col-6">
                        <input
                          type="text"
                          className="colloge-name"
                          id="your-surname"
                          name="your-surname"
                          placeholder="Enter college/Street name..."
                          required=""
                        />
                      </div>
                      <hr style={{ marginTop: "0px", marginBottom: "0px" }} />
                      <div className="col-md-3 col-6 bullect-point">
                        <input className="form-check-input" type="radio" />
                        <label
                          className="form-check-label full_house"
                          htmlFor="disabledFieldsetCheck"
                        >
                          Full House
                        </label>
                      </div>
                      <div className="col-md-3 col-6 line-left bullect-point">
                        <input className="form-check-input" type="radio" />
                        <label
                          className="form-check-label full_house"
                          htmlFor="disabledFieldsetCheck"
                        >
                          Pg/Hostel
                        </label>
                      </div>
                      <div className="col-md-3 col-6 line-left">
                        <select name="" className="budget">
                          <option value="">₹ Budget</option>
                          <option value="Lucknow">Lucknow</option>
                          <option value="">Hardoi</option>
                          <option value="">Kanpur</option>
                        </select>
                      </div>
                      <div className="col-md-3 col-6">
                        <select name="" className="budget">
                          <option value="">BHK Types</option>
                          <option value="">Lucknow</option>
                          <option value="">Hardoi</option>
                          <option value="">Kanpur</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-4">
                  <button
                    className="d-flex box-search  me-2"
                    type="search"
                    aria-label="Search"
                  >
                    {/* <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    /> */}
                    Search
                  </button>
                </div>
              </div>
              <div className="row counter-row">
                <div className="col-md-6 col-6 vertical">
                  <div className="counter-item vertical__1  d-flex ">
                    <h1>{count1}+</h1>
                    <h4>
                      Property <br /> Ready
                    </h4>
                  </div>
                </div>

                <div className="col-md-6 col-6">
                  <div className="counter-item d-flex">
                    <h1>{count2}+</h1>
                    <h4>
                      Happy <br /> Customers
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src="/image/banner-right.png" alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* <div className="hero-child" /> */}
    </>
  );
};

const styles = {
  paddLeft: {
    paddingLeft: "50px",
  },
};
export default Header;
