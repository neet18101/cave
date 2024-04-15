import React, { useEffect, useState } from "react";
import Header from "../Components/Layout/Header/Header";
import Testing from "./Testing";
import Featured from "../Components/Layout/Featured/Featured";
import HandPicked from "../Components/Layout/HandPicked/HandPicked";
import FooterSection from "../Components/Layout/FooterSection";
import Footer from "../Components/Footer";
import FindUniversity from "../Components/Layout/finduniversity/FindUniversity";
import Specification from "../Components/Layout/Specification/Specification";
import { homeService } from "../_helper/HomeService";

const Home = () => {
  const [collegeData, setCollegeData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Function to fetch data from the home page
    async function fetchData() {
      try {
        setLoading(true);
        // Call the getAllCollege function to get data from the home page
        const response = await homeService.getAllCollege();

        // Set the fetched data in state
        setCollegeData(response.data.finalData);
        setLoading(false);
      } catch (error) {
        // Handle errors
        setError(error);
        setLoading(false);
      }
    }

    // Call the fetch function when the component mounts
    fetchData();

    // Clean-up function (optional)
    return () => {
      // You can perform clean-up actions here if necessary
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  console.log();
  return (
    <>
      <Header />
      <FindUniversity collegeData={collegeData && collegeData[0]?.findbynear} />
      <Featured featuredData={collegeData && collegeData[0]?.featured} />
      <HandPicked handPicked={collegeData && collegeData[0]?.handPicked} />
      <Specification />
      <FooterSection />
      <Footer />
    </>
  );
};

export default Home;
