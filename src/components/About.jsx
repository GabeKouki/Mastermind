import React, { useState } from "react";
import "../styles/About.css";

const About = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Family Office Services",
      description:
        "Comprehensive wealth management and legacy planning for multi-generational families. We coordinate all aspects of your financial life with white-glove service.",
    },
    {
      id: 2,
      title: "Tax Optimization",
      description:
        "Custom tax strategies crafted for high-net-worth individuals across multiple jurisdictions. Minimize tax exposure while ensuring absolute compliance and discretion.",
    },
    {
      id: 3,
      title: "Digital Asset Accounting & Tax",
      description:
        "Premier cryptocurrency custody, trading, and tax solutions tailored for discerning investors. Navigate digital assets with unmatched security and expertise.",
    },
    {
      id: 4,
      title: "Advanced Financial Reporting & Analytics",
      description:
        "Precision financial reporting and analytics designed for complex portfolios. Gain unparalleled transparency and control over your wealth with real-time insights.",
    },
    {
      id: 5,
      title: "Financial Advisory",
      description:
        "Exclusive, strategic financial counsel tailored to sophisticated clients. Leverage our market expertise and custom insights to optimize your financial decisions.",
    },
    {
      id: 6,
      title: "Lifestyle Financial Management",
      description:
        "Beyond investments, your financial life touches every corner of how you live and what you leave behind. We provide hands-on support for real estate, liquidity, protection planning, and more—ensuring your lifestyle is aligned with your long-term vision and legacy.",
    },
  ];

  const handleCardClick = (cardId) => {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  return (
    <section className="About">
      <div className="AboutContainer">
        <div className="AboutContent">
          <h2 className="AboutTitle">Where Insight Meets Impact</h2>
          <p className="AboutDescription">
            We offer tailored financial strategies designed for individuals and
            families who seek thoughtful guidance and refined service. Our
            approach is personal, selective, and grounded in discretion.
          </p>
        </div>

        <div className="ServicesSection">
          <div className="ServicesGrid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`ServiceCard ${
                  flippedCard === service.id ? "Flipped" : ""
                }`}
                onClick={() => handleCardClick(service.id)}
              >
                <div className="ServiceCardInner">
                  <div className="ServiceCardFront">
                    <h4 className="ServiceTitle">{service.title}</h4>
                    <div className="FlipIndicator">
                      <span>Learn More</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>

                  <div className="ServiceCardBack">
                    <p className="ServiceDescription">{service.description}</p>
                    <div className="FlipIndicator">
                      <span>Back</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
