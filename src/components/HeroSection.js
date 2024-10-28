import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted playsInline />
      <div className='hero-text'>
        <h1>CONNECT WITH US</h1>
        <p>Join us for seamless payments and exceptional service.</p>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button>
      </div>
    </div>
  );
}

export default HeroSection;
