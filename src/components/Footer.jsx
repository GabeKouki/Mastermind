import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
          formId: "50e38dc1-96d8-4b33-befc-6f519ea48081",
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

          <div className="FooterLegal">
            <p>
              &copy; 2025 Mastermind Virtual Family Office. All rights reserved.
              Services being offered do not require a state license. Some
              services may be provided through local affiliates.
            </p>
            <p className="Disclaimer">
              By invitation only. Services subject to qualification.
            </p>
            <div className="PrivacyLink">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;