import React from "react";
import { useState } from "react";
import './Tenant'

import "./Profile.css";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";
import Footer from "../../Components/Footer";
import Tenant from "./Tenant";

function Profile() {
  const [nameChange, setNameChange] = useState("Navneet Yadav");
  const handleClickName = () => { };
  return (
    <>
      <SubNavbar />
      <section className="container account">
        <h3 className="account__title">Manage my account</h3>
        <div className="booking d-flex account__detail mb-5">
          <ul
            className="nav nav-pills mb-3 d-flex flex-column detail_menu_item"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item profile__nav__item" role="presentation">
              <button
                className="  nav-link nav__link active d-flex justify-content-start"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                My Profile
              </button>
            </li>
            <li className="nav-item profile__nav__item" role="presentation">
              <button
                className="nav-link nav__link d-flex justify-content-start"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <a href="#">Tenant space</a>
              </button>
            </li>
            <li className="nav-item profile__nav__item" role="presentation">
              <button
                className="nav-link nav__link d-flex justify-content-start"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Shortlist
              </button>
            </li>
            <li className="nav-item profile__nav__item" role="presentation">
              <button
                className="nav-link nav__link d-flex justify-content-start"
                id="pills-transfer-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-transfer"
                type="button"
                role="tab"
                aria-controls="pills-transfer"
                aria-selected="false"
              >
                My Payments
              </button>
            </li>
            <hr className="divider" />
            <li className="nav-item profile__nav__item" role="presentation">
              <button
                className="  nav-link nav_link_botm d-flex justify-content-start"
                id="pills-password-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-transfer"
                type="button"
                role="tab"
                aria-controls="pills-password"
                aria-selected="false"
              >
                Change Password
              </button>
            </li>
            <li className="nav-item profile__nav__item" role="presentation">
              <button
                className="nav-link nav_link_botm d-flex justify-content-start"
                id="pills-delete-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-delete"
                type="button"
                role="tab"
                aria-controls="pills-transfer"
                aria-selected="false"
              >
                Delete Account
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active account__profile container"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <h3>My Profile</h3>
              <div className="user__id d-flex justify-content-between align-items-center">
                <div className=" d-flex ">
                  <img
                    src="/image/account-circle.png"
                    alt="user img"
                    className="account__circle"
                  />
                  <li className="user__name d-flex  flex-column align-items-start justify-content-start ">
                    <input
                      type="text"
                      value={nameChange}
                      onClick={handleClickName}
                      id="user-name"
                    />
                    <p>Tenant</p>
                  </li>
                </div>
                <button className="user__edit" id="name-edit">
                  Edit <i className="fa-solid fa-pencil" />
                </button>
              </div>
              <div className="personal__info">
                <div className="info__head d-flex justify-content-between">
                  <h3>Personal information</h3>
                  <button className="user__edit">
                    Edit <i className="fa-solid fa-pencil" />
                  </button>
                </div>
                <div className="personal_info_item d-flex justify-content-between flex-wrap ">
                  <div className="info__item">
                    <p>First Name</p>
                    <h3>Mohd</h3>
                  </div>
                  <div className="info__item">
                    <p>Last Name</p>
                    <h3>Anas</h3>
                  </div>
                  <div className="info__item">
                    <p>Email address</p>
                    <h3>anasmohd@gmail.com</h3>
                  </div>
                  <div className="info__item">
                    <p>Phone Number</p>
                    <h3>+91 7451871829</h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* <Tenant/> */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <h3>Shortlist</h3>
              <div className="user__id d-flex justify-content-between align-items-center"></div>
              <div className="personal__info"></div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-transfer"
              role="tabpanel"
              aria-labelledby="pills-transfer-tab"
            >
              <h3>My Payments</h3>
              <div className="user__id d-flex justify-content-between align-items-center"></div>
              <div className="personal__info"></div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-password"
              role="tabpanel"
              aria-labelledby="pills-password-tab"
            >
              <h3>Change Password</h3>
              <div className="user__id d-flex justify-content-between align-items-center"></div>
              <div className="personal__info"></div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-delete"
              role="tabpanel"
              aria-labelledby="pills-delete-tab"
            >
              <h3>Delete Account</h3>
              <div className="user__id d-flex justify-content-between align-items-center"></div>
              <div className="personal__info"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
