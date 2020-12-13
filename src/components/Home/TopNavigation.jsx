import React from "react";

const TopNavigation = ({ token }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="col-md-3 pull-left">
        <a href="/" className="navbar-brand">
          <img src="img/logo.png" alt="" />
        </a>
      </div>
      <div className="col-md-9 pull-right">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#topmenu"
          aria-controls="topmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="topmenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Solutions</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Features</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Testimonial</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact Us</a>
            </li>
            {token
              ? <li className="nav-item">
                <a href="/dashboard" className="nav-link site-btn">
                  Dashboard
                </a>
              </li>
              : <li className="nav-item">
                <a href="/signup" className="nav-link site-btn">
                  Sign Up
                </a>
              </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
