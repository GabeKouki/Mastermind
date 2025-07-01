import React from "react";
import Logo from "../assets/MastermindLogo2.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="HeroContainer">
        <div className="Logo">
          <img src={Logo} alt="Mastermind Logo" />
        </div>
        <h1 className="HeroTitle">MASTERMIND</h1>
        <h2 className="HeroTitleSub">FAMILY OFFICE SERVICES</h2>

        <p className="HeroSubtitle">
          Sophisticated wealth management for discerning clients
        </p>
        <div className="InvitationBadge">By Invitation Only</div>
      </div>
    </section>
  );
};

export default Hero;
