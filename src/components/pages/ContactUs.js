import React from 'react';
import './ContactUs.css'; // Assuming you have a CSS file for styles

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>We're here to help! Reach out to us through the following channels:</p>
      
      <div className="social-links">
        <a href="https://www.instagram.com/loophouse_official" target="_blank" rel="noopener noreferrer" className="social-link">
          Instagram
        </a>
        <a href="https://twitter.com/join_loophouse" target="_blank" rel="noopener noreferrer" className="social-link">
          Twitter
        </a>
        <a href="mailto:info.llophouseconsultinglimited@gmail.com" className="social-link">
          Gmail
        </a>
        <a href="https://wa.me/9054896331" target="_blank" rel="noopener noreferrer" className="social-link">
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
