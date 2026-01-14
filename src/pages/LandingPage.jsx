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
    </div>
  );
};

export default LandingPage;
