import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Cross-border Payments for International Students and Businesses abroad</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="/images/nathan-dumlao-lvWw_G8tKsk-unsplash.jpg" 
              text="Experience a hassle-free way to pay tuition and fees to educational institutions and businesses worldwide."
              label="Swift Payments"
              path="/Services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="/images/img-8.jpg" 
              text="Pay for SEVIS, WES, Visa applications & More"
              label="Study Abroad"
              path="/Services"
            />  
            <CardItem 
              src="/images/clay-banks-tgquMvhNLc4-unsplash.jpg" 
              text="Make online payments"
              label="online purchase"
              path="/Services"
            />  
            <CardItem 
              src="/images/university.jpg" 
              text="Pay your Tuition fee abroad"
              label="Study Abroad"
              path="/Services"
            /> 
            
          </ul>
        </div> 
      </div>
    </div>
  );
}

export default Cards;
