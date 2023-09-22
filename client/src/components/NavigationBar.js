import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import '../css/NavigationBar.css'
const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
       
        <RouterLink to="/" className="navbar-brand navLink" style={{color:"#1b5749"}} smooth={true} duration={500}>
        CodeXLogo
          </RouterLink>
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
            <Link className="navLink"  to="carouselExampleIndicators" smooth={true} duration={500}>
            Home
          </Link>
            </li>
            <li className="nav-item">
            <Link className="navLink"  to="services" smooth={true} duration={500}>
            Services
          </Link>
            </li>
            <li className="nav-item">
            <Link className="navLink" to="about" smooth={true} duration={500}>
            About
          </Link>
            </li>
            <li className="nav-item">
            <Link className="navLink" to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
