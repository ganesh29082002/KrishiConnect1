import React from 'react';

const Footer = () => {
  // Sample data (you can replace it with real data)
  const userCount = 1000;
  const availableSchemes = 50;
  const products = 50;
  const visitors = 5000;

  return (
    <><section id="milestone">
    <div className="container container1">
      <div className="row text-center justify-content-center gy-4">
        <div className="col-lg-2 col-sm-6">
          <h1 className="display-4">90K+</h1>
          <p className="mb-0">Jobs Available</p>
        </div>
        <div className="col-lg-2 col-sm-6">
          <h1 className="display-4">120+</h1>
          <p className="mb-0">Career Choices</p>
        </div>
        <div className="col-lg-2 col-sm-6">
          <h1 className="display-4">200+</h1>
          <p className="mb-0">Companies</p>
        </div>
        <div className="col-lg-2 col-sm-6">
          <h1 className="display-4">38K</h1>
          <p className="mb-0">Candidates</p>
        </div>
      </div>
    </div>
  </section>
    <footer className="bg-dark text-white p-4">
      <div className="container">
        <div className="d-flex justify-content-around">
          <div className="text-center">
            <div className="bg-primary rounded-circle p-3">
              <span className="badge bg-light text-primary">{userCount}</span>
            </div>
            <p className="mt-2">User Count</p>
          </div>
          <div className="text-center">
            <div className="bg-success rounded-circle p-3">
              <span className="badge bg-light text-success">{availableSchemes}</span>
            </div>
            <p className="mt-2">Available Schemes</p>
          </div>
          <div className="text-center">
            <div className="bg-warning rounded-circle p-3">
              <span className="badge bg-light text-warning">{products}</span>
            </div>
            <p className="mt-2">Products</p>
          </div>
          <div className="text-center">
            <div className="bg-info rounded-circle p-3">
              <span className="badge bg-light text-info">{visitors}</span>
            </div>
            <p className="mt-2">Visitors</p>
          </div>
        </div>
      </div>
     
    </footer>
    {/* <section className="bg-light" id="portfolio">
      <div className="container container1">
        <div className="row">
          <div className="col-12">
            <div className="intro">
              <h6>Find Jobs</h6>
              <h1>Make Your Career Bloom With</h1>
              <p className="mx-auto">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </section> */}
    </>
  );
};

export default Footer;
