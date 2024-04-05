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
import SubNavbar from "./SubNavbar";
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
  // console.log(sortedData);

  return (
    <>
      <SubNavbar />
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
