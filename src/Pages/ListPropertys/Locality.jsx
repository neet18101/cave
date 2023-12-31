import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Locality({ saveNext, activeTab, handleTabClick, onChildDataChange }) {
  // const [selectedItem, setSelectedItem] = useState("Select");
  const params = useParams();
  const [formData, setFormData] = useState({
    city: "",
    locality: "",
    landmark: "",
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };
  const handleSubmit = () => {
    onChildDataChange(formData);
  };
  return (
    <>
      <div
        className="tab-pane listing__pg d-block"
        role="tabpanel"
        aria-labelledby="locality-detail-tab"
      >
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
                {formData.city ? formData.city : "Select"}
                <i className="fa-solid fa-chevron-down" />
              </button>
              <ul className="dropdown-menu dropdown__menu__listing">
                {["Chandigarh"].map((item) => (
                  <li key={item}>
                    <a
                      className="dropdown-item dropdown__item__listing"
                      onClick={() => handleInputChange("city", item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
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
                type="text"
                className="form-control listing__email"
                placeholder="Enter location / society name"
                id="exampleInputEmail4"
                aria-describedby="emailHelp"
                value={formData.locality}
                onChange={(e) => handleInputChange("locality", e.target.value)}
              />
              <button>
                <i class="fa-solid fa-location-crosshairs"></i> use current
                location
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
                value={formData.landmark}
                onChange={(e) => handleInputChange("landmark", e.target.value)}
              />
              <p>
                this feild is not needed but this makes listing faster and
                eaiser.
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
              width={987}
              height={398}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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

export default Locality;
