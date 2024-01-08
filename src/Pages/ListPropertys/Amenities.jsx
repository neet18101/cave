import React, { useState } from "react";

function Amenities({ saveNext, activeTab, handleTabClick, onChildDataChange }) {
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
        className="tab-pane listing__pg d-block"
        id="amenities"
        role="tabpanel"
        aria-labelledby="amenities-tab"
      >
        <h3>Amenities</h3>
        <hr className="divide" />
        <div className="row justify-content-between mt-4">
          <div className="col-lg-4 align-items-center mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0">
            <label className="form__label__listing">Bathroom(s)</label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn__img d-flex align-items-center"
                style={{
                  height: "50px",
                }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/image/bathroom.png"
                  style={{
                    width: "32px",
                    height: "32px",
                    margin: "0px 10px",
                  }}
                  alt=""
                />
                {formData.bathroom ? formData.bathroom : "Select"}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    paddingLeft: "200px",
                  }}
                />
              </button>
              <ul className="dropdown-menu dropdown__menu__listing__bath">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <li>
                    <a
                      className="dropdown-item dropdown__item__listing"
                      onClick={() => handleInputChange("bathroom", item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 align-items-center mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0">
            <label className="form__label__listing">Balcony</label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn__img d-flex align-items-center"
                style={{
                  height: "50px",
                }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/image/download1.png"
                  style={{
                    width: "32px",
                    height: "32px",
                    margin: "0px 10px",
                  }}
                  alt=""
                />
                {formData.balcony ? formData.balcony : "select"}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    paddingLeft: "200px",
                  }}
                />
              </button>
              <ul className="dropdown-menu dropdown__menu__listing__balcony">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <li>
                    <a
                      className="dropdown-item dropdown__item__listing"
                      onClick={() => handleInputChange("balcony", item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 align-items-center mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0">
            <label className="form__label__listing">Water Supply</label>
            <div className="dropdown-center drop__down">
              <button
                className="dropdown__btn dropdown__btn__img d-flex align-items-center"
                style={{
                  height: "50px",
                }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/image/water-tap.png"
                  style={{
                    width: "32px",
                    height: "32px",
                    margin: "0px 10px",
                  }}
                  alt=""
                />
                {formData.waterSupply ? formData.waterSupply : "select"}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    paddingLeft: "200px",
                  }}
                />
              </button>
              <ul className="dropdown-menu dropdown__menu__listing__water">
                {["corporation", "borewell", "both"].map((item) => (
                  <li>
                    <a
                      className="dropdown-item dropdown__item__listing"
                      onClick={() => handleInputChange("waterSupply", item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row justify-content-between mt-4">
          <div
            className="col-lg-3 mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0 "
            style={{
              height: "50px",
            }}
          >
            <div className="amenities__box  d-flex justify-content-between">
              <img
                src="/image/dumbbell.png"
                alt=""
                style={{
                  height: "32px",
                  widows: "32px",
                }}
              />
              <p
                style={{
                  paddingBottom: "5px",
                  paddingTop: "15px",
                }}
              >

                GYM
              </p>
              <div className="amenities__btn amenities__btn0 d-flex mt-2 me-2">
                <input
                  type="radio"
                  id="gym-no0"
                  name="fav_language0"
                  defaultValue="gym-no"
                  checked={formData.gym === "No"}
                  onChange={() => handleInputChange("gym", "No")}
                  hidden
                />
                <label className=" gym__no0" htmlFor="gym-no0">
                  No
                </label>
                <br />
                <input
                  type="radio"
                  id="gym-yes0"
                  name="fav_language0"
                  defaultValue="gym-yes"
                  checked={formData.gym === "Yes"}
                  onChange={() => handleInputChange("gym", "Yes")}
                  hidden
                />
                <label className="gym__yes0 ms-1" htmlFor="gym-yes0">
                  Yes
                </label>
                <br />
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0"
            style={{
              height: "50px",
            }}
          >
            <div className="amenities__box d-flex justify-content-between">
              <img
                src="/image/no-meat.png"
                alt=""
                style={{
                  height: "32px",
                  widows: "32px",
                }}
              />
              <p
                style={{
                  paddingBottom: "5px",
                  paddingTop: "5px",
                }}
              >
                Non-veg <br /> allowed
              </p>
              <div className="amenities__btn amenities__btn1 d-flex mt-2 me-2">
                <input
                  type="radio"
                  id="gym-no1"
                  name="fav_language1"
                  defaultValue="gym-no"
                  checked={formData.non_veg === "No"}
                  onChange={() => handleInputChange("non_veg", "No")}
                  hidden
                />
                <label className=" gym__no1" htmlFor="gym-no1">
                  No
                </label>
                <br />
                <input
                  type="radio"
                  id="gym-yes1"
                  name="fav_language1"
                  checked={formData.non_veg === "Yes"}
                  onChange={() => handleInputChange("non_veg", "Yes")}
                  defaultValue="gym-yes"
                  hidden
                />
                <label className="gym__yes1 ms-1" htmlFor="gym-yes1">
                  Yes
                </label>
                <br />
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0"
            style={{
              height: "50px",
            }}
          >
            <div className="amenities__box d-flex justify-content-between">
              <img
                src="/image/guard.png"
                alt=""
                style={{
                  height: "32px",
                  widows: "32px",
                }}
              />
              <p
                style={{
                  paddingBottom: "5px",
                  paddingTop: "5px",
                }}
              >
                Gated <br />
                Security
              </p>
              <div className="amenities__btn amenities__btn2 d-flex mt-2 me-2">
                <input
                  type="radio"
                  id="gym-no2"
                  name="fav_language2"
                  defaultValue="gym-no"
                  checked={formData.gated_security === "No"}
                  onChange={() => handleInputChange("gated_security", "No")}
                  hidden
                />
                <label className=" gym__no2" htmlFor="gym-no2">
                  No
                </label>
                <br />
                <input
                  type="radio"
                  id="gym-yes2"
                  name="fav_language2"
                  defaultValue="gym-yes"
                  checked={formData.gated_security === "Yes"}
                  onChange={() => handleInputChange("gated_security", "Yes")}
                  hidden
                />
                <label className="gym__yes2 ms-1" htmlFor="gym-yes2">
                  Yes
                </label>
                <br />
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0"
            style={{
              height: "50px",
            }}
          >
            <div className="amenities__box d-flex justify-content-between">
              <img
                src="/image/smoking.png"
                alt=""
                style={{
                  height: "32px",
                  widows: "32px",
                }}
              />
              <p
                style={{
                  paddingBottom: "5px",
                  paddingTop: "5px",
                }}
              >
                Smoking <br />
                allowed
              </p>
              <div className="amenities__btn amenities__btn3 d-flex mt-2 me-2">
                <input
                  type="radio"
                  id="gym-no3"
                  name="fav_language3"
                  defaultValue="gym-no"
                  checked={formData.smoking === "No"}
                  onChange={() => handleInputChange("smoking", "No")}
                  hidden
                />
                <label className=" gym__no3" htmlFor="gym-no3">
                  No
                </label>
                <br />
                <input
                  type="radio"
                  id="gym-yes3"
                  name="fav_language3"
                  defaultValue="gym-yes"
                  checked={formData.smoking === "Yes"}
                  onChange={() => handleInputChange("smoking", "Yes")}
                  hidden
                />
                <label className="gym__yes3 ms-1" htmlFor="gym-yes3">
                  Yes
                </label>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-between mt-4">
          <div className="col-lg-6 mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0">
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
                {formData.property_available
                  ? formData.property_available
                  : "Select"}
                <i className="fa-solid fa-chevron-down" />
              </button>
              <ul
                size="4"
                className="dropdown-menu dropdown__menu__listing__facing"
              >
                {["East", "West", "North", "South"].map((item) => (
                  <li>
                    <a
                      className="dropdown-item dropdown__item__listing"
                      onClick={() =>
                        handleInputChange("property_available", item)
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 mb-3 mb-sm-3 mb-md-0 mb-lg-0 mb-xl-0">
            <label className="form__label__listing">
              Property available for{" "}
            </label>
            <div className="dropdown-center drop__down">
              <div
                className=" d-flex align-items-center dropdown__btn dropdown__btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/image/flag.png"
                  alt=""
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "25px",
                  }}
                />{" "}
                +91
                <input
                  type="number"
                  className="w-100"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    paddingLeft: "15px",
                  }}
                  placeholder="Secondary number"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-4 mb-5">
            <label className="form__label__listing">
              Any direction tip for your tenants
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Write a few lines about how to reach your property. Eg. Opposite to the Supermarket"
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
        <hr className="divide mb-4" />
        <h3> Select the available amenities</h3>

        <div className="row justify-content-between mt-4">
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download2.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Lift</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download3.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Internet Services</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download4.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Air Conditioner</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download5.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Club House</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download6.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Intercom</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download7.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Swimming Pool</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download8.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Children play area</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download9.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Fire safety</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download10.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Servant room</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download11.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Shopping center</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download12.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Gas pipeline</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download13.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Park</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download14.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Rain eater harvesting</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download15.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Sewage treatment plant</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download16.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>House keeping</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download17.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Power backup</p>
            </label>
          </div>
          <div className="mt-4 col-lg-6 d-flex align-items-center">
            <input type="checkbox" id="lift" className="cursor-pointer" />
            <label htmlFor="lift" className="d-flex amenities__checks">
              <img src="/image/download18.png" alt="" style={{
                width: "32px",
                height: "32px"
              }} />
              <p>Visitor parking</p>
            </label>
          </div>

        </div>
        <div className="listing__foot__btns d-flex flex-column align-items-center flex-sm-row">
          {activeTab !== 1 && (
            <button
              className="listing__foot__btn-1 mb-2"
              onClick={() => handleTabClick(activeTab - 1)}
            >
              Back
            </button>
          )}
          <button
            className="listing__foot__btn-2 mb-2"
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

export default Amenities;
