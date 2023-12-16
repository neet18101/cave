import React from "react";
import SubNavbar from "../../Components/Layout/Header/SubNavbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./ProductDetails.css";
import HandPicked from "../../Components/Layout/HandPicked/HandPicked";
import ProductDetailBottomCard from "./ProductDetailBottomCard";
import Footer from "../../Components/Footer";
const ProductDetails = () => {
  return (
    <>
      <SubNavbar />
      <div className="contaier-fluid mt-4">
        <div className="row">
          <div className="col-lg-12 text-left">
            <p style={{ padding: "0px 40px", color: "#555555" }}>
              {" "}
              <ArrowBackIcon /> Back to Search
            </p>
          </div>
        </div>
        <div className="row" style={{ padding: "0px 40px" }}>
          <div className="col-lg-12 mt-3">
            <h3
              className="text-left"
              style={{
                fontSize: "21px",
                fontWeight: "500",
              }}
            >
              Standalone Building, Sector 5, bhagwan mahavir marg near Rajiv
              Gandhi
            </h3>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline mt-3 d-flex align-items-center">
              <li
                className="list-inline-item d-flex"
                style={{
                  color: "#000",
                  padding: "3px 10px",
                  fontSize: "16px",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M3.49302 3.6466C3.49308 3.37369 3.58819 3.10932 3.76199 2.89892C3.93579 2.68851 4.17744 2.54521 4.44543 2.49362C4.71341 2.44202 4.991 2.48537 5.2305 2.61621C5.46999 2.74705 5.65645 2.95721 5.75783 3.21059L5.86126 3.46774C5.41833 3.79159 5.07495 4.23302 4.87001 4.74201C4.57857 5.45644 4.57342 6.25565 4.85564 6.97377C4.88216 7.04091 4.92189 7.10203 4.97249 7.15351C5.02308 7.20499 5.08351 7.24577 5.15018 7.27345C5.21684 7.30112 5.28839 7.31511 5.36057 7.31459C5.43275 7.31407 5.50409 7.29906 5.57035 7.27043L9.85143 5.42727C9.97996 5.37202 10.082 5.26895 10.1358 5.13986C10.1897 5.01076 10.1913 4.86577 10.1402 4.73554C10.0033 4.38217 9.79732 4.05961 9.53439 3.78669C9.27145 3.51376 8.95679 3.29594 8.60877 3.14594C8.04966 2.90602 7.42695 2.85753 6.83744 3.00803L6.75842 2.81049C6.56413 2.32449 6.20662 1.92135 5.74734 1.67036C5.28805 1.41936 4.75568 1.33619 4.24172 1.43514C3.72777 1.53409 3.26433 1.80898 2.93107 2.21256C2.5978 2.61614 2.41553 3.1232 2.41557 3.6466V8.57774H2.23599C2.09311 8.57774 1.95609 8.6345 1.85506 8.73553C1.75402 8.83656 1.69727 8.97359 1.69727 9.11647C1.69727 9.25935 1.75402 9.39637 1.85506 9.49741C1.95609 9.59844 2.09311 9.6552 2.23599 9.6552H2.41557V9.91019C2.41557 10.1796 2.41557 10.3376 2.42706 10.5136C2.52906 12.1204 3.39677 13.6037 4.65523 14.5734C4.64505 14.5892 4.6357 14.6055 4.62722 14.6223L3.90892 16.0589C3.84641 16.1865 3.8369 16.3337 3.88246 16.4684C3.92802 16.6031 4.02495 16.7142 4.15213 16.7777C4.27932 16.8412 4.42644 16.8519 4.56145 16.8074C4.69645 16.7629 4.8084 16.6668 4.87288 16.5401L5.5682 15.1502C6.14691 15.4457 6.77515 15.632 7.42142 15.6997C7.5974 15.7177 7.70443 15.7213 7.88688 15.7284H7.8919C8.42345 15.7486 8.9435 15.7608 9.41902 15.7608C9.89453 15.7608 10.4146 15.7486 10.9461 15.7284H10.9512C11.1336 15.7213 11.2413 15.7177 11.4166 15.6997C12.0629 15.632 12.6911 15.4457 13.2698 15.1502L13.9652 16.5408C13.9968 16.6041 14.0406 16.6606 14.0941 16.7069C14.1475 16.7533 14.2096 16.7887 14.2767 16.8111C14.3439 16.8334 14.4147 16.8424 14.4853 16.8374C14.5559 16.8324 14.6248 16.8135 14.6881 16.7818C14.7514 16.7502 14.8079 16.7064 14.8542 16.6529C14.9006 16.5995 14.936 16.5374 14.9584 16.4703C14.9807 16.4031 14.9897 16.3322 14.9846 16.2617C14.9796 16.1911 14.9608 16.1222 14.9291 16.0589L14.2108 14.6223C14.2025 14.6055 14.1934 14.5892 14.1835 14.5734C15.4413 13.6037 16.3097 12.1197 16.4117 10.5136C16.4225 10.3376 16.4225 10.1796 16.4225 9.91019V9.8829C16.4225 9.8398 16.4225 9.79455 16.4196 9.7536C16.4175 9.72068 16.4142 9.68785 16.4095 9.6552H16.602C16.7449 9.6552 16.8819 9.59844 16.983 9.49741C17.084 9.39637 17.1408 9.25935 17.1408 9.11647C17.1408 8.97359 17.084 8.83656 16.983 8.73553C16.8819 8.6345 16.7449 8.57774 16.602 8.57774H3.49302V3.6466Z"
                    fill="#565656"
                  />
                </svg>{" "}
                3 Bathroom
              </li>
              <li
                className="list-inline-item d-flex"
                style={{
                  color: "#000",
                  padding: "3px 10px",
                  fontSize: "16px",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M3.49302 3.6466C3.49308 3.37369 3.58819 3.10932 3.76199 2.89892C3.93579 2.68851 4.17744 2.54521 4.44543 2.49362C4.71341 2.44202 4.991 2.48537 5.2305 2.61621C5.46999 2.74705 5.65645 2.95721 5.75783 3.21059L5.86126 3.46774C5.41833 3.79159 5.07495 4.23302 4.87001 4.74201C4.57857 5.45644 4.57342 6.25565 4.85564 6.97377C4.88216 7.04091 4.92189 7.10203 4.97249 7.15351C5.02308 7.20499 5.08351 7.24577 5.15018 7.27345C5.21684 7.30112 5.28839 7.31511 5.36057 7.31459C5.43275 7.31407 5.50409 7.29906 5.57035 7.27043L9.85143 5.42727C9.97996 5.37202 10.082 5.26895 10.1358 5.13986C10.1897 5.01076 10.1913 4.86577 10.1402 4.73554C10.0033 4.38217 9.79732 4.05961 9.53439 3.78669C9.27145 3.51376 8.95679 3.29594 8.60877 3.14594C8.04966 2.90602 7.42695 2.85753 6.83744 3.00803L6.75842 2.81049C6.56413 2.32449 6.20662 1.92135 5.74734 1.67036C5.28805 1.41936 4.75568 1.33619 4.24172 1.43514C3.72777 1.53409 3.26433 1.80898 2.93107 2.21256C2.5978 2.61614 2.41553 3.1232 2.41557 3.6466V8.57774H2.23599C2.09311 8.57774 1.95609 8.6345 1.85506 8.73553C1.75402 8.83656 1.69727 8.97359 1.69727 9.11647C1.69727 9.25935 1.75402 9.39637 1.85506 9.49741C1.95609 9.59844 2.09311 9.6552 2.23599 9.6552H2.41557V9.91019C2.41557 10.1796 2.41557 10.3376 2.42706 10.5136C2.52906 12.1204 3.39677 13.6037 4.65523 14.5734C4.64505 14.5892 4.6357 14.6055 4.62722 14.6223L3.90892 16.0589C3.84641 16.1865 3.8369 16.3337 3.88246 16.4684C3.92802 16.6031 4.02495 16.7142 4.15213 16.7777C4.27932 16.8412 4.42644 16.8519 4.56145 16.8074C4.69645 16.7629 4.8084 16.6668 4.87288 16.5401L5.5682 15.1502C6.14691 15.4457 6.77515 15.632 7.42142 15.6997C7.5974 15.7177 7.70443 15.7213 7.88688 15.7284H7.8919C8.42345 15.7486 8.9435 15.7608 9.41902 15.7608C9.89453 15.7608 10.4146 15.7486 10.9461 15.7284H10.9512C11.1336 15.7213 11.2413 15.7177 11.4166 15.6997C12.0629 15.632 12.6911 15.4457 13.2698 15.1502L13.9652 16.5408C13.9968 16.6041 14.0406 16.6606 14.0941 16.7069C14.1475 16.7533 14.2096 16.7887 14.2767 16.8111C14.3439 16.8334 14.4147 16.8424 14.4853 16.8374C14.5559 16.8324 14.6248 16.8135 14.6881 16.7818C14.7514 16.7502 14.8079 16.7064 14.8542 16.6529C14.9006 16.5995 14.936 16.5374 14.9584 16.4703C14.9807 16.4031 14.9897 16.3322 14.9846 16.2617C14.9796 16.1911 14.9608 16.1222 14.9291 16.0589L14.2108 14.6223C14.2025 14.6055 14.1934 14.5892 14.1835 14.5734C15.4413 13.6037 16.3097 12.1197 16.4117 10.5136C16.4225 10.3376 16.4225 10.1796 16.4225 9.91019V9.8829C16.4225 9.8398 16.4225 9.79455 16.4196 9.7536C16.4175 9.72068 16.4142 9.68785 16.4095 9.6552H16.602C16.7449 9.6552 16.8819 9.59844 16.983 9.49741C17.084 9.39637 17.1408 9.25935 17.1408 9.11647C17.1408 8.97359 17.084 8.83656 16.983 8.73553C16.8819 8.6345 16.7449 8.57774 16.602 8.57774H3.49302V3.6466Z"
                    fill="#565656"
                  />
                </svg>{" "}
                2 Bathroom
              </li>
              <li
                className="list-inline-item d-flex"
                style={{
                  color: "#000",
                  padding: "3px 10px",
                  fontSize: "16px",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M3.49302 3.6466C3.49308 3.37369 3.58819 3.10932 3.76199 2.89892C3.93579 2.68851 4.17744 2.54521 4.44543 2.49362C4.71341 2.44202 4.991 2.48537 5.2305 2.61621C5.46999 2.74705 5.65645 2.95721 5.75783 3.21059L5.86126 3.46774C5.41833 3.79159 5.07495 4.23302 4.87001 4.74201C4.57857 5.45644 4.57342 6.25565 4.85564 6.97377C4.88216 7.04091 4.92189 7.10203 4.97249 7.15351C5.02308 7.20499 5.08351 7.24577 5.15018 7.27345C5.21684 7.30112 5.28839 7.31511 5.36057 7.31459C5.43275 7.31407 5.50409 7.29906 5.57035 7.27043L9.85143 5.42727C9.97996 5.37202 10.082 5.26895 10.1358 5.13986C10.1897 5.01076 10.1913 4.86577 10.1402 4.73554C10.0033 4.38217 9.79732 4.05961 9.53439 3.78669C9.27145 3.51376 8.95679 3.29594 8.60877 3.14594C8.04966 2.90602 7.42695 2.85753 6.83744 3.00803L6.75842 2.81049C6.56413 2.32449 6.20662 1.92135 5.74734 1.67036C5.28805 1.41936 4.75568 1.33619 4.24172 1.43514C3.72777 1.53409 3.26433 1.80898 2.93107 2.21256C2.5978 2.61614 2.41553 3.1232 2.41557 3.6466V8.57774H2.23599C2.09311 8.57774 1.95609 8.6345 1.85506 8.73553C1.75402 8.83656 1.69727 8.97359 1.69727 9.11647C1.69727 9.25935 1.75402 9.39637 1.85506 9.49741C1.95609 9.59844 2.09311 9.6552 2.23599 9.6552H2.41557V9.91019C2.41557 10.1796 2.41557 10.3376 2.42706 10.5136C2.52906 12.1204 3.39677 13.6037 4.65523 14.5734C4.64505 14.5892 4.6357 14.6055 4.62722 14.6223L3.90892 16.0589C3.84641 16.1865 3.8369 16.3337 3.88246 16.4684C3.92802 16.6031 4.02495 16.7142 4.15213 16.7777C4.27932 16.8412 4.42644 16.8519 4.56145 16.8074C4.69645 16.7629 4.8084 16.6668 4.87288 16.5401L5.5682 15.1502C6.14691 15.4457 6.77515 15.632 7.42142 15.6997C7.5974 15.7177 7.70443 15.7213 7.88688 15.7284H7.8919C8.42345 15.7486 8.9435 15.7608 9.41902 15.7608C9.89453 15.7608 10.4146 15.7486 10.9461 15.7284H10.9512C11.1336 15.7213 11.2413 15.7177 11.4166 15.6997C12.0629 15.632 12.6911 15.4457 13.2698 15.1502L13.9652 16.5408C13.9968 16.6041 14.0406 16.6606 14.0941 16.7069C14.1475 16.7533 14.2096 16.7887 14.2767 16.8111C14.3439 16.8334 14.4147 16.8424 14.4853 16.8374C14.5559 16.8324 14.6248 16.8135 14.6881 16.7818C14.7514 16.7502 14.8079 16.7064 14.8542 16.6529C14.9006 16.5995 14.936 16.5374 14.9584 16.4703C14.9807 16.4031 14.9897 16.3322 14.9846 16.2617C14.9796 16.1911 14.9608 16.1222 14.9291 16.0589L14.2108 14.6223C14.2025 14.6055 14.1934 14.5892 14.1835 14.5734C15.4413 13.6037 16.3097 12.1197 16.4117 10.5136C16.4225 10.3376 16.4225 10.1796 16.4225 9.91019V9.8829C16.4225 9.8398 16.4225 9.79455 16.4196 9.7536C16.4175 9.72068 16.4142 9.68785 16.4095 9.6552H16.602C16.7449 9.6552 16.8819 9.59844 16.983 9.49741C17.084 9.39637 17.1408 9.25935 17.1408 9.11647C17.1408 8.97359 17.084 8.83656 16.983 8.73553C16.8819 8.6345 16.7449 8.57774 16.602 8.57774H3.49302V3.6466Z"
                    fill="#565656"
                  />
                </svg>{" "}
                2 Bathroom
              </li>
              <li
                className="list-inline-item  d-flex"
                style={{
                  borderLeft: "1.5px solid black",
                  padding: "3px 10px",
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M3.49302 3.6466C3.49308 3.37369 3.58819 3.10932 3.76199 2.89892C3.93579 2.68851 4.17744 2.54521 4.44543 2.49362C4.71341 2.44202 4.991 2.48537 5.2305 2.61621C5.46999 2.74705 5.65645 2.95721 5.75783 3.21059L5.86126 3.46774C5.41833 3.79159 5.07495 4.23302 4.87001 4.74201C4.57857 5.45644 4.57342 6.25565 4.85564 6.97377C4.88216 7.04091 4.92189 7.10203 4.97249 7.15351C5.02308 7.20499 5.08351 7.24577 5.15018 7.27345C5.21684 7.30112 5.28839 7.31511 5.36057 7.31459C5.43275 7.31407 5.50409 7.29906 5.57035 7.27043L9.85143 5.42727C9.97996 5.37202 10.082 5.26895 10.1358 5.13986C10.1897 5.01076 10.1913 4.86577 10.1402 4.73554C10.0033 4.38217 9.79732 4.05961 9.53439 3.78669C9.27145 3.51376 8.95679 3.29594 8.60877 3.14594C8.04966 2.90602 7.42695 2.85753 6.83744 3.00803L6.75842 2.81049C6.56413 2.32449 6.20662 1.92135 5.74734 1.67036C5.28805 1.41936 4.75568 1.33619 4.24172 1.43514C3.72777 1.53409 3.26433 1.80898 2.93107 2.21256C2.5978 2.61614 2.41553 3.1232 2.41557 3.6466V8.57774H2.23599C2.09311 8.57774 1.95609 8.6345 1.85506 8.73553C1.75402 8.83656 1.69727 8.97359 1.69727 9.11647C1.69727 9.25935 1.75402 9.39637 1.85506 9.49741C1.95609 9.59844 2.09311 9.6552 2.23599 9.6552H2.41557V9.91019C2.41557 10.1796 2.41557 10.3376 2.42706 10.5136C2.52906 12.1204 3.39677 13.6037 4.65523 14.5734C4.64505 14.5892 4.6357 14.6055 4.62722 14.6223L3.90892 16.0589C3.84641 16.1865 3.8369 16.3337 3.88246 16.4684C3.92802 16.6031 4.02495 16.7142 4.15213 16.7777C4.27932 16.8412 4.42644 16.8519 4.56145 16.8074C4.69645 16.7629 4.8084 16.6668 4.87288 16.5401L5.5682 15.1502C6.14691 15.4457 6.77515 15.632 7.42142 15.6997C7.5974 15.7177 7.70443 15.7213 7.88688 15.7284H7.8919C8.42345 15.7486 8.9435 15.7608 9.41902 15.7608C9.89453 15.7608 10.4146 15.7486 10.9461 15.7284H10.9512C11.1336 15.7213 11.2413 15.7177 11.4166 15.6997C12.0629 15.632 12.6911 15.4457 13.2698 15.1502L13.9652 16.5408C13.9968 16.6041 14.0406 16.6606 14.0941 16.7069C14.1475 16.7533 14.2096 16.7887 14.2767 16.8111C14.3439 16.8334 14.4147 16.8424 14.4853 16.8374C14.5559 16.8324 14.6248 16.8135 14.6881 16.7818C14.7514 16.7502 14.8079 16.7064 14.8542 16.6529C14.9006 16.5995 14.936 16.5374 14.9584 16.4703C14.9807 16.4031 14.9897 16.3322 14.9846 16.2617C14.9796 16.1911 14.9608 16.1222 14.9291 16.0589L14.2108 14.6223C14.2025 14.6055 14.1934 14.5892 14.1835 14.5734C15.4413 13.6037 16.3097 12.1197 16.4117 10.5136C16.4225 10.3376 16.4225 10.1796 16.4225 9.91019V9.8829C16.4225 9.8398 16.4225 9.79455 16.4196 9.7536C16.4175 9.72068 16.4142 9.68785 16.4095 9.6552H16.602C16.7449 9.6552 16.8819 9.59844 16.983 9.49741C17.084 9.39637 17.1408 9.25935 17.1408 9.11647C17.1408 8.97359 17.084 8.83656 16.983 8.73553C16.8819 8.6345 16.7449 8.57774 16.602 8.57774H3.49302V3.6466Z"
                    fill="#565656"
                  />
                </svg>{" "}
                2 Bathroom
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="text-center list-inline d-flex align-items-end justify-content-end">
              <li className="list-inline-item">
                <FavoriteBorderIcon />
              </li>
              <li className="list-inline-item">
                <ShareIcon />
              </li>
            </ul>
          </div>

          <div className="col-lg-7">
            <div style={{
              position:"relative"
            }}>
              <img className="w-100" src="/image/rectangle.png" alt="" />
              <div>
                <button style={{
                  position: "absolute",
                  top: "10px",
                  left:"10px"
                }} className="product__img__btn-1">₹ 1600</button>
                <button style={{
                  position: "absolute",
                  top: "10px",
                  left:"140px"
                }} className="product__img__btn-2">Rent</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-lg-12">
                <img src="/image/productDetails2.png" alt="" />
              </div>
              <div
                className="col-lg-12 d-flex flex-column align-items-center justify-content-center"
                style={{ paddingTop: "35px", paddingBottom: "20px" }}
              >
                <button class="img__btn">See all photos</button>
                <div className="afterBg">
                  {" "}
                  <img
                    className="w-100"
                    src="/image/productDetails2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <span className="overview">Overview</span>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <button
                  className="ownerDetails"
                  data-bs-toggle="modal"
                  data-bs-target="#btn1-Modal"
                >
                  <span>Get Owner Deatils</span>
                </button>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade "
                  id="btn1-Modal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal__1">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body modal__body">
                        <div className="modal__msg d-flex justify-content-evenly align-items-center">
                          <i className="fa-solid fa-circle-check" />
                          <h4>Your request is being shared with the owner</h4>
                        </div>
                        <div className="modal__detail d-flex justify-content-between align-items-center">
                          <p className="text-left p-0"> We sent owner details shortly to your <span style={{color:'#000',fontWeight:'700'}}>+917451871829</span> and  <span style={{color:'#000',fontWeight:'700'}}>arcancraze@gmail.com.</span> </p>
                         
                          {/* <h4>
                            We sent owner details shortly to your
                            <span>+917451871829</span> and
                            <span>arcancraze@gmail.com.</span>
                          </h4> */}
                          <button className="modal__btn">
                            <i className="fa-solid fa-medal" /> Explore Premiums
                            Plans
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="list-inline-item"
                data-bs-toggle="modal"
                data-bs-target="#btn2-Modal"
              >
                <button className="vistDesgin">Visit</button>

                <div
                  className="modal fade "
                  id="btn2-Modal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal__2">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body d-flex justify-content-between ">
                        <div className="left__modal">
                          <img src="/image/image31.png" alt />
                          <h3>Schedule your free Visit today!</h3>
                          <h4>
                            <i className="fa-solid fa-circle-check" /> Verified
                            Availability
                          </h4>
                          <h5>
                            Availability of this property is Verified by
                            BachelorsCave!{" "}
                          </h5>
                        </div>
                        <div className="right__modal">
                          <h4>Date</h4>
                          <div className="right__modal__btn">
                            <button className="modal__btn1">Today</button>
                            <button className="modal__btn2">Tomorrow</button>
                            <button className="modal__btn3">
                              <i className="fa-regular fa-calendar" /> Pick a
                              Date
                            </button>
                          </div>
                          <h4>Time</h4>
                          <div className="modal__card d-flex justify-content-between">
                            <div className="card1 d-flex  align-items-center flex-column ">
                              <h4>Morning</h4>
                              <p className="d-flex justify-content-center align-items-center">
                                11:00 AM
                              </p>
                            </div>
                            <div className="card1 d-flex  align-items-center flex-column">
                              <h4>Afternoon</h4>
                              <p className="d-flex justify-content-center align-items-center">
                                11:30 AM
                              </p>
                            </div>
                            <div className="card1 d-flex  align-items-center flex-column">
                              <h4>Evening</h4>
                              <p className="d-flex justify-content-center align-items-center">
                                12:00 PM
                              </p>
                            </div>
                          </div>
                          <h4 className="modal__right__description">
                            Owner will be available at the above specified date
                            and time <i className="fa-solid fa-thumbs-up" />
                          </h4>
                          <button className="modal__right__btn">
                            Schedule Visit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-2 mb-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <span className="commonDetails">Common Details</span>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-inline commonDetailsICons">
                    <li className="list-inline-item ">
                      <img src="/image/image16.png" width={25} alt="" />
                    </li>
                    <li className="list-inline-item">
                      <span>₹ 1600</span>
                      <p>Rent Value </p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-inline commonDetailsICons">
                    <li className="list-inline-item ">
                      <img src="/image/image16.png" width={25} alt="" />
                    </li>
                    <li className="list-inline-item">
                      <span>₹ 1600</span>
                      <p>Rent Value </p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  {" "}
                  <ul className="list-inline commonDetailsICons">
                    <li className="list-inline-item ">
                      <img src="/image/image17.png" width={25} alt="" />
                    </li>
                    <li className="list-inline-item">
                      <span> Furnished </span>
                      <p> Furnishing status</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  {" "}
                  <ul className="list-inline commonDetailsICons">
                    <li className="list-inline-item ">
                      <img src="/image/aavatr2.png" width={25} alt="" />
                    </li>
                    <li className="list-inline-item">
                      <span>Anyone</span>
                      <p>Preferred Tenant </p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 mb-5">
                  <span
                    className="commonDetailsICons"
                    style={{ color: "#5E17EB" }}
                  >
                    See more details <KeyboardArrowDownIcon />{" "}
                  </span>
                </div>
                <div className="col-lg-12">
                  <hr style={{ margin: "0px 40px" }} />
                </div>
              </div>
              <div className="col-lg-12">
                <h3 className="commonDetailsICons">Description</h3>
                <p className="pt-2 pb-3 commonDetailsICons">
                  Spacious 1 BHK with ample amount of ventilation. Centrally
                  located, this semi furnished independent house for rent is in
                  Rohini Sector 16 and ideal for families & bachelors. This 550
                  sqft. home is on the 2nd floor & comes with ample parking
                  space for a car. This home faces the North West direction.
                  When you need park, all you have to do is step out
                </p>
                <p className="commonDetailsICons" style={{ color: "#5E17EB" }}>
                  Show more <KeyboardArrowDownIcon />
                </p>
              </div>
              <hr style={{ margin: "0px 40px" }} />

              <div className="col-lg-12 pt-3 pb-3">
                <h3 className="commonDetailsICons">Amenities</h3>
                <div className="row commonDetailsICons">
                  <div className="col-lg-3">
                    <div className="amentitiesIcons">
                      <img src="/image/Group21.png" alt="" srcset="" />
                      <p className="text-cente pt-3">Air Condition</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="amentitiesIcons">
                      <img src="/image/Group21.png" alt="" srcset="" />
                      <p className="text-cente pt-3">Security Guard</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="amentitiesIcons">
                      <img src="/image/Group21.png" alt="" srcset="" />
                      <p className="text-cente pt-3">Air Condition</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="amentitiesIcons">
                      <img src="/image/Group21.png" alt="" srcset="" />
                      <p className="text-cente pt-3 ">Visitor Parking</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="" style={{ margin: "0px 40px" }} />
              <div className="col-lg-12 pt-3 pb-3">
                <h3 className="commonDetailsICons">View on Map</h3>
                <div className="row commonDetailsICons">
                  <div className="col-lg-12">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.2060887853377!2d76.57279697511423!3d30.76879478388977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1700044764607!5m2!1sen!2sin"
                      width={700}
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
              <hr className="" style={{ margin: "0px 40px" }} />
              <div className="col-lg-12 pt-3 pb-3">
                <h3 className="commonDetailsICons">NearBy University</h3>
                <div className="row commonDetailsICons">
                  <div className="col-lg-12">
                    <p>6.0 Km from Chandigarh Universty</p>
                    <p>9.0 Km from Punjab Universty</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row mb-4">
                <div className="col-md-12">
                  <h3 style={{fontWeight:'800'}}>Similar Properties</h3>
                </div>
              </div>
              <div className="row similarPropertiesSticky">
                <div className="col-md-12">
                  <div className="fp__offer_item_single">
                    <div className="img similarProperty">
                      <img
                        src="/image/karaeadsl7ewhkq1b2sunsplash-12@2x.png"
                        alt="offer"
                        className="img-fluid w-100"
                      />
                      <div
                        className="cardImage__leftBadge"
                        style={{ display: "flex" }}
                      >
                        <div className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 text-white">
                          PG
                        </div>
                        <div
                          className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 productDetailsTag"
                          style={{
                            backgroundColor: "#fff",
                            color: "#5e17eb",
                            fontWeight: "600",
                          }}
                        >
                          For Boy
                        </div>
                      </div>

                      {/* <div className="button-group">
                        <a href="" className="btn btn-primary pg">
                          PG
                        </a>
                        <a href="" className="btn btn-info for-boys">
                          For Boys
                        </a>
                      </div> */}
                    </div>
                    <div className="text">
                      <a href="" className="btn btn-primary btn-sm">
                        Contact Owner
                      </a>
                      <h3>₹ 3,499</h3>
                      <p>
                        1598, 23B, Sector 23, <br />
                        Chandigarh, 160023, India
                      </p>
                      <p>
                        <span>
                          Single Room with AC <br />
                          6,999
                        </span>
                        <span>Double Room with AC</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="fp__offer_item_single">
                    <div className="img similarProperty">
                      <img
                        src="/image/karaeadsl7ewhkq1b2sunsplash-12@2x.png"
                        alt="offer"
                        className="img-fluid w-100"
                      />
                      <div
                        className="cardImage__leftBadge"
                        style={{ display: "flex" }}
                      >
                        <div className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 text-white">
                          PG
                        </div>
                        <div
                          className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 productDetailsTag"
                          style={{
                            backgroundColor: "#fff",
                            color: "#5e17eb",
                            fontWeight: "600",
                          }}
                        >
                          For Boy
                        </div>
                      </div>

                      {/* <div className="button-group">
                        <a href="" className="btn btn-primary pg">
                          PG
                        </a>
                        <a href="" className="btn btn-info for-boys">
                          For Boys
                        </a>
                      </div> */}
                    </div>
                    <div className="text">
                      <a href="" className="btn btn-primary btn-sm">
                        Contact Owner
                      </a>
                      <h3>₹ 3,499</h3>
                      <p>
                        1598, 23B, Sector 23, <br />
                        Chandigarh, 160023, India
                      </p>
                      <p>
                        <span>
                          Single Room with AC <br />
                          6,999
                        </span>
                        <span>Double Room with AC</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="fp__offer_item_single">
                    <div className="img similarProperty">
                      <img
                        src="/image/karaeadsl7ewhkq1b2sunsplash-12@2x.png"
                        alt="offer"
                        className="img-fluid w-100"
                      />
                      <div
                        className="cardImage__leftBadge"
                        style={{ display: "flex" }}
                      >
                        <div className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 text-white">
                          PG
                        </div>
                        <div
                          className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 productDetailsTag"
                          style={{
                            backgroundColor: "#fff",
                            color: "#5e17eb",
                            fontWeight: "600",
                          }}
                        >
                          For Boy
                        </div>
                      </div>

                      {/* <div className="button-group">
                        <a href="" className="btn btn-primary pg">
                          PG
                        </a>
                        <a href="" className="btn btn-info for-boys">
                          For Boys
                        </a>
                      </div> */}
                    </div>
                    <div className="text">
                      <a href="" className="btn btn-primary btn-sm">
                        Contact Owner
                      </a>
                      <h3>₹ 3,499</h3>
                      <p>
                        1598, 23B, Sector 23, <br />
                        Chandigarh, 160023, India
                      </p>
                      <p>
                        <span>
                          Single Room with AC <br />
                          6,999
                        </span>
                        <span>Double Room with AC</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="fp__offer_item_single">
                    <div className="img similarProperty">
                      <img
                        src="/image/karaeadsl7ewhkq1b2sunsplash-12@2x.png"
                        alt="offer"
                        className="img-fluid w-100"
                      />
                      <div
                        className="cardImage__leftBadge"
                        style={{ display: "flex" }}
                      >
                        <div className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 text-white">
                          PG
                        </div>
                        <div
                          className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 productDetailsTag"
                          style={{
                            backgroundColor: "#fff",
                            color: "#5e17eb",
                            fontWeight: "600",
                          }}
                        >
                          For Boy
                        </div>
                      </div>

                      {/* <div className="button-group">
                        <a href="" className="btn btn-primary pg">
                          PG
                        </a>
                        <a href="" className="btn btn-info for-boys">
                          For Boys
                        </a>
                      </div> */}
                    </div>
                    <div className="text">
                      <a href="" className="btn btn-primary btn-sm">
                        Contact Owner
                      </a>
                      <h3>₹ 3,499</h3>
                      <p>
                        1598, 23B, Sector 23, <br />
                        Chandigarh, 160023, India
                      </p>
                      <p>
                        <span>
                          Single Room with AC <br />
                          6,999
                        </span>
                        <span>Double Room with AC</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="fp__offer_item_single">
                    <div className="img similarProperty">
                      <img
                        src="/image/karaeadsl7ewhkq1b2sunsplash-12@2x.png"
                        alt="offer"
                        className="img-fluid w-100"
                      />
                      <div
                        className="cardImage__leftBadge"
                        style={{ display: "flex" }}
                      >
                        <div className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 text-white">
                          PG
                        </div>
                        <div
                          className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 productDetailsTag"
                          style={{
                            backgroundColor: "#fff",
                            color: "#5e17eb",
                            fontWeight: "600",
                          }}
                        >
                          For Boy
                        </div>
                      </div>

                      {/* <div className="button-group">
                        <a href="" className="btn btn-primary pg">
                          PG
                        </a>
                        <a href="" className="btn btn-info for-boys">
                          For Boys
                        </a>
                      </div> */}
                    </div>
                    <div className="text">
                      <a href="" className="btn btn-primary btn-sm">
                        Contact Owner
                      </a>
                      <h3>₹ 3,499</h3>
                      <p>
                        1598, 23B, Sector 23, <br />
                        Chandigarh, 160023, India
                      </p>
                      <p>
                        <span>
                          Single Room with AC <br />
                          6,999
                        </span>
                        <span>Double Room with AC</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="fp__offer_item_single">
                    <div className="img similarProperty">
                      <img
                        src="/image/karaeadsl7ewhkq1b2sunsplash-12@2x.png"
                        alt="offer"
                        className="img-fluid w-100"
                      />
                      <div
                        className="cardImage__leftBadge"
                        style={{ display: "flex" }}
                      >
                        <div className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 text-white">
                          PG
                        </div>
                        <div
                          className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 productDetailsTag"
                          style={{
                            backgroundColor: "#fff",
                            color: "#5e17eb",
                            fontWeight: "600",
                          }}
                        >
                          For Boy
                        </div>
                      </div>

                      {/* <div className="button-group">
                        <a href="" className="btn btn-primary pg">
                          PG
                        </a>
                        <a href="" className="btn btn-info for-boys">
                          For Boys
                        </a>
                      </div> */}
                    </div>
                    <div className="text">
                      <a href="" className="btn btn-primary btn-sm">
                        Contact Owner
                      </a>
                      <h3>₹ 3,499</h3>
                      <p>
                        1598, 23B, Sector 23, <br />
                        Chandigarh, 160023, India
                      </p>
                      <p>
                        <span>
                          Single Room with AC <br />
                          6,999
                        </span>
                        <span>Double Room with AC</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="fp__offer_item_single">
                    <div className="img similarProperty">
                      <img
                        src="/image/karaeadsl7ewhkq1b2sunsplash-12@2x.png"
                        alt="offer"
                        className="img-fluid w-100"
                      />
                      <div
                        className="cardImage__leftBadge"
                        style={{ display: "flex" }}
                      >
                        <div className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 text-white">
                          PG
                        </div>
                        <div
                          className=" FeaturedBage rounded-right-4 text-12 lh-16 fw-500 bg-dark-1 productDetailsTag"
                          style={{
                            backgroundColor: "#fff",
                            color: "#5e17eb",
                            fontWeight: "600",
                          }}
                        >
                          For Boy
                        </div>
                      </div>

                      {/* <div className="button-group">
                        <a href="" className="btn btn-primary pg">
                          PG
                        </a>
                        <a href="" className="btn btn-info for-boys">
                          For Boys
                        </a>
                      </div> */}
                    </div>
                    <div className="text">
                      <a href="" className="btn btn-primary btn-sm">
                        Contact Owner
                      </a>
                      <h3>₹ 3,499</h3>
                      <p>
                        1598, 23B, Sector 23, <br />
                        Chandigarh, 160023, India
                      </p>
                      <p>
                        <span>
                          Single Room with AC <br />
                          6,999
                        </span>
                        <span>Double Room with AC</span>
                      </p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductDetailBottomCard />

      <Footer />
    </>
  );
};

export default ProductDetails;
