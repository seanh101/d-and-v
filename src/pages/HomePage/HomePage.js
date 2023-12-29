import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to D&V Construction</h1>
        <p>Your dream project, built with integrity and excellence.</p>
      </section>
      
      <section className="services-overview">
        <h2>Our Services</h2>
        <p>At D&V Construction, we offer a comprehensive range of services tailored to bring your vision to life. From initial design to the final touches, our dedicated team ensures each project is completed to the highest standard.</p>
        <div className="service-list">
          <div className="service-item">
            <h3>Residential Building</h3>
            <p>Custom home construction, renovations, and extensions that transform living spaces.</p>
          </div>
          <div className="service-item">
            <h3>Commercial Projects</h3>
            <p>State-of-the-art commercial facilities, office buildings, and business centers.</p>
          </div>
          <div className="service-item">
            <h3>Interior Design</h3>
            <p>Stunning interior solutions that blend aesthetics with functionality.</p>
          </div>
          <div className="service-item">
            <h3>Landscape Architecture</h3>
            <p>Beautifully designed outdoor spaces that complement your structure.</p>
          </div>
        </div>
      </section>
      
      <section className="about-us">
        <h2>About D&V Construction</h2>
        <p>Founded in Boston, D&V Construction has been transforming the local skyline for over 25 years. As a family-owned business, we take pride in our reputation for delivering exceptional quality and building lasting relationships with our clients. Our team of skilled professionals is committed to bringing your projects to life with precision and care.</p>
      </section>
      
      <section className="call-to-action">
        <h2>Start Your Project Today</h2>
        <p>Ready to begin your construction journey? Contact us for a consultation and let's lay the foundation for your future.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}

export default HomePage;

