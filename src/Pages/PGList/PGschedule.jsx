import React, { useState } from 'react'

function PGschedule() {

    return (
        <>
            <div
                className="tab-pane listing__pg"
                id="schedule"
                role="tabpanel"
                aria-labelledby="schedule-tab"
            >
                <form action="">
                    <h3>Schedule visit</h3>
                    <hr className="divide" />
                    <label className="form-label form__label__listing ">
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
                            <label className="form__label__listing">
                                Start time
                            </label>
                            <div className="dropdown-center drop__down">
                                <button
                                    className="dropdown__btn dropdownbtn__img d-flex align-items-center"
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
                                    className="dropdown-menu dropdown__menu__listing "
                                >
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            7:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            7:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            8:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            8:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            9:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            9:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            10:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            10:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            11:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            11:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            12:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            12:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            01:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            01:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            02:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            02:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            03:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            03:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            04:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            04:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            05:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            05:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            06:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            06:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            07:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            07:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            08:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            08:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            09:00 PM
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 align-items-between">
                            <label className="form__label__listing">End time</label>
                            <div className="dropdown-center drop__down">
                                <button
                                    className="dropdown__btn dropdownbtn_img d-flex align-items-center"
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
                                    className="dropdown-menu dropdown__menu__listing "
                                >
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            7:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            7:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            8:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            8:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            9:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            9:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            10:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            10:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            11:00 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            11:30 AM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            12:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            12:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            01:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            01:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            02:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            02:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            03:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            03:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            04:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            04:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            05:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            05:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            06:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            06:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            07:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            07:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            08:00 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
                                            href="#"
                                        >
                                            08:30 PM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item dropdown__item__listing"
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
        </>
    );
}

export default PGschedule;