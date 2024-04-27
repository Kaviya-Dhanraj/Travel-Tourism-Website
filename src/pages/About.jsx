// AboutPage.jsx

import React from 'react';
import aboutImage1 from '../assets/images/tour-img01.jpg'; 
import aboutImage2 from '../assets/images/tour-img02.jpg';
import '../styles/about.css'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Our Tourism Website</h2>
            <br />
            <p>
              <b> Welcome to our  ExploreGlobe tourism website!</b>
              <br /> We are dedicated to providing exceptional travel experiences
              to our customers. Our team consists of passionate individuals who love to explore and discover
              new destinations, cultures, and adventures.
            </p>
            <p>
              Our mission is to create unforgettable memories for our clients by offering a wide range of
              travel packages, personalized itineraries, and expert guidance. Whether you're seeking a relaxing
              beach vacation, an adventurous trekking expedition, or a cultural exploration, we have something
              for everyone.
            </p>
            <p>
              We believe in responsible and sustainable tourism practices, and we strive to minimize our
              environmental impact while maximizing the benefits for local communities. With our eco-friendly
              initiatives and partnerships with local businesses, we aim to create positive change and support
              the preservation of natural and cultural heritage.
            </p>
            <p>
              Join us on an unforgettable journey and let us help you create memories that will last a lifetime!
            </p>
          </div>
          <div className="about-images">
            <img src={aboutImage1} alt="About Us" className="about-image" />
            <img src={aboutImage2} alt="About Us" className="about-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
