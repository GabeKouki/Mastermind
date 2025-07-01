import React from "react";
import Logo from "../assets/MastermindLogo2.png";
import "../styles/Hero.css";

const Hero = () => {
  const scrollToForm = () => {

    console.log('hij')
    const formElement = document.getElementById('hubspotForm');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


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
        <div className="InvitationBadge" onClick={() => scrollToForm()}>Contact Us</div>
      </div>
    </section>
  );
};

export default Hero;
