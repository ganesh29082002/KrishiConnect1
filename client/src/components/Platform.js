import React from 'react';
import './platform.css'
import schmelogo from '../schmelogo.png';
import weather from '../weather.png';
import product from '../product.png';
import men from '../men.png';
import menlogo from '../menlogo.png';
import logo from '../logo.png';
function ServiceSection() {
  return (
    <section id="services" className="text-center">
      <div className="container container1">
        <div className="row">
          <div className="col-12">
            <div className="intro">
              <h6>For You</h6>
              <h1>What Do This Platform Provide?</h1>
              <p className="mx-auto">
              A one-stop application for Indian farmers offers weather updates, crop information, market prices, and more to improve farming practices and livelihoods.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <img src={schmelogo} alt="abc" />
              <h5>Government Scheme Information</h5>
              <p>
              Updates on government agricultural schemes and subsidies.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <img src={logo} alt="" />
              <h5>Crop Information</h5>
              <p>
              Crop-specific guidance on cultivation and management.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <img src={product} alt="" />
              <h5>Market Prices</h5>
              <p>
              Access to local and national agricultural market prices.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <img src={weather} alt="" />
              <h5>Weather Updates</h5>
              <p>
              Real-time weather forecasts for informed decision-making.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <img src={menlogo} alt="" />
              <h5>Community Support</h5>
              <p>
              Community support for farmers to connect, share experiences, and seek expert advice.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <img src={men} alt="" />
              <h5>Informative articles</h5>
              <p>
              Informative articles covering a wide range of agricultural topics for knowledge enhancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
