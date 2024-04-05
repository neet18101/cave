import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import { decryptData } from "../../../_helper/cryptoUtils";
import { jwtDecode } from "jwt-decode";

const SubNavbar = () => {
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
  const token = userData && userData.token;
  const tokenDecode = token && jwtDecode(token);
  // console.log(tokenDecode);

  const logOut = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };
  // console.log(userData);

  return (
    <>
      <header>
        <nav
          className={`${
            active === true
              ? "navbar fixed-top active navbar-expand-lg navbar-sticky"
              : "navbar navbar-expand-lg navbar-sticky"
          }`}
          style={{
            borderBottom: " 1px solid #4d4d4d94",
            filter: "drop-shadow(1px 1px 1px #bcbcbc)",
            zIndex: "10",
          }}
        >
          <div className="container-fluid nav__padding">
            <a className="navbar-brand logoName" href="/">
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

            {tokenDecode && tokenDecode !== null ? (
              tokenDecode?.type === 2 ? (
                // Admin view
                <>
                  <div className="nav__right d-flex justify-content-between align-items-center">
                    <div className="user d-flex justify-content-start align-items-center">
                      <a href="#">
                        <img
                          src="/image/account-circle.png"
                          className="user__icon"
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
                          style={{ textTransform: "capitalize" }}
                        >
                          {tokenDecode?.name}{" "}
                          <i className="fa-solid fa-chevron-down" />
                        </button>
                        <ul
                          className="dropdown-menu mt-2"
                          style={{ scroll: "hidden" }}
                        >
                          <li>
                            <Link to={"/dashboard"} className="dropdown__item">
                              Dashboard
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
                            <a
                              className="dropdown__item log__out"
                              href="#"
                              onClick={logOut}
                            >
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <a href="#" className="up__plan">
                      Upgrade Plan
                    </a> */}
                    <button
                      className="nav__register"
                      style={{ fontWeight: 200 }}
                    >
                      List Property
                    </button>
                    {/* <i>{NotificationsIcon}</i> */}
                  </div>
                </>
              ) : (
                // User view
                <>
                  <div className="nav__right d-flex justify-content-between align-items-center">
                    <div className="user d-flex justify-content-start align-items-center">
                      <a href="#">
                        <img
                          src="image/account-circle.png"
                          className="user__icon"
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
                          {tokenDecode?.name}{" "}
                          <i className="fa-solid fa-chevron-down" />
                        </button>
                        <ul className="dropdown-menu mt-2">
                          <li>
                            <Link to={"/profile"} className="dropdown__item">
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
                            <a
                              className="dropdown__item log__out"
                              href="#"
                              onClick={logOut}
                            >
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a href="#" className="up__plan">
                      Upgrade Plan
                    </a>
                    <button className="nav__register">Register</button>
                  </div>
                </>
              )
            ) : (
              // Login view
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
                      <Link to={"/owner"} className="dropdown-item">
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
    </>
  );
};

export default SubNavbar;
