import React from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Your one-stop shop for the best houseplants to brighten your space.
          From low-maintenance succulents to lush statement plants, we have it
          all.
        </p>
        <Link
          to="/products"
          className="get-started-btn"
        >
          Get Started
        </Link>
      </div>
      {/* our services */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Plants</h3>
            <p>Indoor and outdoo plants to make your space fresh and green.</p>
            <Link
              to="/plants"
              className="service-btn"
            >
              Explore Plants
            </Link>
          </div>
          <div className="service-card">
            <h3>kitchen Garden</h3>
            <p>Grow your own vegatable and herbs at home easily.</p>
            <Link to="/kitchen-garden">View kitchen Garden</Link>
          </div>
          <div className="service-card">
            <h3>Seeds</h3>
            <p>High-quality seeds for healthy and fast growing plants.</p>
            <Link to="/seeds">Browse Seeds</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
