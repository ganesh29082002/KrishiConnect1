import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
// import './styles.css'; // Import your custom styles
import first from '../first.jpg';
import sec from '../bg.jpg';
import third from '../third.jpg';
import fourth from '../second.jpg';
import fifth from '../fifth.jpg';
import sixth from '../sixth.jpg';
import './slider.css'

function BootstrapCarousel() {

  return (
    <>
      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="3" // Add indicator for the new slide
            aria-label="Slide 4" // Add label for the new slide
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="4" // Add indicator for the new slide
            aria-label="Slide 5" // Add label for the new slide
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img
              src={first}
              className="d-block w-100 c-img"
              alt="Slide 1"
            />
            <div className="carousel-caption top-0 mt-4">
              <p className="mt-5 fs-3 text-uppercase">Welcome to Farmers' Things</p>
              <h1 className="display-1 fw-bolder text-capitalize">Government Yojana Awareness</h1>
              <button className="btn btn-primary px-4 py-2 fs-5 mt-5">Schemes</button>
            </div>
          </div>
          <div className="carousel-item  c-item">
            <img
              src={sec}
              className="d-block w-100 c-img"
              alt="Slide 2"
            />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5">Welcome to Farmers' Things</p>
              <p className="display-1 fw-bolder text-capitalize">Weather Forecasting</p>
              <button
                className="btn btn-primary px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
              >
                Products
              </button>
            </div>
            </div>
            <div className="carousel-item  c-item">
              <img
                src={third}
                className="d-block w-100 c-img"
                alt="Slide 4"
              />
              <div className="carousel-caption top-0 mt-4">
                <p className="text-uppercase fs-3 mt-5">Welcome to Farmers' Things</p>
                <p className="display-1 fw-bolder text-capitalize">E-commerce Platform</p>
                <button
                  className="btn btn-primary px-4 py-2 fs-5 mt-5"
                  data-bs-toggle="modal"
                  data-bs-target="#booking-modal"
                >
                  Products
                </button>
              </div>
            </div>
            <div className="carousel-item  c-item">
              <img
                src={fourth}
                className="d-block w-100 c-img"
                alt="Slide 5"
              />
               <div className="carousel-caption top-0 mt-4">
                <p className="text-uppercase fs-3 mt-5">Welcome to Farmers' Things</p>
                <p className="display-1 fw-bolder text-capitalize">Daily APMC Price Updates</p>
                <button
                  className="btn btn-primary px-4 py-2 fs-5 mt-5"
                  data-bs-toggle="modal"
                  data-bs-target="#booking-modal"
                >
                  Products
                </button>
              </div>
            </div>
         
          <div className="carousel-item  c-item">
            <img
              src={fifth}
              className="d-block w-100   c-img"
              alt="Slide 3"
            />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5">Welcome to Farmers' Things</p>
              <p className="display-1 fw-bolder text-capitalize">Community Network</p>
              <button
                className="btn btn-primary px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
              >
                Network
              </button>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src={sixth} // Replace with the path to your new image for Slide 6
              className="d-block w-100 c-img"
              alt="Slide 6"
            />
             <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5">Welcome to Farmers' Things</p>
              <p className="display-1 fw-bolder text-capitalize">Informative Articles</p>
              <button
                className="btn btn-primary px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
              >
                Network
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="hero-slider-container">

        </div>

      </div>

    </>

  );
}

export default BootstrapCarousel;
