import React, { useEffect, useState } from "react";
import "./Testing.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BorderColor } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import SubNavbar from "../Components/Layout/Header/SubNavbar";
// import FormControl from '@mui/material/FormControl';

const Testing = () => {
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
     <SubNavbar/>
      <section id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-6">
              <div className="home_text">
                <h1 className="">
                  Discover a place <br />
                  you will love to live
                </h1>
                <span className="connect">
                  Connect with more than 75K renters looking for new homes using
                  our comprehensive marketing platform.
                </span>

                {/* Search Bar start */}

                <form action="">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="searchBar">
                        <div className="row">
                          <ul
                            className="list-inline searchliButtom"
                            style={{ marginBottom: "0px" }}
                          >
                            <li
                              className="list-inline-item"
                              style={{ width: "30%" }}
                            >
                              <select
                                name=""
                                id=""
                                style={{
                                  fontWeight: "600",
                                  width: "60%",
                                  padding: "5px",
                                  border: "none",
                                  outline: "none",
                                }}
                              >
                                <option value="">City</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                              </select>
                            </li>
                            <li className="list-inline-item">
                              <input
                                type="text"
                                placeholder="Enter college/Street name..."
                                className="searchRoom"
                              />
                            </li>
                            <hr style={{ margin: "0px" }} />
                          </ul>
                        </div>
                        <ul className="list-inline searchliButtom">
                          <li className="list-inline-item">
                            {" "}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Full house
                              </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                              >
                                Pg/Hostel
                              </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <img
                              src="/icons/Vector2.svg"
                              alt=""
                              style={{ width: "20px", padding: "2px" }}
                            />
                            <select
                              name=""
                              id=""
                              style={{
                                fontWeight: "600",
                                border: "none",
                                outline: "none",
                              }}
                            >
                              <option value="">Rooms</option>
                              <option value=""></option>
                              <option value=""></option>
                              <option value=""></option>
                            </select>
                          </li>
                          <li className="list-inline-item">
                            <img
                              src="/icons/Vector3.svg"
                              alt=""
                              style={{ width: "20px", padding: "2px" }}
                            />
                            <select
                              name=""
                              id=""
                              style={{
                                fontWeight: "600",
                                border: "none",
                                outline: "none",
                              }}
                            >
                              <option value="">Tenant</option>
                              <option value=""></option>
                              <option value=""></option>
                              <option value=""></option>
                            </select>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="searchButton">
                        <SearchIcon /> Search
                      </div>
                    </div>
                  </div>
                </form>

                {/* Search Bar end */}
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="home-image">
                <img className="img-fluid" alt src="/building2.png" />
                <img className="img-fluid" alt src="/building.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-item" />
      <div className="hero-inner" />
      {/* <div className="hero-child" /> */}
    </>
  );
};

export default Testing;
