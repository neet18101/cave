import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Property({
  saveNext,
  activeTab,
  handleTabClick,
  isLastTab,
  onChildDataChange,
}) {
  const params = useParams();
  console.log(params.id);
  const [selectedItem, setSelectedItem] = useState("Select");
  const [formData, setFormData] = useState({
    apartmentName: "",
    bhkType: "",
    totalFloor: "",
    floor: "",
    propertyAge: "",
    facing: "",
    builtUpArea: "",
    user_id: params.id,
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
        className="w-100 tab-pane listing__pg show container-fluid d-block"
        id="room-detail"
        role="tabpanel"
        aria-labelledby="room-detail-tab"
      >
        <h3>Property Details</h3>
        <hr className="divide" />
        <div className="mb-3">
          <label htmlFor="pg-name" className="form-label form__label__listing">
            Apartment Name
          </label>
          <input
            type="text"
            className="form-control"
            id="pg-name"
            placeholder="Eg. WinterSpring Rental, etc..."
            style={{ backgroundColor: "#f9fafc" }}
            value={formData.apartmentName}
            onChange={(e) => handleInputChange("apartmentName", e.target.value)}
          />
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 align-items-between">
            <label className="form__label__listing">Apartment Type </label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {formData.apartmentType || "select"}
                <i className="fa-solid fa-chevron-down" />
              </button>
              <ul className="dropdown-menu dropdown__menu__listing">
                {[
                  "Apartment",
                  "Independent House/Villa",
                  "Gated community villa",
                ].map((item) => (
                  <li key={item}>
                    <a
                      className="dropdown-item dropdown__item__listing"
                      onClick={() => handleInputChange("apartmentType", item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-items-between">
            <label className="form__label__listing">BHK Type </label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn__bhk"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {formData.bhkType ? formData.bhkType : "Select"}
                <i className="fa-solid fa-chevron-down" />
              </button>
              <ul className="dropdown-menu dropdown__menu__listing__bhk">
                {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "5+ BHK"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        className="dropdown-item dropdown__item__listing"
                        onClick={() => handleInputChange("bhkType", item)}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-between mt-3">
          <div className="col-lg-6">
            <div>
              <label
                htmlFor="exampleInputEmail3"
                className="form-label form__label__listing"
              >
                Floor
              </label>
              <input
                type="number"
                className="form-control listing__email"
                placeholder="Enter floor"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                onChange={(e) => handleInputChange("floor", e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div>
              <label
                htmlFor="exampleInputEmail2"
                className="form-label form__label__listing"
              >
                Total Floor
              </label>
              <input
                type="number"
                className="form-control listing__email"
                placeholder="Enter total floor"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                onChange={(e) =>
                  handleInputChange("totalFloor", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-between mt-3">
          <div className="mt-3 col-lg-6">
            <label
              htmlFor="pg-name"
              className="form-label form__label__listing"
            >
              Built up area{" "}
            </label>
            <input
              type="number"
              className="form-control listing__email"
              id="pg-name"
              onChange={(e) => handleInputChange("builtUpArea", e.target.value)}
              placeholder="area sqft."
            />
          </div>
          <div className="mt-3 col-lg-6">
            <label
              htmlFor="pg-name"
              className="form-label form__label__listing"
            >
              Near universty/college
            </label>
            <input
              type="text"
              className="form-control listing__email"
              id="pg-name"
              onChange={(e) => handleInputChange("universty/college", e.target.value)}
              placeholder="Eg. CU, PU, etc..."
            />
          </div>

          <div className="mt-3 col-lg-12 align-items-between">
            <label className="form__label__listing">Property age </label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {formData.propertyAge ? formData.propertyAge : "Select"}
                <i className="fa-solid fa-chevron-down" />
              </button>
              <ul className="dropdown-menu dropdown__menu__listing__property">
                {[
                  "Less than a year",
                  "1 to 3 years",
                  "5 to 10 years",
                  "More than 10 years",
                ].map((item) => (
                  <li key={item}>
                    <a
                      className="dropdown-item dropdown__item__listing"
                      onClick={() => handleInputChange("propertyAge", item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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

export default Property;
