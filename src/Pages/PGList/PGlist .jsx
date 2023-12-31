import Footer from "../../Components/Footer";
import FooterSection from "../../Components/Layout/FooterSection";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";
import "./Pg.css";

const PGlist = () => {
  return (
    <>
      <SubNavbar />
      {/* <h1></h1> */}
      <section className="container-fluid listing">
        <h3 className="listing__title">List PG</h3>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 p-2 justify-center">
            <div className="row listing__body">
              <div className="col-lg-2 col-md-2 col-sm-2 p-0">
                <ul
                  className="nav nav-pills mb-3 d-flex flex-column detail_menu_list"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="w-100 nav-link  list__link d-flex justify-content-start active"
                      id="room-detail-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#room-detail"
                      type="button"
                      role="tab"
                      aria-controls="room-detail"
                      aria-selected="true"
                    >
                      <img src="/image/Rectangle 10.png" alt />
                      Room Details
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="locality-detail-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#locality-detail"
                      type="button"
                      role="tab"
                      aria-controls="locality-detail"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 86.png" alt />
                      Locality details
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="pg-detail-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pg-detail"
                      type="button"
                      role="tab"
                      aria-controls="pg-detail"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 87.png" alt />
                      PG details
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="amenities-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#amenities"
                      type="button"
                      role="tab"
                      aria-controls="amenities"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 88.png" alt />
                      Amenities
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="gallery-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#gallery"
                      type="button"
                      role="tab"
                      aria-controls="gallery"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 89.png" alt />
                      Gallery
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="schedule-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#schedule"
                      type="button"
                      role="tab"
                      aria-controls="amenities"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 90.png" alt />
                      Schedule
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10  p-0">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="w-100 tab-pane listing__pg show container active"
                    id="room-detail"
                    role="tabpanel"
                    aria-labelledby="room-detail-tab"
                  >
                    <form action="">
                      <div className="list_room_detail1">
                        <h3>Room Details</h3>
                        <hr className="divide" />
                        <div className="mb-3">
                          <label htmlFor="pg-name" className="form-label">
                            PG Name *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="pg-name"
                            placeholder="Enter Your PG Name"
                          />
                        </div>
                        <h4>Select the type of rooms available in your PG</h4>

                        <div className="row w-100">
                          <div className="col-lg-6">
                            <div>
                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio"
                                id="btnradio1"
                                autoComplete="off"
                                defaultChecked
                              />
                              <label
                                className="btn btn-outline-primary btn_outlineprimary Listing_option "
                                htmlFor="btnradio1"
                              >
                                <div className="d-flex justify-content-center">
                                  <img src="/image/Room.png" alt="" />
                                </div>
                                Single
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            {" "}
                            <div>
                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio"
                                id="btnradio2"
                                autoComplete="off"
                              />
                              <label
                                className="btn btn-outline-primary btn_outlineprimary Listing_option "
                                htmlFor="btnradio2"
                              >
                                <div className="d-flex justify-content-center">
                                  <img src="/image/Room.png" alt="" />
                                  <img src="/image/Room.png" alt="" />
                                </div>
                                Double
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            {" "}
                            <div>
                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio"
                                id="btnradio3"
                                autoComplete="off"
                              />
                              <label
                                className="btn btn-outline-primary btn_outlineprimary  Listing_option"
                                htmlFor="btnradio3"
                              >
                                <div className="d-flex justify-content-center">
                                  <img src="/image/Room.png" alt="" />
                                  <img src="/image/Room.png" alt="" />
                                  <img src="/image/Room.png" alt="" />
                                </div>
                                Triple
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div>
                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio"
                                id="btnradio4"
                                autoComplete="off"
                              />
                              <label
                                className="btn btn-outline-primary btn_outlineprimary Listing_option "
                                htmlFor="btnradio4"
                              >
                                <div className="d-flex justify-content-center">
                                  <img src="/image/Room.png" alt="" />
                                  <img src="/image/Room.png" alt="" />
                                  <img src="/image/Room.png" alt="" />
                                  <img src="/image/Room.png" alt="" />
                                </div>
                                Four
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="list_room_detail2">
                          <h4>
                            Provide details about your place to find a tenant
                            soon
                          </h4>
                          <hr className="divide__room-detail" />
                          <div className="row">
                            <div className="col-lg-3">
                              <div>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="btnradio"
                                  id="btnradio11"
                                  autoComplete="off"
                                  defaultChecked
                                />
                                <label
                                  className="btn btn-outline-primary btn_outlineprimary Listing_option "
                                  htmlFor="btnradio11"
                                >
                                  <div className="d-flex justify-content-center">
                                    <img src="/image/Room.png" alt="" />
                                  </div>
                                  Single
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="btnradio"
                                  id="btnradio22"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-primary btn_outlineprimary Listing_option "
                                  htmlFor="btnradio22"
                                >
                                  <div className="d-flex justify-content-center">
                                    <img src="/image/Room.png" alt="" />
                                    <img src="/image/Room.png" alt="" />
                                  </div>
                                  Double
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="btnradio"
                                  id="btnradio33"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-primary btn_outlineprimary  Listing_option"
                                  htmlFor="btnradio33"
                                >
                                  <div className="d-flex justify-content-center">
                                    <img src="/image/Room.png" alt="" />
                                    <img src="/image/Room.png" alt="" />
                                    <img src="/image/Room.png" alt="" />
                                  </div>
                                  Triple
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="btnradio"
                                  id="btnradio44"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn btn-outline-primary btn_outlineprimary Listing_option "
                                  htmlFor="btnradio44"
                                >
                                  <div className="d-flex justify-content-center">
                                    <img src="/image/Room.png" alt="" />
                                    <img src="/image/Room.png" alt="" />
                                    <img src="/image/Room.png" alt="" />
                                    <img src="/image/Room.png" alt="" />
                                  </div>
                                  Four
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6">
                              <label
                                htmlFor="exampleInputEmail6"
                                className="form-label form_label_listing"
                              >
                                Expected Deposit
                              </label>
                              <div
                                className="d-flex listing_rent_box align-items-center"
                                style={{
                                  backgroundColor: "#fff",
                                }}
                              >
                                <p>₹</p>
                                <input
                                  type="number"
                                  className=""
                                  placeholder="Enter Amount"
                                  id="exampleInputEmail6"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <label
                                htmlFor="exampleInputEmail6"
                                className="form-label form_label_listing"
                              >
                                Expected Deposit
                              </label>
                              <div
                                className="d-flex listing_rent_box align-items-center"
                                style={{
                                  backgroundColor: "#fff",
                                }}
                              >
                                <p>₹</p>
                                <input
                                  type="number"
                                  className=""
                                  placeholder="Enter Amount"
                                  id="exampleInputEmail6"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row amenities__avail">
                            <h3 className="mt-4 col-lg-12">PG/Hostel Rules</h3>

                            <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                defaultValue="Bike"
                              />
                              <img src="/image/image 32.png" alt="" />
                              <label className="ms-3" htmlFor="vehicle1">
                                Closet
                              </label>
                              <br />
                            </div>
                            <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                defaultValue="Bike"
                              />
                              <img src="/image/image 34.png" alt="" />
                              <label className="ms-3" htmlFor="vehicle1">
                                TV
                              </label>
                              <br />
                            </div>
                            <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                defaultValue="Bike"
                              />
                              <img src="/image/image 36.png" alt="" />
                              <label className="ms-3" htmlFor="vehicle1">
                                Bedding
                              </label>
                              <br />
                            </div>
                            <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                defaultValue="Bike"
                              />
                              <img src="/image/image 33.png" alt="" />
                              <label className="ms-3" htmlFor="vehicle1">
                                Geyser
                              </label>
                              <br />
                            </div>
                            <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                defaultValue="Bike"
                              />
                              <img src="/image/Group 79.png" alt="" />
                              <label className="ms-3" htmlFor="vehicle1">
                                AC
                              </label>
                              <br />
                            </div>
                            <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                defaultValue="Bike"
                              />
                              <img src="/image/image 35.png" alt="" />
                              <label className="ms-3" htmlFor="vehicle1">
                                Attached Bathroom
                              </label>
                              <br />
                            </div>
                            <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                defaultValue="Bike"
                              />
                              <img src="/image/desk.png" alt="" />
                              <label className="ms-3" htmlFor="vehicle1">
                                Table
                              </label>
                              <br />
                            </div>
                            <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                defaultValue="Bike"
                              />
                              <img src="/image/Group 126.png" alt="" />
                              <label className="ms-3" htmlFor="vehicle1">
                                Meal Included
                              </label>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane listing__pg"
                    id="locality-detail"
                    role="tabpanel"
                    aria-labelledby="locality-detail-tab"
                  >
                    <form action="">
                      <h3>Locality Details</h3>
                      <hr className="divide" />
                      <div className="row justify-content-between">
                        <div className="col-lg-6 align-items-between">
                          <label className="form_label_listing">City </label>
                          <div className="dropdown-center drop__down">
                            <button
                              className="dropdown__btn"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              select
                              <i className="fa-solid fa-chevron-down" />
                            </button>
                            <ul className="dropdown-menu dropdown_menu_property ">
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  Chandigarh
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-lg-5">
                          <div className="locality__location">
                            <label
                              htmlFor="exampleInputEmail4"
                              className="form-label form_label_listing"
                            >
                              Locality
                            </label>
                            <input
                              type="email"
                              className="form-control listing__email"
                              placeholder="Enter location / society name"
                              id="exampleInputEmail4"
                              aria-describedby="emailHelp"
                            />
                            <button>
                              <i class="fa-solid fa-location-crosshairs"></i>{" "}
                              use current location
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center">
                        <div className="col-lg-6">
                          <div className="locality__location">
                            <label
                              htmlFor="exampleInputEmail5"
                              className="form-label form_label_listing"
                            >
                              Landmark
                            </label>
                            <input
                              type="text"
                              className="form-control listing__email"
                              placeholder="Eg. Evergreen street"
                              id="exampleInputEmail5"
                              aria-describedby="emailHelp"
                            />
                            <p>
                              this feild is not needed but this makes listing
                              faster and eaiser.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>

                      <div className="row justify-content-between">
                        <div className="col-lg-6 locality_map_listing d-flex">
                          <img src="/image/location.png" alt="" />
                          <div className="ms-2">
                            <h3>Mark location on map.</h3>
                            <p>Drag the map marker.</p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905969579!2d76.68831226897285!3d30.732401982900683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1702486365823!5m2!1sen!2sin"
                            width={925}
                            height={398}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane listing__pg"
                    id="pg-detail"
                    role="tabpanel"
                    aria-labelledby="pg-detail-tab"
                  >
                    <form action="">
                      <h3>Provide details about your place </h3>
                      <hr className="divide" />
                      <div className="row pg_detail_sec">
                        <h3>Place is available for *</h3>
                        <div className="col-lg-12 mt-2">
                          <input
                            className=""
                            type="radio"
                            id="male"
                            name="gender"
                            defaultValue="email"
                            style={{
                              marginLeft: "0px",
                            }}
                          />
                          <label className="ms-2" htmlFor="contactChoice1">
                            Male
                          </label>
                          <input
                            className=""
                            type="radio"
                            id="female"
                            name="gender"
                            defaultValue="phone"
                            style={{
                              marginLeft: "60px",
                            }}
                          />
                          <label className="ms-2" htmlFor="contactChoice2">
                            Female
                          </label>
                          <input
                            className=""
                            type="radio"
                            id="other"
                            name="gender"
                            defaultValue="mail"
                            style={{
                              marginLeft: "60px",
                            }}
                          />
                          <label className="ms-2" htmlFor="contactChoice3">
                            Anyone
                          </label>
                        </div>
                        <div className="col-lg-6 mt-4">
                          <label className="form_label_listing">
                            Preferred Guest{" "}
                          </label>
                          <div className="dropdown-center drop__down">
                            <button
                              className="dropdown__btn"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              select
                              <i className="fa-solid fa-chevron-down" />
                            </button>
                            <ul className="dropdown-menu dropdown_menu_property ">
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  Chandigarh
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                          <label
                            htmlFor="exampleInputEmail6"
                            className="form-label form_label_listing"
                          >
                            Available from
                          </label>
                          <div className="d-flex listing_rent_box align-items-center">
                            <input
                              type="date"
                              className=""
                              placeholder="Eg. WinterSpring Rental, etc..."
                              id="exampleInputEmail6"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                        <h3 className="mt-4 col-lg-12">Food Included *</h3>
                        <div className="col-lg-12 mt-2">
                          <input
                            className=""
                            type="radio"
                            id="food-yes"
                            name="food-ask"
                            defaultValue="email"
                            style={{
                              marginLeft: "0px",
                            }}
                          />
                          <label className="ms-2" htmlFor="food-yes">
                            Yes
                          </label>
                          <input
                            className=""
                            type="radio"
                            id="food-no"
                            name="food-ask"
                            defaultValue="phone"
                            style={{
                              marginLeft: "60px",
                            }}
                          />
                          <label className="ms-2" htmlFor="food-no">
                            No
                          </label>
                        </div>
                        <div className="col-lg-4 mt-4">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <label className="ms-3" htmlFor="vehicle1">
                            Breakfast
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-4">
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            defaultValue="Boat"
                          />
                          <label className="ms-3" htmlFor="vehicle3">
                            Lunch
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-4">
                          <input
                            type="checkbox"
                            id="vehicle2"
                            name="vehicle2"
                            defaultValue="Car"
                          />
                          <label className="ms-3" htmlFor="vehicle2">
                            Dinner
                          </label>
                          <br />
                        </div>
                        <h3 className="mt-4 col-lg-12">PG/Hostel Rules</h3>

                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (0).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            No Smoking
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (1).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            No Guardians Stay
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (2).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            No Drinking{" "}
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (3).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            No Non- Veg
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (4).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            No Girls Entry
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-6 pg__colleges mt-4 ">
                          <h2>Gated Closing Time</h2>
                          <label htmlFor="time-list">Gated Closing Time</label>
                          <input type="time" id="time-list" hidden />
                        </div>
                        <div className="col-lg-6 pg__colleges mt-4">
                          <h2>Near Universty/College</h2>
                          <input type="text" placeholder="Eg. CU, PU, etc..." />
                        </div>
                        <div className="col-lg-12 mt-4">
                          <label className="form_label_listing">
                            Any direction tip for your tenants
                          </label>
                          <textarea
                            name="description"
                            id="description"
                            placeholder="Write a few lines about your property something which is special and makes your property stand out. Please do not mention your contact details in any format  "
                            style={{
                              height: "120px",
                              width: "100%",
                              borderRadius: "10px",
                              border: "1px solid grey",
                              padding: "10px",
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane listing__pg"
                    id="amenities"
                    role="tabpanel"
                    aria-labelledby="amenities-tab"
                  >
                    <form action="">
                      <h3>Provide additional details about your place </h3>
                      <hr className="divide" />
                      <div className="row pg_list_services">
                        <h2 className="col-lg-12">Available Services</h2>
                        <div className="list__services col-lg-4">
                          <h3>Laundry</h3>
                          <div className="col-lg-12 mt-2">
                            <input
                              className=""
                              type="radio"
                              id="food-yes"
                              name="food-ask"
                              defaultValue="email"
                              style={{
                                marginLeft: "0px",
                              }}
                            />
                            <label className="ms-2" htmlFor="food-yes">
                              Yes
                            </label>
                            <input
                              className=""
                              type="radio"
                              id="food-no"
                              name="food-ask"
                              defaultValue="phone"
                              style={{
                                marginLeft: "60px",
                              }}
                            />
                            <label className="ms-2" htmlFor="food-no">
                              No
                            </label>
                          </div>
                        </div>
                        <div className="list__services col-lg-4">
                          <h3>Room Cleaning</h3>
                          <div className="col-lg-12 mt-2">
                            <input
                              className=""
                              type="radio"
                              id="food-yes"
                              name="food-ask"
                              defaultValue="email"
                              style={{
                                marginLeft: "0px",
                              }}
                            />
                            <label className="ms-2" htmlFor="food-yes">
                              Yes
                            </label>
                            <input
                              className=""
                              type="radio"
                              id="food-no"
                              name="food-ask"
                              defaultValue="phone"
                              style={{
                                marginLeft: "60px",
                              }}
                            />
                            <label className="ms-2" htmlFor="food-no">
                              No
                            </label>
                          </div>
                        </div>
                        <div className="list__services col-lg-4">
                          <h3>Warden Facility</h3>
                          <div className="col-lg-12 mt-2">
                            <input
                              className=""
                              type="radio"
                              id="food-yes"
                              name="food-ask"
                              defaultValue="email"
                              style={{
                                marginLeft: "0px",
                              }}
                            />
                            <label className="ms-2" htmlFor="food-yes">
                              Yes
                            </label>
                            <input
                              className=""
                              type="radio"
                              id="food-no"
                              name="food-ask"
                              defaultValue="phone"
                              style={{
                                marginLeft: "60px",
                              }}
                            />
                            <label className="ms-2" htmlFor="food-no">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 mt-4">
                          <label className="form_label_listing">
                            Any direction tip for your tenants
                          </label>
                          <textarea
                            name="description"
                            id="description"
                            placeholder="Eg. Take the road after amrita college, take the right after 300m.... "
                            style={{
                              height: "120px",
                              width: "100%",
                              borderRadius: "10px",
                              border: "1px solid grey",
                              padding: "10px",
                            }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row amenities__avail">
                        <h3 className="mt-4 col-lg-12">Available Amenities</h3>

                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (7).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            Common TV
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Frame 50.png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            Lift
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (8).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            Refrigerator
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (9).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            Mess
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (10).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            Wifi
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Group 85.png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            Power backup
                          </label>
                          <br />
                        </div>
                        <div className="col-lg-4 mt-3 d-flex align-items-center hostel__rules">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            defaultValue="Bike"
                          />
                          <img src="/image/Vector (11).png" alt="" />
                          <label className="ms-3" htmlFor="vehicle1">
                            Cooking Allowed
                          </label>
                          <br />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6 align-items-between">
                          <label className="form_label_listing">Parking </label>
                          <div className="dropdown-center drop__down">
                            <button
                              className="dropdown__btn"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Select Parking Type
                              <i
                                className="fa-solid fa-chevron-down"
                                style={{
                                  paddingLeft: "309px",
                                }}
                              />
                            </button>
                            <ul className="dropdown-menu dropdown_menu_property ">
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  Underground
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane listing__pg"
                    id="gallery"
                    role="tabpanel"
                    aria-labelledby="gallery-tab"
                  >
                    <form action="">
                      <h3>Upload photos & videos</h3>
                      <hr className="divide" />
                      <div className="d-flex flex-column align-items-center justify-content-center gallery_img_upload mb-4">
                        <img src="/image/camera.png" alt="" />
                        <div className="img_upload_head">
                          <h1>Add photos to get 5X more responses.</h1>
                          <p>90% tenants contact on properties with photos.</p>
                        </div>
                        <div>
                          <label htmlFor="img-upload">Add Photos</label>
                          <input
                            type="file"
                            id="img-upload"
                            name="gallery-img"
                            hidden
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center justify-content-center gallery_img_upload">
                        <img src="/image/movie.png" alt="" />
                        <div className="img_upload_head">
                          <h1>Add video to get 5X more responses.</h1>
                          <p>90% tenants contact on properties with videos.</p>
                        </div>
                        <div>
                          <label htmlFor="img-upload">Add Video</label>
                          <input
                            type="file"
                            id="img-upload"
                            name="gallery-img"
                            hidden
                            accept="video/*"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane listing__pg"
                    id="schedule"
                    role="tabpanel"
                    aria-labelledby="schedule-tab"
                  >
                    <form action="">
                      <h3>Schedule visit</h3>
                      <hr className="divide" />
                      <label className="form-label form_label_listing ">
                        Availability{" "}
                      </label>
                      <div className="d-flex">
                        <div className="d-flex avail__check">
                          <input
                            type="radio"
                            id="everyday"
                            name="fav_language"
                            defaultValue="HTML"
                            hidden
                          />
                          <label className="avail-box" htmlFor="everyday">
                            <img
                              src="/image/routine.png"
                              alt=""
                              style={{
                                width: "40px",
                                height: "40px",
                              }}
                            />
                            <h1>Everyday</h1>
                            <p>Mon-Sun</p>
                          </label>
                          <br />
                          <input
                            type="radio"
                            id="weekday"
                            name="fav_language"
                            defaultValue="CSS"
                            hidden
                          />
                          <label className="avail-box" htmlFor="weekday">
                            <img
                              src="/image/routine.png"
                              alt=""
                              style={{
                                width: "40px",
                                height: "40px",
                              }}
                            />
                            <h1>Everyday</h1>
                            <p>Mon-Sun</p>
                          </label>
                          <br />
                          <input
                            type="radio"
                            id="weekend"
                            name="fav_language"
                            defaultValue="JavaScript"
                            hidden
                          />
                          <label className="avail-box" htmlFor="weekend">
                            <img
                              src="/image/routine.png"
                              alt=""
                              style={{
                                width: "40px",
                                height: "40px",
                              }}
                            />
                            <h1>Everyday</h1>
                            <p>Mon-Sun</p>
                          </label>
                        </div>
                      </div>
                      <h3 className="mt-4">Select time schedule</h3>
                      <div className="row">
                        <div className="col-lg-6 align-items-between">
                          <label className="form_label_listing">
                            Start time
                          </label>
                          <div className="dropdown-center drop__down">
                            <button
                              className="dropdown_btn dropdownbtn_img d-flex align-items-center"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img
                                src="/image/start.png"
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  marginRight: "10px",
                                }}
                                alt=""
                              />
                              select
                              <i
                                className="fa-solid fa-chevron-down"
                                style={{
                                  paddingLeft: "380px",
                                }}
                              />
                            </button>
                            <ul
                              size="4"
                              className="dropdown-menu dropdown_menulisting_facing"
                            >
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  7:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  7:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  8:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  8:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  9:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  9:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  10:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  10:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  11:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  11:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  12:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  12:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  01:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  01:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  02:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  02:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  03:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  03:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  04:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  04:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  05:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  05:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  06:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  06:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  07:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  07:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  08:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  08:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  09:00 PM
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 align-items-between">
                          <label className="form_label_listing">End time</label>
                          <div className="dropdown-center drop__down">
                            <button
                              className="dropdown_btn dropdownbtn_img d-flex align-items-center"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img
                                src="/image/end.png"
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  marginRight: "10px",
                                }}
                                alt=""
                              />
                              select
                              <i
                                className="fa-solid fa-chevron-down"
                                style={{
                                  paddingLeft: "380px",
                                }}
                              />
                            </button>
                            <ul
                              size="4"
                              className="dropdown-menu dropdown_menulisting_facing"
                            >
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  7:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  7:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  8:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  8:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  9:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  9:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  10:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  10:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  11:00 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  11:30 AM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  12:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  12:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  01:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  01:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  02:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  02:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  03:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  03:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  04:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  04:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  05:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  05:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  06:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  06:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  07:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  07:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  08:00 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  08:30 PM
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item dropdown_item_listing"
                                  href="#"
                                >
                                  09:00 PM
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-between mt-4 ">
                        <div className="form-check ms-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                            style={{
                              width: "13px",
                              height: "13px",
                              marginTop: "5.5px",
                            }}
                          />
                          <label
                            style={{
                              fontSize: "1rem",
                              lineHeight: "1.5rem",
                              fontWeight: "600",
                              marginLeft: "5px",
                            }}
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Available all day
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="listing_foot_btns d-flex">
            <button className="listing_foot_btn-1">Back</button>
            <button className="listing_foot_btn-2">Save & Continue</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PGlist;
