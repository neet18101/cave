import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <a
                className="navbar-brand logoName"
                href="#"
                style={{ color: "#fff", fontSize: "25xp", fontWeight: "600" }}
              >
                <img
                  decoding="async"
                  src="/icons/brand.svg"
                  className="img-fluid navbar-brand-sticky"
                  style={{ paddingRight: "10px" }}
                />
                BachelorsCave
              </a>
              <div className="text-center">
                <div className="footer-inner" />
              </div>

              <div className="row">
                <ul className="list-inline">
                  <li className="list-inline-item" style={{
                    cursor: "pointer"
                  }}> <a href="#!"><span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={34}
                      height={34}
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_32905)">
                        <path
                          d="M16.8881 0.225098C26.2043 0.225098 33.7391 7.7599 33.7391 17.0761C33.7391 26.3923 26.2043 33.9271 16.8881 33.9271C7.57191 33.9271 0.0371094 26.3923 0.0371094 17.0761C0.0371094 7.7599 7.57191 0.225098 16.8881 0.225098ZM13.8068 25.959C21.2694 25.959 25.3617 19.7722 25.3617 14.404V13.8744C26.1561 13.2966 26.8542 12.5745 27.3839 11.756C26.6617 12.0689 25.8673 12.2856 25.0488 12.406C25.8913 11.9004 26.5413 11.106 26.8302 10.1672C26.0358 10.6246 25.1692 10.9616 24.2544 11.1542C23.5081 10.3598 22.4489 9.87831 21.2934 9.87831C19.0547 9.87831 17.2251 11.7078 17.2251 13.9466C17.2251 14.2596 17.2492 14.5725 17.3455 14.8614C13.9753 14.6929 10.9662 13.08 8.96813 10.6246C8.63111 11.2264 8.41446 11.9245 8.41446 12.6708C8.41446 14.067 9.13664 15.3188 10.2199 16.041C9.54588 16.041 8.91999 15.8484 8.39038 15.5354V15.5836C8.39038 17.5575 9.78661 19.1945 11.6402 19.5797C11.3032 19.676 10.9421 19.7241 10.581 19.7241C10.3162 19.7241 10.0755 19.7 9.81068 19.6519C10.3162 21.2648 11.8328 22.4443 13.5901 22.4684C12.1939 23.5517 10.4366 24.2016 8.53482 24.2016C8.1978 24.2016 7.88485 24.2016 7.57191 24.1535C9.3533 25.309 11.4958 25.983 13.7827 25.983"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_32905">
                          <rect
                            width="33.702"
                            height="33.702"
                            fill="white"
                            transform="translate(0.0371094 0.225098)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span></a>

                  </li>
                  <li className="list-inline-item" style={{
                    cursor: "pointer"
                  }}> <a href="#!"><span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={33}
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_32907)">
                        <path
                          d="M16.8098 10.9111C15.3927 10.9111 14.0337 11.4741 13.0317 12.4761C12.0297 13.4781 11.4668 14.8371 11.4668 16.2541C11.4668 17.6712 12.0297 19.0302 13.0317 20.0322C14.0337 21.0342 15.3927 21.5971 16.8098 21.5971C18.2268 21.5971 19.5859 21.0342 20.5879 20.0322C21.5899 19.0302 22.1528 17.6712 22.1528 16.2541C22.1528 14.8371 21.5899 13.4781 20.5879 12.4761C19.5859 11.4741 18.2268 10.9111 16.8098 10.9111Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.3986 0.225098C7.84795 0.225098 5.40173 1.23836 3.59812 3.04197C1.79451 4.84558 0.78125 7.2918 0.78125 9.84249L0.78125 22.6657C0.78125 25.2164 1.79451 27.6626 3.59812 29.4662C5.40173 31.2698 7.84795 32.2831 10.3986 32.2831H23.2218C25.7725 32.2831 28.2187 31.2698 30.0224 29.4662C31.826 27.6626 32.8392 25.2164 32.8392 22.6657V9.84249C32.8392 7.2918 31.826 4.84558 30.0224 3.04197C28.2187 1.23836 25.7725 0.225098 23.2218 0.225098L10.3986 0.225098ZM9.33004 16.2541C9.33004 14.2702 10.1181 12.3676 11.5209 10.9648C12.9238 9.56198 14.8264 8.77389 16.8102 8.77389C18.7941 8.77389 20.6967 9.56198 22.0995 10.9648C23.5023 12.3676 24.2904 14.2702 24.2904 16.2541C24.2904 18.238 23.5023 20.1406 22.0995 21.5434C20.6967 22.9462 18.7941 23.7343 16.8102 23.7343C14.8264 23.7343 12.9238 22.9462 11.5209 21.5434C10.1181 20.1406 9.33004 18.238 9.33004 16.2541ZM24.2904 8.77389H26.4276V6.63669H24.2904V8.77389Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_32907">
                          <rect
                            width="32.058"
                            height="32.058"
                            fill="white"
                            transform="translate(0.78125 0.225098)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span></a>

                  </li>
                  <li className="list-inline-item" style={{
                    cursor: "pointer"
                  }}> <a href="#!"><span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <path
                        d="M33.8568 18.1991C33.8568 9.88051 27.1054 3.12915 18.7868 3.12915C10.4682 3.12915 3.7168 9.88051 3.7168 18.1991C3.7168 25.493 8.90087 31.5662 15.7728 32.9677V22.7201H12.7588V18.1991H15.7728V14.4316C15.7728 11.5231 18.1388 9.15715 21.0473 9.15715H24.8148V13.6781H21.8008C20.9719 13.6781 20.2938 14.3563 20.2938 15.1851V18.1991H24.8148V22.7201H20.2938V33.1938C27.9041 32.4403 33.8568 26.0205 33.8568 18.1991Z"
                        fill="white"
                      />
                    </svg>
                  </span></a>

                  </li>
                  <li className="list-inline-item" style={{
                    cursor: "pointer"
                  }}>
                    <a href="#!"><span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={31}
                        viewBox="0 0 32 31"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_32912)">
                          <path
                            d="M0.735352 2.22552C0.735352 1.02227 1.73521 0.0471191 2.96888 0.0471191H28.9158C30.1495 0.0471191 31.1493 1.02227 31.1493 2.22552V28.2827C31.1493 29.4859 30.1495 30.4611 28.9158 30.4611H2.96888C1.73521 30.4611 0.735352 29.4859 0.735352 28.2827V2.22552ZM10.1314 25.5074V11.7736H5.56737V25.5074H10.1314ZM7.85032 9.89745C9.44135 9.89745 10.4317 8.84436 10.4317 7.52516C10.4032 6.17744 9.44325 5.15287 7.88074 5.15287C6.31822 5.15287 5.29745 6.17934 5.29745 7.52516C5.29745 8.84436 6.2878 9.89745 7.81991 9.89745H7.85032ZM17.1798 25.5074V17.8374C17.1798 17.4268 17.2102 17.0162 17.3319 16.7235C17.6607 15.9042 18.4116 15.0545 19.6738 15.0545C21.3256 15.0545 21.9852 16.3129 21.9852 18.1605V25.5074H26.5492V17.6302C26.5492 13.4103 24.2986 11.4486 21.2952 11.4486C18.8735 11.4486 17.7881 12.7792 17.1798 13.7163V13.7638H17.1494C17.1595 13.748 17.1696 13.7321 17.1798 13.7163V11.7736H12.6177C12.6747 13.0624 12.6177 25.5074 12.6177 25.5074H17.1798Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_32912">
                            <rect
                              width="30.414"
                              height="30.414"
                              fill="white"
                              transform="translate(0.735352 0.0471191)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h5 style={{ color: "#fff" }}>Company</h5>
              <ul style={{ listStyle: "none", padding: "10px 0px" }}>
                <li style={{ color: "#fff", paddingBottom: "10px" }}>About</li>
                <li style={{ color: "#fff", paddingBottom: "10px" }}>Terms</li>
                <li style={{ color: "#fff", paddingBottom: "10px" }}>
                  Privacy policy
                </li>
                <li style={{ color: "#fff", paddingBottom: "10px" }}>
                  Careers
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 style={{ color: "#fff" }}>More</h5>
              <ul style={{ listStyle: "none", padding: "10px 0px" }}>
                <li style={{ color: "#fff", paddingBottom: "10px" }}>
                  License
                </li>
                <li style={{ color: "#fff", paddingBottom: "10px" }}>FAQs</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 style={{ color: "#fff" }}>Contact</h5>
              <ul style={{ listStyle: "none", padding: "10px 0px" }}>
                <li style={{ color: "#fff", paddingBottom: "10px" }}>
                  Email : bachelorscaveOfficial@gmail.com
                </li>
                <li style={{ color: "#fff", paddingBottom: "10px" }}>
                  Tel : +91 96666 96666
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-4" style={{ color: "#4B4B4B" }} />
        <section className>
          <div className="row text-center">
            <ul className="list-inline">
              <li className="list-inline-item" style={{ color: "#5B5B5B" }}>
                © copyright 2023
              </li>
              <li className="list-inline-item" style={{ color: "#5B5B5B" }}>
                <span style={{ paddingRight: "10px" }}>&#x2022;</span> Bachelors
                cave
              </li>
              <li className="list-inline-item" style={{ color: "#5B5B5B" }}>
                <span style={{ paddingRight: "10px" }}>&#x2022;</span> All
                rights reserved
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
