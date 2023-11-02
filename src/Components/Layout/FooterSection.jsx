import React from "react";
import "./FooterSection.css";
const FooterSection = () => {
  return (
    <>
      <section id="footerSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footerleft_text">
                <h2>Are you a home owner?</h2>
              </div>
              <span>
                <a href="">List Property</a>
              </span>
            </div>
            <div className="col-lg-4">
              <div className="footerleft_text">
                <h2>Find verified tenants</h2>
              </div>
              <p style={{ color: "#fff" }}>
                From showing your house to tenants, police verifying them &
                managing Paperwork, we do it all
              </p>
            </div>
            <div className="col-lg-4">
              <div className="footerleft_text">
                <h2>Get rent on time</h2>
              </div>
              <p style={{ color: "#fff" }}>We assure rent on 5th of
                every month. No more late
                rent payments or rent
                collection hassle </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
