import React from 'react';
import './Services.css'; // Ensure you have a CSS file for styling

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <p className="intro">
        At , we are dedicated to providing comprehensive financial solutions tailored for international students and businesses. Our expertise in cross-border transactions ensures you experience hassle-free payments, allowing you to focus on what truly matters—your education and growth.
      </p>

      <h2>What We Offer</h2>
      <div className="services-container">
        <div className="service-item">
          <h3>Wire Transfer</h3>
          <p>Secure and fast wire transfers to any destination.</p>
        </div>
        <div className="service-item">
          <h3>Cross-Border Payments</h3>
          <p>Simplified payments across borders with competitive rates.</p>
        </div>
        <div className="service-item">
          <h3>Tuition Fee Payments</h3>
          <p>Easy payment solutions for your tuition fees to various institutions.</p>
        </div>
        <div className="service-item">
          <h3>Online Purchases</h3>
          <p>Seamless online shopping experiences with global merchants.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
