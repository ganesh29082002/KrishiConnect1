import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import '../css/NavigationBar.css'
const NavigationBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
       
        <RouterLink to="/" className="navbar-brand navLink" style={{color:"#1b5749"}} smooth={true} duration={500}>
        <span style={{color:"Green"}}>Krishi</span>Connect.
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
        {/* Button trigger modal  */}
          <button className="btn darkGreenbg px-2 py-1" data-toggle="modal" data-target="#exampleModalCenter" style={{color:"white"}} >LogIn</button>
{/* model */}

      </div>
      
    </nav>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog " role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title darkGreenText" id="exampleModalLongTitle">Farmer Registration</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span className="mediumGreenText" aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label mediumGreenText">Email address</label>
                  <input
                    // onChange={onChangeHandler}
                    // value={data.email}
                    type="email"
                    name="email"
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label mediumGreenText">Password</label>
                  <input
                    // onChange={onChangeHandler}
                    // value={data.password}
                    type="password"
                    name="password"
                    className="form-control shadow-none"
                  />
                </div>

                <div className="d-flex align-items-center justify-content-between mb-2">
                  <button
                    // onClick={(e) => onLogin(e)}
                    className="btn darkGreenbg SHADOW-NONE w-100" data-dismiss="modal"
                  >
                    Login
                  </button>
                 
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-between">
    <div style={{display : "block"}}>
        <h6 className="mediumGreenText">Not Registered Yet ? Click on Register</h6>
    </div>
    <div>
        <button type="button" class="btn btn-outline-success w-100" data-dismiss="modal">Register</button>
    </div>
</div>

  </div>
</div>
</div>
    
    </>
    
  );
};

export default NavigationBar;
