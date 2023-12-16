import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SubNavbar = () => {
  const [active, setActive] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <header>
        <nav
          className={`${active === true
            ? "navbar fixed-top active navbar-expand-lg navbar-sticky"
            : "navbar navbar-expand-lg navbar-sticky"
            }`}
          style={{ color: "#fff", filter: 'drop-shadow(0px 1px 0px #DFDFDF)' }}
        >
          <div className="container-fluid">
            <a className="navbar-brand logoName" href="#">
              {active === true ? (
                <>
                  <img
                    decoding="async"
                    src="/icons/brand2.svg"
                    className="img-fluid navbar-brand-sticky"
                  />
                </>
              ) : (
                <>
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
              <span className="ti-align-justify navbar-toggler-icon nav__toggle" />
            </button>
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
                  <button id="user__name" className="d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Anas <i className="fa-solid fa-chevron-down" />
                  </button>
                  <ul className="dropdown-menu mt-2">
                    <li><a className="dropdown__item" href="#">My Profile</a></li>
                    <hr />
                    <li>
                      <a className="dropdown__item" href="#">Manage Subscription</a>
                    </li>
                    <hr />
                    <li><a className="dropdown__item" href="#">Tenant Space</a></li>
                    <hr />
                    <li><a className="dropdown__item" href="#">Shortlist</a></li>
                    <hr />
                    <li><a className="dropdown__item" href="#">Seen Properties</a></li>
                    <hr />
                    <li>
                      <a className="dropdown__item" href="#">Owners you contacted</a>
                    </li>
                    <hr />
                    <li><a className="dropdown__item log__out" href="#">Sign out</a></li>
                  </ul>
                </div>


              </div>
              <a href="#" class="up__plan">Upgrade Plan</a>
              <button class="nav__register">Register</button>
            </div>
            {/* <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item m-0">
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
                <li className="nav-item m-0 dropdown" style={{ marginTop: '0px' }}>
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
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      List Property
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/login">
                      Login
                    </a>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="/signup">
                      Signup
                    </Link>
                  </div>
                </li>
                <li className="nav-item m-0">
                  <a className="nav-link scroll" href="#app-screenshots">
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
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default SubNavbar;
