import React, { useState } from "react";

function Rental({ saveNext, activeTab, handleTabClick, onChildDataChange }) {
  const [formData, setFormData] = useState({
    propertyAvailable: "",
    expectRent: "",
    expectedDeposite: "",
    rentNegotial: "",
    monthlyMaintenance: "",

    availableFrom: "",
    preferredTenant: "",
    furnishing: "",
    parking: "",
  });
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleSubmit = () => {
    onChildDataChange(formData);
  };
  return (
    <>
      <div
        className="tab-pane listing__pg d-block"
        id="pg-detail"
        role="tabpanel"
        aria-labelledby="pg-detail-tab"
      >
        <h3>Rental details</h3>
        <hr className="divide" />
        <div className="row justify-content-start">
          <div className="col-lg-6 align-items-between">
            <label className="form__label__listing">
              Property available for{" "}
            </label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {formData.propertyAvailable
                  ? formData.propertyAvailable
                  : "Select"}
                <i className="fa-solid fa-chevron-down" />
              </button>
              <ul
                size="4"
                className="dropdown-menu dropdown__menu__listing__facing"
              >
                {[" North", " South", " East", " West"]?.map((data, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="dropdown-item dropdown__item__listing"
                        onClick={() =>
                          handleInputChange("propertyAvailable", data)
                        }
                      >
                        {data}
                      </a>
                    </li>
                  );
                })}
                {/* <li>
                  <a className="dropdown-item dropdown__item__listing" href="#">
                    North
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="row justify-content-between mt-4">
          <div className="col-lg-6">
            <label
              htmlFor="exampleInputEmail6"
              className="form-label form__label__listing"
            >
              Expected Rent
            </label>
            <div className="d-flex listing__rent__box align-items-center">
              <p>₹</p>
              {/* <input
                type="text"
                className="form-control listing__email"
                placeholder="Enter location / society name"
                id="exampleInputEmail4"
                aria-describedby="emailHelp"
                
              /> */}
              <input
                type="number"
                className=""
                placeholder="Eg. WinterSpring Rental, etc..."
                id="exampleInputEmail6"
                aria-describedby="emailHelp"
                value={formData.expectRent}
                onChange={(e) =>
                  handleInputChange("expectRent", e.target.value)
                }
              />
              <p>/month</p>
            </div>
          </div>
          <div className="col-lg-6">
            <label
              htmlFor="exampleInputEmail6"
              className="form-label form__label__listing"
            >
              Expected Deposit
            </label>
            <div className="d-flex listing__rent__box align-items-center">
              <p>₹</p>
              <input
                type="number"
                className=""
                placeholder="Eg. WinterSpring Rental, etc..."
                id="exampleInputEmail6"
                aria-describedby="emailHelp"
                value={formData.expectedDeposite}
                onChange={(e) =>
                  handleInputChange("expectedDeposite", e.target.value)
                }
              />
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
              value={formData.rentNegotial}
              onChange={(e) =>
                handleInputChange("rentNegotial", e.target.value)
              }
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
              Rent Negotiable
            </label>
          </div>
        </div>

        <div className="row justify-content-start mt-4">
          <div className="col-lg-6 align-items-between">
            <label className="form__label__listing">Monthly Maintenance</label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {formData.monthlyMaintenance
                  ? formData.monthlyMaintenance
                  : "Select"}
                <i className="fa-solid fa-chevron-down" />
              </button>
              <ul
                size="4"
                className="dropdown-menu dropdown__menu__listing__facing"
              >
                {["Maintenance Included", "Maintenance Extra"]?.map(
                  (data, index) => {
                    return (
                      <li key={index}>
                        <a
                          className="dropdown-item dropdown__item__listing"
                          onClick={() =>
                            handleInputChange("monthlyMaintenance", data)
                          }
                        >
                          {data}
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="row justify-content-between mt-4">
          <div className="col-lg-6 align-items-between">
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
                value={formData.availableFrom}
                onChange={(e) =>
                  handleInputChange("availableFrom", e.target.value)
                }
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="col-lg-6 align-items-between">
            <label className="form__label__listing">Preferred tenants</label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn__img d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/image/tnant4.png"
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "10px",
                  }}
                  alt=""
                />
                {formData.preferredTenant ? formData.preferredTenant : "Select"}
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
                {["Doesn't matter", "Bachelors", "Students"]?.map(
                  (data, index) => {
                    return (
                      <li key={index}>
                        <a
                          className="dropdown-item dropdown__item__listing"
                          onClick={() =>
                            handleInputChange("preferredTenant", data)
                          }
                        >
                          {" "}
                          {data}
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="row justify-content-between mt-4">
          <div className="col-lg-6 align-items-center">
            <label className="form__label__listing">Furnishing</label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn__img d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/image/tnant5.png"
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "10px",
                  }}
                  alt=""
                />
                {formData.furnishing ? formData.furnishing : "Select"}
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
                {["Fully-furnished", "Semi-furnished", "Unfurnished"]?.map(
                  (data, index) => {
                    return (
                      <li key={index}>
                        <a
                          className="dropdown-item dropdown__item__listing"
                          onClick={() => handleInputChange("furnishing", data)}
                        >
                          {data}
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-items-center">
            <label className="form__label__listing">Parking</label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn__img d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/image/tnant6.png"
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "10px",
                  }}
                  alt=""
                />
                {formData.parking ? formData.parking : "Select"}
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
                {["Car", "Bike", "Both", "None"]?.map((data, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="dropdown-item dropdown__item__listing"
                        onClick={() => handleInputChange("parking", data)}
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

        <div className="mt-12 col-lg-12">
          <label className="form__label__listing">Parking</label>
          <textarea
            name="description"
            id="description"
            placeholder="Write a few lines about your property something which is special and makes your property stand out. Please do not mention your contact details in any format."
            style={{
              height: "120px",
              width: "100%",
              borderRadius: "10px",
              border: "1px solid grey",
              padding: "10px",
            }}
          ></textarea>
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
          <button
            className="listing__foot__btn-2"
            onClick={() => {
              saveNext();
              handleSubmit();
            }}
          >
            Save & Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Rental;
