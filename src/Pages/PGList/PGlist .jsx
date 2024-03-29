import Footer from "../../Components/Footer";
import { useState } from "react";
import FooterSection from "../../Components/Layout/FooterSection";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";
import PGamenities from "./PGamenities";
import PGroom from "./PGroom";
import PGgallery from "./PGgallery";
import PGpgDetails from "./PGpgDetails";
import PGlocality from "./PGlocality";
import PGschedule from "./PGschedule";

import "./Pg.css";

const PGlist = () => {

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
        <h3 className="listing__title">List PG</h3>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 p-2 justify-center">
            <div className="row listing__body">
              <div className="col-lg-2 col-md-2 col-sm-2 p-0">
                <ul
                  className="nav nav-pills mb-3 d-flex flex-column detail_menu_list"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="w-100 nav-link  list__link d-flex justify-content-start active"
                      id="room-detail-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#room-detail"
                      type="button"
                      role="tab"
                      aria-controls="room-detail"
                      aria-selected="true"
                    >
                      <img src="/image/Rectangle 10.png" alt />
                      Room Details
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="locality-detail-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#locality-detail"
                      type="button"
                      role="tab"
                      aria-controls="locality-detail"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 86.png" alt />
                      Locality details
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="pg-detail-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pg-detail"
                      type="button"
                      role="tab"
                      aria-controls="pg-detail"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 87.png" alt />
                      PG details
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="amenities-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#amenities"
                      type="button"
                      role="tab"
                      aria-controls="amenities"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 88.png" alt />
                      Amenities
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="gallery-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#gallery"
                      type="button"
                      role="tab"
                      aria-controls="gallery"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 89.png" alt />
                      Gallery
                    </button>
                  </li>

                  <li className="nav-item lisitngTop " role="presentation">
                    <button
                      className="nav-link  list__link d-flex justify-content-start"
                      id="schedule-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#schedule"
                      type="button"
                      role="tab"
                      aria-controls="amenities"
                      aria-selected="false"
                    >
                      <img src="/image/Rectangle 90.png" alt />
                      Schedule
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10  p-0">
                <div className="tab-content" id="pills-tabContent">

                  <PGroom />

                  <PGlocality />

                  <PGpgDetails />

                  <PGamenities />

                  <PGgallery />

                  <PGschedule />



                </div>
              </div>
            </div>
          </div>

          <div className="listing__foot__btns d-flex">
            <button className="listing__foot__btn-1">Back</button>
            <button className="listing__foot__btn-2">Save & Continue</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PGlist;
