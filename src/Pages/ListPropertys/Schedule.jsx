import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Schedule({
  saveNext,
  activeTab,
  handleTabClick,
  isLastTab,
  onChildDataChange,
}) {
  const param = useParams();
  const [formData, setFormData] = useState({
    availability: "",
    starttime: "",
    endtime: "",
    user_id: param.id,
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
  console.log(isLastTab);

  return (
    <>
      <div
        className="tab-pane listing__pg d-block"
        id="schedule"
        role="tabpanel"
        aria-labelledby="schedule-tab"
      >
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
              checked={formData.availability === "mon-sun"}
              onChange={() => handleInputChange("availability", "mon-sun")}
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
              checked={formData.availability === "mon-fri"}
              onChange={() => handleInputChange("availability", "mon-fri")}
              hidden
            />
            <label className="avail-box" htmlFor="weekday">
              <img
                src="/image/weekday.png"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <h1>Weekday</h1>
              <p>Mon-Fri</p>
            </label>
            <br />
            <input
              type="radio"
              id="weekend"
              name="fav_language"
              checked={formData.availability === "sat-sun"}
              onChange={() => handleInputChange("availability", "sat-sun")}
              hidden
            />
            <label className="avail-box" htmlFor="weekend">
              <img
                src="/image/weekend.png"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <h1>Weekend</h1>
              <p>Sat-Sun</p>
            </label>
          </div>
        </div>
        <h3 className="mt-4">Select time schedule</h3>
        <div className="row">
          <div className="col-lg-6 align-items-between">
            <label className="form__label__listing">Start time</label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn__img d-flex align-items-center"
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
                {formData.starttime ? formData.starttime : "Select time"}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    paddingLeft: "380px",
                  }}
                />
              </button>
              <ul
                size="4"
                className="dropdown-menu dropdown__menu__listing__facing"
              >
                {[
                  "7:00 AM",
                  "7:30 AM",
                  "8:00 AM",
                  "8:30 AM",
                  "9:00 AM",
                  "9:30 AM",
                  "10:00 AM",
                  "10:30 AM",
                  "11:00 AM",
                  "11:30 AM",
                  "12:00 PM",
                  "12:30 PM",
                  "01:00 PM",
                  "01:30 PM",
                  "02:00 PM",
                  "02:30 PM",
                  "03:00 PM",
                  "03:30 PM",
                  "04:00 PM",
                  "04:30 PM",
                  "05:00 PM",
                  "05:30 PM",
                  "06:00 PM",
                  "06:30 PM",
                  "07:00 PM",
                  "07:30 PM",
                  "08:00 PM",
                  "08:30 PM",
                  "09:00 PM",
                ].map((data , index) => {
                  return (
                    <li key={index}>
                      <a
                        className="dropdown-item dropdown__item__listing"
                        onClick={() => handleInputChange("starttime", data)}
                      >
                        {data}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-items-between">
            <label className="form__label__listing">End time</label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn__img d-flex align-items-center"
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
                {formData.endtime ? formData.endtime : "Select Time"}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    paddingLeft: "380px",
                  }}
                />
              </button>
              <ul
                size="4"
                className="dropdown-menu dropdown__menu__listing__facing"
              >
                {[
                  "7:00 AM",
                  "7:30 AM",
                  "8:00 AM",
                  "8:30 AM",
                  "9:00 AM",
                  "9:30 AM",
                  "10:00 AM",
                  "10:30 AM",
                  "11:00 AM",
                  "11:30 AM",
                  "12:00 PM",
                  "12:30 PM",
                  "01:00 PM",
                  "01:30 PM",
                  "02:00 PM",
                  "02:30 PM",
                  "03:00 PM",
                  "03:30 PM",
                  "04:00 PM",
                  "04:30 PM",
                  "05:00 PM",
                  "05:30 PM",
                  "06:00 PM",
                  "06:30 PM",
                  "07:00 PM",
                  "07:30 PM",
                  "08:00 PM",
                  "08:30 PM",
                  "09:00 PM",
                ].map((data) => {
                  return (
                    <li>
                      <a
                        className="dropdown-item dropdown__item__listing"
                        onClick={() => handleInputChange("endtime", data)}
                      >
                        {data}
                      </a>
                    </li>
                  );
                })}
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
        <div className="listing__foot__btns d-flex">
          {activeTab !== 1 && (
            <button
              className="listing__foot__btn-1"
              onClick={() => handleTabClick(activeTab - 1)}
            >
              Back
            </button>
          )}
          {isLastTab ? (
            <button className="listing__foot__btn-2" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <button
              className="listing__foot__btn-2"
              onClick={() => {
                saveNext();
                handleSubmit();
              }}
            >
              Save & Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Schedule;
