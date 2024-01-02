import react, { useState } from 'react';

function PGpgDetails() {
    
    return (
        <>
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
                            <label className="form__label__listing">
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
                                <ul className="dropdown-menu dropdown__menu__property ">
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
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
                                className="form-label form__label__listing"
                            >
                                Available from
                            </label>
                            <div className="d-flex listing__rent__box align-items-center">
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
                            <label className="form__label__listing">
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
        </>
    );
}

export default PGpgDetails;