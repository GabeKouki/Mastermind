import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Family Office Services',
      description: 'Comprehensive wealth management and legacy planning for multi-generational families. We coordinate all aspects of your financial life with white-glove service.'
    },
    {
      id: 2,
      title: 'Tax Optimization',
      description: 'Strategic tax planning and optimization across multiple jurisdictions. Minimize tax burden while maintaining full compliance and transparency.'
    },
    {
      id: 3,
      title: 'Crypto Accounting & Tax',
      description: 'Institutional-grade cryptocurrency custody, trading, and tax optimization. Navigate the digital asset landscape with confidence and security.'
    },
    {
      id: 4,
      title: 'Financial Records',
      description: 'Meticulous financial record keeping and reporting. Maintain perfect transparency and organization across all your financial activities.'
    },
    {
      id: 5,
      title: 'Financial Advisory',
      description: 'Strategic financial advice tailored to your unique situation. Make informed decisions with our expert guidance and market insights.'
    },
    {
      id: 6,
      title: 'Bespoke Solutions',
      description: 'Additional custom services tailored to your specific needs. We continuously expand our offerings to serve our clients better.'
    }
  ];

  const handleCardClick = (cardId) => {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  return (
    <section className="About">
      <div className="AboutContainer">
        <div className="AboutContent">
          <h2 className="AboutTitle">Curated Excellence</h2>
          <p className="AboutDescription">
            We provide bespoke financial solutions exclusively for ultra-high net worth individuals 
            and families. Our selective approach ensures unparalleled service and absolute discretion 
            for our distinguished clientele.
          </p>
        </div>

        <div className="ServicesSection">
          {/* <h3 className="ServicesTitle">Our Expertise</h3> */}
          <div className="ServicesGrid">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`ServiceCard ${flippedCard === service.id ? 'Flipped' : ''}`}
                onClick={() => handleCardClick(service.id)}
              >
                <div className="ServiceCardInner">
                  <div className="ServiceCardFront">
                    <h4 className="ServiceTitle">{service.title}</h4>
                    <div className="FlipIndicator">
                      <span>Learn More</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="ServiceCardBack">
                    <p className="ServiceDescription">{service.description}</p>
                    <div className="FlipIndicator">
                      <span>Back</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6"/>
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