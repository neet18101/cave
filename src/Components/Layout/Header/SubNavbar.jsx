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
          className={`${
            active === true
              ? "navbar fixed-top active navbar-expand-lg navbar-sticky"
              : "navbar navbar-expand-lg navbar-sticky"
          }`}
          style={{ color: "#fff",filter:'drop-shadow(0px 1px 0px #DFDFDF)'}}
        >
          <div className="container-fluid">
            <a className="navbar-brand logoName" href="#">
              {active === true ? (
                <>
                  <img
                    decoding="async"
                    src="/icons/pajamas_hamburger.svg"
                    className="img-fluid w-25 navbar-brand-regular px-3"
                  />

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
                    src="/icons/vector.svg"
                    className="img-fluid w-25 navbar-brand-regular px-3"
                  />

                  <img
                    decoding="async"
                    src="/icons/brand.svg"
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
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link scroll active"
                    aria-current="page"
                    href="#home"
                  >
                    <form action="" className="">
                      <img src="/icons/vector1.svg" alt="" />
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
                            color: "#fff",
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
                <li className="nav-item">
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
                              color: "#fff",
                              borderColor: "#fff",
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
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default SubNavbar;
