import React from "react";

import { Link as RouterLink } from "react-router-dom";
import '../css/NavigationBar.css'
const NavigationBar = () => {
  return (
    <>
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
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <RouterLink className="navLink"  to="/" >
            Home
          </RouterLink>
            </li>
            <li className="nav-item">
            <RouterLink className="navLink"  to="/" smooth={true} duration={500}>
            Services
          </RouterLink>
            </li>
            <li className="nav-item">
            <RouterLink className="navLink" to="/" smooth={true} duration={500}>
            About
          </RouterLink>
            </li>
            <li className="nav-item">
            <RouterLink className="navLink" to="/" smooth={true} duration={500}>
            Contact Us
          </RouterLink>
            </li>
          </ul>
        </div>
        {/* Button trigger modal  */}
          <button className="btn darkGreenbg px-2 py-1" data-toggle="modal" data-target="#exampleModalCenter" style={{color:"white"}} >LogIn</button>
{/* model */}

      </div>
      
    </nav>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog " role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Farmer Registration</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      form
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
     
    </div>
  </div>
</div>
</div>
    
    </>
    
  );
};

export default NavigationBar;
