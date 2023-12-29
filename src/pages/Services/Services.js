import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>

      <div className="service">
        <h2>Deck Construction</h2>
        <p>Whether you're looking for a space to relax or entertain, our custom deck solutions offer both functionality and style. We work with a range of materials to suit your aesthetic and budgetary needs.</p>
      </div>

      <div className="service">
        <h2>Siding</h2>
        <p>Enhance your home's curb appeal with our durable and attractive siding options. Our team provides expert installation and maintenance to protect your home from the elements and improve its overall look.</p>
      </div>

      <div className="service">
        <h2>Home Renovations</h2>
        <p>Transform your living space with our comprehensive renovation services. From kitchen remodels to bathroom revamps, we handle every aspect to create the home of your dreams.</p>
      </div>

      {/* Add more services as needed */}
    </div>
  );
}

export default Services;
