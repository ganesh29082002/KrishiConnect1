import React from 'react';

const Contact = () => {
  return (
    <section className="contact my-4">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <ul className="list-unstyled">
                <li className="mb-3 contact-item">
                  <i className="fas fa-envelope contact-icon"></i>
                  <a href="mailto:contact@farmers-things.com" className="contact-link">contact@farmers-things.com</a>
                </li>
                <li className="mb-3 contact-item">
                  <i className="fas fa-phone contact-icon"></i>
                  (123) 456-7890
                </li>
                <li className="contact-item">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  123 Farm Road, Ruralville
                </li>
              </ul>
              {/* <div className="social-icons mt-4">
                <a href="#" className="me-3"><i className="fab fa-facebook"></i></a>
                <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
