import React from "react";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          CodeXLogo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: "#006400" }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" style={{ color: "#006400" }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services" style={{ color: "#006400" }}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" style={{ color: "#006400" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
