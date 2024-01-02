import react, { useState } from 'react';

function PGlocality() {

    return (
        <>
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
                            <label className="form__label__listing">City </label>
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

                        <div className="col-lg-5">
                            <div className="locality__location">
                                <label
                                    htmlFor="exampleInputEmail4"
                                    className="form-label form__label__listing"
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
                                    className="form-label form__label__listing"
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
                        <div className="col-lg-6 locality__map__listing d-flex">
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
                                style={{ border: 0, width: "100%" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </form>
                
            </div>
        </>
    );
}

export default PGlocality;