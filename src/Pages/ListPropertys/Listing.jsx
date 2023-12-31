import { useState } from "react";
import Footer from "../../Components/Footer";
import FooterSection from "../../Components/Layout/FooterSection";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";
import "./Listing.css";
import Property from "./Property";
import Locality from "./Locality";
import Rental from "./Rental";
import Amenities from "./Amenities";
import Gallery from "./Gallery";
import Schedule from "./Schedule";

const Listing = () => {
  // Dynamic Navpills
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    city: "",
    locality: "",
    landmark: "",
  });
  const tabsData = [
    {
      id: 1,
      label: "Property Details",
      content: "Content for Tab 1",
      image: "/image/Rectangle 10.png",
    },
    {
      id: 2,
      label: "Locality details",
      content: "Content for Tab 2",
      image: "/image/Rectangle 86.png",
    },
    {
      id: 3,
      label: "Rental details",
      content: "Content for Tab 3",
      image: "/image/Rectangle 87.png",
    },
    {
      id: 4,
      label: "Amenities",
      content: "Content for Tab 4",
      image: "/image/Rectangle 88.png",
    },
    {
      id: 5,
      label: "Gallery",
      content: "Content for Tab 5",
      image: "/image/Rectangle 89.png",
    },
    {
      id: 6,
      label: "Schedule",
      content: "Content for Tab 6",
      image: "/image/Rectangle 90.png",
    },
    // Add more tabs as needed
  ];
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSaveAndNext = () => {
    const nextTab = activeTab < tabsData.length ? activeTab + 1 : activeTab;
    setActiveTab(nextTab);
  };
  const isLastTab = activeTab === tabsData.length;
  const [parentData, setParentData] = useState();
  const [locality, setLocality] = useState();
  const [rental, setRental] = useState();

  const handleChildDataChange = (newData) => {
    // console.log(newData, "newData");
    setParentData(newData);
    localStorage.setItem("parentData", JSON.stringify(newData));
  };
  const handleLocalityChange = (newdata) => {
    setLocality(newdata);
    localStorage.setItem("locality", JSON.stringify(newdata));
  };
  const handleRentalChange = (newdata) => {
    localStorage.setItem("rental", JSON.stringify(newdata));
    setRental(newdata);
  };
  const handleAmenitiesChange = (newdata) => {
    localStorage.setItem("amenities", JSON.stringify(newdata));
  };
  const handleGalleryChange = (newdata) => {
    localStorage.setItem("gallery", JSON.stringify(newdata));
  };
  const handleScheduleChange = (newdata) => {
    localStorage.setItem("schedule", JSON.stringify(newdata));
  };

  return (
    <>
      <SubNavbar />
      <section className="container-fluid listing">
        <h3 className="listing__title">List Property</h3>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 p-2 justify-center">
            <div className="row listing__body">
              <div className="col-lg-2 col-md-3 col-sm-3 p-0">
                <div className="row flex-column">
                  <ul
                    className=" col-lg-6 nav nav-pills mb-3 d-flex flex-column detail__menu__list"
                    id="pills-tab"
                    role="tablist"
                    style={{ width: "100%" }}
                  >
                    {tabsData.map((tab, index) => (
                      <li
                        className="nav-item lisitngTop"
                        key={index}
                        role="presentation"
                      >
                        <button
                          className={`w-100 nav-link  list__link d-flex justify-content-start  ${
                            activeTab === tab.id ? "active" : ""
                          }`}
                          id="room-detail-tab"
                          data-bs-toggle="pill"
                          //   data-bs-target={`#room-detail${tab.id}`}
                          type="button"
                          role="tab"
                          aria-controls="room-detail"
                          aria-selected="true"
                          onClick={() => handleTabClick(tab.id)}
                        >
                          <img src={tab?.image} alt />
                          {tab?.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="col-lg-6"></div>
                </div>
              </div>
              <div className="col-lg-10 col-md-9 col-sm-9  p-0">
                <div className="tab-content" id="pills-tabContent">
                  {activeTab === 1 && (
                    <Property
                      onChildDataChange={handleChildDataChange}
                      activeTab={activeTab}
                      isLastTab={isLastTab}
                      saveNext={handleSaveAndNext}
                      handleTabClick={handleTabClick}
                    />
                  )}
                  {activeTab === 2 && (
                    <Locality
                      onChildDataChange={handleLocalityChange}
                      activeTab={activeTab}
                      saveNext={handleSaveAndNext}
                      isLastTab={isLastTab}
                      handleTabClick={handleTabClick}
                    />
                  )}
                  {activeTab === 3 && (
                    <Rental
                      onChildDataChange={handleRentalChange}
                      activeTab={activeTab}
                      saveNext={handleSaveAndNext}
                      isLastTab={isLastTab}
                      handleTabClick={handleTabClick}
                    />
                  )}
                  {activeTab === 4 && (
                    <Amenities
                      onChildDataChange={handleAmenitiesChange}
                      activeTab={activeTab}
                      isLastTab={isLastTab}
                      saveNext={handleSaveAndNext}
                      handleTabClick={handleTabClick}
                    />
                  )}
                  {activeTab === 5 && (
                    <Gallery
                      onChildDataChange={handleGalleryChange}
                      activeTab={activeTab}
                      saveNext={handleSaveAndNext}
                      isLastTab={isLastTab}
                      handleTabClick={handleTabClick}
                    />
                  )}
                  {activeTab === 6 && (
                    <Schedule
                      onChildDataChange={handleScheduleChange}
                      activeTab={activeTab}
                      isLastTab={isLastTab}
                      saveNext={handleSaveAndNext}
                      handleTabClick={handleTabClick}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="listing__foot__btns d-flex">
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
              onClick={handleSaveAndNext}
            >
              Save & Next
            </button>
          </div> */}
        </div>
      </section>
      <FooterSection />
      <Footer />
    </>
  );
};

export default Listing;
