import React, { useEffect, useState } from "react";
// import { useState } from "react";
import "./OwnerDasboard.css";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";
import { decryptData } from "../../_helper/cryptoUtils";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { ownerService } from "../../_helper/AuthService";
import { jwtDecode } from "jwt-decode";

const OwnerDasboard = () => {
  const [ownerInfo, setownerInfo] = useState("");
  const getUserFromLocalStorage = JSON.parse(localStorage.getItem("userInfo"));
  console.log(getUserFromLocalStorage, "neet");

  const token = getUserFromLocalStorage && getUserFromLocalStorage.token;
  const tokenDecode = token && jwtDecode(token);

  // get owner details
  const [ownerData, setOwnerData] = useState("");
  // console.log(ownerInfo);
  const fetchOwnerData = async () => {
    try {
      const data = await ownerService.getOwnerDetails(ownerInfo?._id);
      setOwnerData(data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchOwnerData();
  }, [ownerInfo?._id]);
  // console.log(ownerData[0]?.galleryData)

  return (
    <>
      <SubNavbar />
      <section id="owner-space" className="container-fluid ">
        <h1>Owner Space</h1>
        <div className="row owner__space">
          <div className="col-lg-8">
            <div className="owner__space__card d-flex justify-content-between align-items-center w-100">
              <div className="owner__card__left">
                <h4 style={{ textTransform: "capitalize" }}>
                  Hi {ownerInfo?.name}, welcome to Bachelor’sCave
                </h4>
                <p>
                  Follow our guide to get started on the platform. Online
                  booking, our guaranteed, last-minute cancelling, everything is
                  explained there!
                </p>
                <button>Discover our Guide</button>
              </div>
              <div
                className="owner__card__mid
              "
              ></div>
              <div className="owner__card__right d-flex flex-column justify-content-center align-items-center">
                <img src="/image/Vector (12).png" alt="" />
                <h5>Need Help ?</h5>
                <p>Send us Message</p>
              </div>
              <div className="owner__card__right"></div>
            </div>
            <div className="admin__pills">
              <ul
                className="nav nav-pills mb-4 admin__pill__menu d-flex justify-content-between"
                id="admin-pills"
                role="tablist"
              >
                <li className="nav-item  " role="adminData">
                  <button
                    className="w-100 nav-link nav-Link  d-flex justify-content-start active"
                    id="manage-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#manage"
                    type="button"
                    role="tab"
                    aria-controls="manage"
                    aria-selected="true"
                  >
                    Manage Properties
                  </button>
                </li>

                <li className="nav-item  " role="adminData">
                  <button
                    className="nav-link nav-Link  d-flex justify-content-start"
                    id="performance-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#performance"
                    type="button"
                    role="tab"
                    aria-controls="performance"
                    aria-selected="false"
                  >
                    Property Performance
                  </button>
                </li>

                <li className="nav-item  " role="adminData">
                  <button
                    className="nav-link nav-Link  d-flex justify-content-start"
                    id="response-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#response"
                    type="button"
                    role="tab"
                    aria-controls="response"
                    aria-selected="false"
                  >
                    Response
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="admin-pillsContent">
                <div
                  className="w-100 tab-pane  show container active"
                  id="manage"
                  role="tabpane2"
                  aria-labelledby="manage-tab"
                >
                  <div className="row mb-4">
                    <div className="col-lg-3 position-relative">
                      <div className="dropdown-center manage__drop w-100">
                        <a
                          className="btn  w-100  dropdown-toggle d-flex align-items-center justify-content-between"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          All
                          <img
                            src="/image/Vector (13).png"
                            alt=""
                            style={{
                              width: "15px",
                              height: "12px",
                            }}
                          />
                        </a>

                        <ul className="dropdown-menu position-absolute w-100 p-0 pt-1">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Action2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Action3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-5 position-relative">
                      <div className="dropdown-center manage__drop w-100">
                        <a
                          className="btn  w-100  dropdown-toggle d-flex align-items-center justify-content-between"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Search Properties
                          <img
                            src="/image/Vector (13).png"
                            alt=""
                            style={{
                              width: "15px",
                              height: "12px",
                            }}
                          />
                        </a>

                        <ul className="dropdown-menu position-absolute w-100 p-0 pt-1">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Action2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Action3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      marginTop: "50px",
                    }}
                  >
                    {ownerData[0]?.galleryData?.map((data) => {
                      data?.filename?.map((item, index) => {
                        return (
                          <div className="col-lg-3">
                            <img
                              src={`${import.meta.env.VITE_API_URL}/`}
                              className=""
                              style={{
                                width: "269px",
                                height: "185px",
                              }}
                            />
                          </div>
                        );
                      });
                    })}
                    {/* <div className="col-lg-12">
                      <div className="card mb-3 w-100 manage__pill__card">
                        <div className="row g-0">
                          <div className="col-md-5">
                            <img
                              src="/cardImage/cardImage.png"
                              className=""
                              style={{
                                width: "269px",
                                height: "185px",
                              }}
                            />
                          </div>
                          <div className="col-md-7 p-3">
                            <div className="card__ryt__top d-flex justify-content-between align-items-start">
                              <div className="card__ryt__top__content d-flex">
                                <h5>Basic Plan</h5>
                                <div className="vertical__rule"></div>
                                <p>Valid Till: Nov 27, 2023</p>
                              </div>
                              <img
                                src="/image/Group 4.png"
                                alt=""
                                style={{
                                  width: "4px",
                                  height: "19.2px",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                            <div className="card__ryt__bottom row">
                              <div className="col-lg-8">
                                <div className="ryt-btm-left">
                                  <h3 className="mb-0">
                                    2 BHK Flat in chandigarh
                                  </h3>
                                  <p>
                                    1598, 23B, Sector 23, Chandigarh, 160023,
                                    India
                                  </p>
                                  <h3 className="mb-3">₹ 6,999</h3>
                                  <span>Edit</span>
                                  <span className="ps-4 ">Deactivate</span>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="ryt-btm-ryt">
                                  <div className="btm-ryt-content d-flex flex-column justify-content-between align-items-center">
                                    <p>Available from</p>
                                    <div className="line"></div>
                                    <h4>
                                      01/10/2023{" "}
                                      <i class="fa-solid fa-pencil"></i>
                                    </h4>
                                  </div>
                                  <button>Upgrade</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-5">
                      <div className="card mb-3 w-100 manage__pill__card">
                        <div className="row g-0">
                          <div className="col-md-5">
                            <img
                              src="/cardImage/cardImage.png"
                              className=""
                              style={{
                                width: "269px",
                                height: "185px",
                              }}
                            />
                          </div>
                          <div className="col-md-7 p-3">
                            <div className="card__ryt__top d-flex justify-content-between align-items-start">
                              <div className="card__ryt__top__content d-flex">
                                <h5>Basic Plan</h5>
                                <div className="vertical__rule"></div>
                                <p>Valid Till: Nov 27, 2023</p>
                              </div>
                              <img
                                src="/image/Group 4.png"
                                alt=""
                                style={{
                                  width: "4px",
                                  height: "19.2px",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                            <div className="card__ryt__bottom row">
                              <div className="col-lg-8">
                                <div className="ryt-btm-left">
                                  <h3 className="mb-0">
                                    2 BHK Flat in chandigarh
                                  </h3>
                                  <p>
                                    1598, 23B, Sector 23, Chandigarh, 160023,
                                    India
                                  </p>
                                  <h3 className="mb-3">₹ 6,999</h3>
                                  <span>Edit</span>
                                  <span className="ps-4 ">Deactivate</span>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="ryt-btm-ryt">
                                  <div className="btm-ryt-content d-flex flex-column justify-content-between align-items-center">
                                    <p>Available from</p>
                                    <div className="line"></div>
                                    <h4>
                                      01/10/2023{" "}
                                      <i class="fa-solid fa-pencil"></i>
                                    </h4>
                                  </div>
                                  <button>Upgrade</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div
                  className="w-100 tab-pane p-0  show container "
                  id="performance"
                  role="tabpane2"
                  aria-labelledby="performance-tab"
                >
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <div className="property__performance d-flex align-items-center w-100">
                        <div className="property__performance__lft">
                          <h3>Your Property Performance</h3>
                          <p>Last Update: 28th Sep</p>
                        </div>
                        <div className="property__performance__mid">
                          <h4>
                            Property Perfomance - <span>Low</span>{" "}
                          </h4>
                          <p>Improve Performance </p>
                        </div>
                        <div className="property__performance__ryt">
                          <p>25%</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 p-0 mt-5">
                      <div className="free__member__card">
                        <div className="free__member__card__top d-flex justify-content-between">
                          <h3>You (Free Member)</h3>
                          <button>Upgrade</button>
                        </div>
                        <div className="free__member__card__btm">
                          <div className="row">
                            <div className="col-lg-2 ps-2 ">
                              <div className="property__performance__ryt m-0">
                                <p
                                  style={{
                                    marginLeft: "10px",
                                    marginTop: "10px",
                                  }}
                                >
                                  17%
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-10 p-0">
                              <div className="free__mem__content__ryt">
                                <h3>Tenants can view your property</h3>
                              </div>
                            </div>
                            <div className="col-lg-2 ps-4">
                              <div className="free__mem__content__lft">
                                <h3>20</h3>
                              </div>
                            </div>
                            <div className="col-lg-10 p-0">
                              <div className="free__mem__content__ryt">
                                <h3>Tenants viewed your property</h3>
                              </div>
                            </div>
                            <div className="col-lg-2 ps-4">
                              <div className="free__mem__content__lft">
                                <h3>20</h3>
                              </div>
                            </div>
                            <div className="col-lg-10 p-0">
                              <div className="free__mem__content__ryt">
                                <h3>Tenants viewed your property</h3>
                              </div>
                            </div>
                            <div className="col-lg-2 ps-4">
                              <div className="free__mem__content__lft">
                                <h3>20</h3>
                              </div>
                            </div>
                            <div className="col-lg-10 p-0">
                              <div className="free__mem__content__ryt">
                                <h3>Tenants viewed your property</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-2 p-0 mt-5 d-flex justify-content-center align-items-center "
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      VS
                    </div>
                    <div className="col-lg-5 p-0 mt-5">
                      <div className="premium__member__card">
                        <div className="premium__member__card__top d-flex justify-content-between">
                          <h3>Abishek</h3>
                          <button className="d-flex align-items-center justify-content-between">
                            <img src="/image/image 1 (1).png" alt="" /> Premium
                            member
                          </button>
                        </div>
                        <div className="premium__member__card__btm">
                          <div className="row">
                            <div className="col-lg-2 ps-2 ">
                              <div className="property__performance__ryt m-0">
                                <p
                                  style={{
                                    marginLeft: "10px",
                                    marginTop: "10px",
                                    backgroundColor: "#fff",
                                    border: "7px solid #6155DF",
                                  }}
                                >
                                  97%
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-10 p-0">
                              <div className="premium__mem__content__ryt">
                                <h3>Tenants can view your property</h3>
                              </div>
                            </div>
                            <div className="col-lg-2 ps-4">
                              <div className="premium__mem__content__lft">
                                <h3>20</h3>
                              </div>
                            </div>
                            <div className="col-lg-10 p-0">
                              <div className="premium__mem__content__ryt">
                                <h3>Tenants viewed your property</h3>
                              </div>
                            </div>
                            <div className="col-lg-2 ps-4">
                              <div className="premium__mem__content__lft">
                                <h3>20</h3>
                              </div>
                            </div>
                            <div className="col-lg-10 p-0">
                              <div className="premium__mem__content__ryt">
                                <h3>Tenants viewed your property</h3>
                              </div>
                            </div>
                            <div className="col-lg-2 ps-4">
                              <div className="premium__mem__content__lft">
                                <h3>20</h3>
                              </div>
                            </div>
                            <div className="col-lg-10 p-0">
                              <div className="premium__mem__content__ryt">
                                <h3>Tenants viewed your property</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="w-100 tab-pane p-0  show container"
                  id="response"
                  role="tabpane2"
                  aria-labelledby="response-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 position-relative">
                      <div
                        className="dropdown-center manage__drop w-100"
                        style={{
                          height: "33px",
                        }}
                      >
                        <a
                          className="btn  w-100  dropdown-toggle d-flex align-items-center justify-content-between"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{
                            marginBottom: "5px",
                            height: "33px",
                          }}
                        >
                          Search response
                          <img
                            src="/image/Vector (13).png"
                            alt=""
                            style={{
                              width: "15px",
                              height: "12px",
                            }}
                          />
                        </a>

                        <ul className="dropdown-menu position-absolute w-100 p-0 pt-1">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Action2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Action3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="col-lg-1"></div> */}
                    <div className="col-lg-3 p-0 ms-5 response__pill__btn">
                      <button>Pending (1) </button>
                    </div>
                    <div className="col-lg-3 p-0 ms-0 response__pill__btn">
                      <button>Contacted (1) </button>
                    </div>
                  </div>
                  <div className="row mt-5 ">
                    <div className="col-lg-12">
                      <div className="response__card">
                        <div className="row  ">
                          <div className="col-lg-6 ">
                            <div className="response__card__lft d-flex  align-item-between flex-column">
                              <div className="response__lft__up d-flex align-items-center">
                                <img
                                  src="/image/Vector (15).png"
                                  alt=""
                                  style={{
                                    width: "55px",
                                    height: "55px",
                                  }}
                                />
                                <div className="lft__up__content">
                                  <h1 className="m-0 ps-4">John Cena (BOY)</h1>
                                  <p className="m-0 mt-1 ps-4">
                                    +91 87........
                                  </p>
                                  <p className="m-0 mt-1 ps-4">
                                    john........@gmail.com
                                  </p>
                                </div>
                              </div>
                              <div className="response__lft__down mt-4">
                                <button>More options</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 d-flex justify-content-end">
                            <div className="response__card__ryt d-flex flex-column justify-content-between align-items-end">
                              <button>Contact</button>
                              <h4>
                                Received on: <span>jun 20 ,23</span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <div className="response__card">
                        <div className="row  ">
                          <div className="col-lg-6 ">
                            <div className="response__card__lft d-flex  align-item-between flex-column">
                              <div className="response__lft__up d-flex align-items-center">
                                <img
                                  src="/image/Vector (15).png"
                                  alt=""
                                  style={{
                                    width: "55px",
                                    height: "55px",
                                  }}
                                />
                                <div className="lft__up__content">
                                  <h1 className="m-0 ps-4">Rachel (GIRL)</h1>
                                  <p className="mt-1 m-0 ps-4">
                                    +91 8751871834
                                  </p>
                                  <p className="mt-1 m-0 ps-4">
                                    johncena@gmail.com
                                  </p>
                                </div>
                              </div>
                              <div className="response__lft__down mt-4">
                                <button>More options</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 d-flex justify-content-end">
                            <div className="response__card__ryt  d-flex flex-column justify-content-between align-items-end">
                              <button
                                style={{
                                  color: "#fff",
                                  backgroundColor: "#5E17EB",
                                }}
                              >
                                Contacted
                              </button>
                              <h4>
                                Received on: <span>jun 20 ,23</span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="admin__view__profile d-flex justify-content-between align-items-center ">
                  <div>
                    <h2 style={{ textTransform: "capitalize" }}>
                      {tokenDecode?.name}
                    </h2>
                    <Link to={""}>View Profile</Link>
                  </div>
                  <img src="/image/Vector (14).png" alt="" />
                </div>
                <div className="col-lg-12 ">
                  <div
                    className="admin__add__prop d-flex justify-content-between align-items-center mt-4"
                    style={{ cursor: "pointer" }}
                  >
                    <Link to={`/list-property/${tokenDecode?.id}`}>
                      Add new Property
                    </Link>
                    <img src="/image/Vector (14).png" alt="" />
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <div
                    className="admin__add__prop d-flex justify-content-between align-items-center mt-4"
                    style={{ cursor: "pointer" }}
                  >
                    <Link to={`/list-property/${tokenDecode?.id}`}>
                      Add new Property
                    </Link>
                    <img src="/image/Vector (14).png" alt="" />
                  </div>
                </div>

                <div className="col-lg-12 ">
                  <div className="admin__matching__tenants mt-4 d-flex justify-content-between align-items-center flex-column">
                    <div className="matching__top d-flex">
                      <img src="/image/image 2.png" alt="" />
                      <h3>
                        34 Matching Tenants <br />{" "}
                        <span>in Kharar, Punjab</span>
                      </h3>
                    </div>
                    <div className="matching__mid">
                      <div className="mid__head d-flex justify-content-between">
                        <h2>Name</h2>
                        <button>Good Match</button>
                      </div>
                      <div className="row mt-2">
                        <div className="col-lg-5">Budget:</div>
                        <div className="col-lg-7">₹ 7,200 - ₹ 8000</div>
                        <div className="col-lg-5">Last Active on:</div>
                        <div className="col-lg-7">Sep 26, 2023</div>
                        <div className="col-lg-5">Tenant is looking in:</div>
                        <div className="col-lg-7">Kharar, Punjab</div>
                        <div className="col-lg-5 mt-2 match__mid__btn">
                          <button>Contact</button>
                        </div>
                        <div className="col-lg-7 mt-2 match__mid__nav">
                          <a href="#">View next</a>
                        </div>
                      </div>
                    </div>
                    <div className="matching__bottom">
                      <a href="#">View all tenant</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OwnerDasboard;
