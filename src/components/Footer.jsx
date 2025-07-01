import React, { useEffect } from "react";
import "../styles/Footer.css";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "50140473",
          formId: "ec540f8d-b440-440e-8d30-0967f7973d5a",
          target: "#hubspotForm",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="Footer">
      <div className="FooterContainer">
        <div className="FooterContent">
          <div className="Form">
            <div id="hubspotForm"></div>
          </div>

          <div className="FooterMessage">
            <p className="CheckEmail">
              Please check your email after submitting your application
            </p>
            <p className="AdditionalQuestions">
              Additional questions may be required during the review process
            </p>
          </div>

          <div className="FooterLegal">
            <p>
              &copy; 2025 Mastermind Family Office. All rights reserved.
              Services being offered do not require a state license. Some
              services may be provided through local affiliates.
            </p>
            <p className="Disclaimer">
              By invitation only. Services subject to qualification.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
