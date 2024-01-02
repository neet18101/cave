import React, { useState } from "react";


function PGroom() {



    return (
        <>
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
                                        className="btn btn-outline-primary btn__outline__primary Listing__option "
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
                                        className="btn btn-outline-primary btn__outline__primary Listing__option "
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
                                        className="btn btn-outline-primary btn__outline__primary  Listing__option"
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
                                        className="btn btn-outline-primary btn__outline__primary Listing__option "
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
                                            className="btn btn-outline-primary btn__outline__primary Listing__option "
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
                                            className="btn btn-outline-primary btn__outline__primary Listing__option "
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
                                            className="btn btn-outline-primary btn__outline__primary  Listing__option"
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
                                            className="btn btn-outline-primary btn__outline__primary Listing__option "
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
                                        className="form-label form__label__listing"
                                    >
                                        Expected Deposit
                                    </label>
                                    <div
                                        className="d-flex listing__rent__box align-items-center"
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
                                        className="form-label form__label__listing"
                                    >
                                        Expected Deposit
                                    </label>
                                    <div
                                        className="d-flex listing__rent__box align-items-center"
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
        </>
    )
}

export default PGroom