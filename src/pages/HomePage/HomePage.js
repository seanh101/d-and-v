import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to D&V Construction</h1>
        <p>Your dream home improvement projects, realized with integrity and excellence.</p>
      </section>
      
      <section className="services-overview">
        <h2>Our Home Improvement Services</h2>
        <p>At D&V Construction, we specialize in transforming your home with a wide array of improvement services. Whether it's a minor update or a major renovation, our team is dedicated to bringing your vision to life with precision and flair.</p>
        <div className="service-list">
          <div className="service-item">
            <h3>Decks</h3>
            <p>Expand your living space with a custom-built deck perfect for entertaining or relaxation.</p>
          </div>
          <div className="service-item">
            <h3>Siding</h3>
            <p>Protect and beautify your home's exterior with our durable and aesthetic siding options.</p>
          </div>
          <div className="service-item">
            <h3>Kitchens</h3>
            <p>Revitalize the heart of your home with a kitchen remodel designed for both function and style.</p>
          </div>
          <div className="service-item">
            <h3>Bathrooms</h3>
            <p>Turn your bathroom into a sanctuary with our custom renovation services, from simple upgrades to complete overhauls.</p>
          </div>
        </div>
      </section>
      
      <section className="about-us">
        <h2>About D&V Construction</h2>
        <p>Founded in Boston, D&V Construction has been enhancing homes across the region for over 25 years. As a family-owned business, we're known for our commitment to quality and our dedication to customer satisfaction. Our team of experts is ready to make your home improvement dreams a reality.</p>
      </section>
      
      <section className="call-to-action">
        <h2>Start Your Home Improvement Project Today</h2>
        <p>Are you ready to improve your home? Reach out to us for a consultation and let's create the space you've always wanted.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}

export default HomePage;
