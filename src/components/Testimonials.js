import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-card">
        <p>"Excellent service! I was able to transfer funds quickly and easily!"</p>
        <h4>- John Doe</h4>
      </div>
      <div className="testimonial-card">
        <p>"LoopHouse has made my payment processes seamless and stress-free."</p>
        <h4>- Jane Smith</h4>
      </div>
    </section>
  );
}

export default Testimonials;
