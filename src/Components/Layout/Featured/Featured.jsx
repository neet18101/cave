import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { FeaturedContent } from "./FeaturedContent";
import "./Featured.css";

const Featured = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 1, // Number of slides to show at once
      spaceBetween: 20,
      navigation: {
        nextEl: ".Arrow-next",
        prevEl: ".Arrow-prev",
      },
      loop: true,
      // Responsive breakpoints
      breakpoints: {
        // When the viewport width is 575px or smaller
        575: {
          slidesPerView: 1, // Show only 1 slide
        },
        // When the viewport width is 768px or smaller
        768: {
          slidesPerView: 2, // Show 2 slides
        },
        // When the viewport width is 1024px or smaller
        1024: {
          slidesPerView: 3, // Back to showing 3 slides
        },
      },
    });
  }, []);
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current;

    if (swiper) {
      swiper.on("slideChange", () => {
        // Check if it's the first slide
        if (swiper.isBeginning) {
          document.querySelector(".Arrow-prev").classList.add("gray-button");
        } else {
          document.querySelector(".Arrow-prev").classList.remove("gray-button");
        }

        // Check if it's the last slide
        if (swiper.isEnd) {
          document.querySelector(".Arrow-next").classList.add("purple-button");
        } else {
          document
            .querySelector(".Arrow-next")
            .classList.remove("purple-button");
        }
      });
    }
  }, []);

  const Products = [
    {
      id: 1,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 2,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 3,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 4,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 5,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 6,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 7,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 8,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
  ];

  return (
    <>
      {/* <section className='FeaturedSection'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">





                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </section> */}

      <div
        className="container-fluid
            "
      >
        <div className="post-box">
          <div className="post-heading">
            <div className="heading-box">
              <h2 className="second-heading">Featured</h2>
              <div className="pagination-slide">
                <p className="swiper-paginations"></p>
                <div className="bs-icons">
                  <ArrowLeftIcon
                    fontSize="large"
                    className="Arrow-prev"
                    onClick={slidePrev}
                    style={{ color: "#DEDEDE" }}
                  />
                  <ArrowRightIcon
                    fontSize="large"
                    className="Arrow-next"
                    onClick={slideNext}
                    style={{ color: "#5E17EB " }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="post-conatin">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {Products.map((item) => {
                  return (
                    <div className="swiper-slide" key={item.id}>
                      <FeaturedContent
                        key={item.id}
                        image={item.img}
                        title={item.name}
                        description={item.description}
                        alt={item.name}
                      />
                    </div>
                  );
                })}
              </div>
              {/* <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
