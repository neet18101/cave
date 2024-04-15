import React from "react";
import "./university.css";

function FindUniversity({ collegeData }) {
  // console.log(collegeData);
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="mt-5">
              <h1 className="text-center university__head">
                Find room near your university/college!
              </h1>
              <p className="text-center ">
                Discover Your Ideal Home: Find the Perfect Room Near Your
                University
              </p>

              <div className="mt-12  grid xl:grid-cols-5 gap-3 md:grid-cols-4 grid-cols-2 ">
                {collegeData &&
                  collegeData.map((data, index) => {
                    return (
                      <div
                        className="relative rounded-lg shadow-lg overflow-hidden  xl:w-64 xl:h-32 cursor-pointer isolate img-university border-1 border-deepBlue group "
                        key={index}
                      >
                        <img
                          src={data.image}
                          className="group-hover:scale-110 duration-500 ease-in-out w-full h-full object-cover img-zoom"
                        />
                        <p className="absolute findUniversity">{data.name}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FindUniversity;
