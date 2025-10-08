import "../styles/BackToHomeButton.css";

import React from "react";
import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BackToHomeButton = () => {
  return (
    <div className="BackToHomeButtonContainer">
      <Link to="/" className="BackToHomeButton">
        Back To Home
      </Link>
    </div>
  );
};

export default BackToHomeButton;
