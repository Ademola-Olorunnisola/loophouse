import React, { useState } from 'react';
import './Footer.css';
import logo from "../images/logo 2.png"; // Import your logo

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail(''); // Clear the input after submission
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info.loophouseconsultinglimited@gmail.com">info.loophouseconsultinglimited@gmail.com</a></p>
          <p>Phone: <a href="tel:+123456789">+234 (905) 489-6331</a></p>
          <p>Address: House 2c, Potiskum street, Area-2, Abuja, Nigeria</p>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://twitter.com/join_loophouse" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/loophouse_official" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://whatsapp.com/send?phone=9054896331" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>

        <div className="footer-subscription">
          <h3>Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubmit} className="subscription-form">
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='Enter your email'
              required
              className='email-input'
            />
            <button type='submit' className='subscribe-button'>Subscribe</button>
          </form>
          <p>Stay updated with our latest news and offers.</p>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Add Logo Here */}
        <img src={logo} alt="Logo" className="footer-logo-img" />
        <p>&copy; {new Date().getFullYear()} LoopHouse Consulting Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
