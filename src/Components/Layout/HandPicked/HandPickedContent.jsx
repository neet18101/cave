import React from "react";
import "./HandPicked.css";
import { Link } from "react-router-dom";

const HandPickedContent = (props) => {
  const { title, description, image, alt, price, rating, product_url } = props;
  return (
    <div className="post-card">
      <div className="card">
        <Link to={`/${product_url}`}>
          <img src={image} alt={alt} className="img-fluid" />
          {/* <div className="cardImage__leftBadge">
            <div className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 text-white">
              Featured
            </div>
          </div> */}
        </Link>
        {/* <img src={image} alt={alt} className="img-fluid" /> */}
        {/* <div className="cardImage__leftBadge">
            <div className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 text-white">
              Featured
            </div>
          </div> */}

        <div className="card-body">
          <div className="row">
            <div className="col-lg-9">
              <Link to={`/${product_url}`}>
                <h6 className="card-title">{title}</h6>
                <div className="card-text">{description}</div>
              </Link>
            </div>
            <div className="col-lg-3">
              <div className=" d-flex justify-content-center gap-2">
                <span className="rating">{rating}</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M8.8902 1.12594C9.45654 0.244199 10.7453 0.2442 11.3116 1.12594L13.6407 4.75198C13.8355 5.05536 14.1372 5.27453 14.4859 5.3661L18.6542 6.46063C19.6678 6.72678 20.0661 7.95246 19.4025 8.76356L16.6736 12.0991C16.4453 12.3782 16.3301 12.7328 16.3508 13.0928L16.5979 17.3953C16.658 18.4415 15.6153 19.199 14.6389 18.8186L10.6233 17.254C10.2874 17.1231 9.91449 17.1231 9.57852 17.254L5.56297 18.8186C4.58651 19.199 3.54388 18.4415 3.60397 17.3953L3.85109 13.0928C3.87177 12.7328 3.75655 12.3782 3.52823 12.0991L0.799364 8.76356C0.13579 7.95246 0.53404 6.72678 1.54763 6.46063L5.71591 5.3661C6.06466 5.27453 6.36632 5.05536 6.56118 4.75198L8.8902 1.12594Z"
                    fill="#FFBF00"
                  />
                </svg>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <ul
                  className="list-inline"
                  style={{ paddingBottom: "0px", marginBottom: "0px" }}
                >
                  <li
                    className="list-inline-item"
                    style={{ paddingTop: "2px" }}
                  >
                    <div className="d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M20.6605 10.4761V7.86483C20.6605 6.31495 19.3924 5.04688 17.8426 5.04688H14.0853C13.362 5.04688 12.7045 5.32867 12.2067 5.77954C11.7088 5.32867 11.0513 5.04688 10.328 5.04688H6.57075C5.02087 5.04688 3.7528 6.31495 3.7528 7.86483V10.4761C3.17981 10.9928 2.81348 11.7348 2.81348 12.5614V18.1973H4.69211V16.3187H19.7212V18.1973H21.5998V12.5614C21.5998 11.7348 21.2335 10.9928 20.6605 10.4761ZM14.0853 6.92551H17.8426C18.3592 6.92551 18.7819 7.34821 18.7819 7.86483V9.74347H13.146V7.86483C13.146 7.34821 13.5687 6.92551 14.0853 6.92551ZM5.63143 7.86483C5.63143 7.34821 6.05413 6.92551 6.57075 6.92551H10.328C10.8446 6.92551 11.2673 7.34821 11.2673 7.86483V9.74347H5.63143V7.86483Z"
                          fill="#565656"
                        />
                      </svg>
                      <p className="">1</p>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M20.6605 10.4761V7.86483C20.6605 6.31495 19.3924 5.04688 17.8426 5.04688H14.0853C13.362 5.04688 12.7045 5.32867 12.2067 5.77954C11.7088 5.32867 11.0513 5.04688 10.328 5.04688H6.57075C5.02087 5.04688 3.7528 6.31495 3.7528 7.86483V10.4761C3.17981 10.9928 2.81348 11.7348 2.81348 12.5614V18.1973H4.69211V16.3187H19.7212V18.1973H21.5998V12.5614C21.5998 11.7348 21.2335 10.9928 20.6605 10.4761ZM14.0853 6.92551H17.8426C18.3592 6.92551 18.7819 7.34821 18.7819 7.86483V9.74347H13.146V7.86483C13.146 7.34821 13.5687 6.92551 14.0853 6.92551ZM5.63143 7.86483C5.63143 7.34821 6.05413 6.92551 6.57075 6.92551H10.328C10.8446 6.92551 11.2673 7.34821 11.2673 7.86483V9.74347H5.63143V7.86483Z"
                          fill="#565656"
                        />
                      </svg>
                      <p className="">1</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <span className="cardPrice">₹ {price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandPickedContent;
