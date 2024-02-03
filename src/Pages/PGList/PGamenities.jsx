import react, { useState } from 'react';

function PGamenities() {
    const [formData, setFormData] = useState({
        bathroom: "",
        balcony: "",
        waterSupply: "",
        gym: "",
        non_veg: "",
        gated_security: "",
        smoking: "",
        property_available: "",
        seconderyNumber: "",
        anyDirection: "",
    });

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };
    // const handleInputChange = (item) => {
    //   setSelectedItem(item);
    // };
    const handleSubmit = () => {
        onChildDataChange(formData);
    };
    return (
        <>
            <div
                className="tab-pane listing__pg"
                id="amenities"
                role="tabpanel"
                aria-labelledby="amenities-tab"
            >
                <form action="">
                    <h3>Provide additional details about your place </h3>
                    <hr className="divide" />
                    <div className="row pg__list__services">
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
                            <label className="form__label__listing">
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
                            <label className="form__label__listing">Parking </label>
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
                                <ul className="dropdown-menu dropdown__menu__property ">
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
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
        </>
    );
}

export default PGamenities;