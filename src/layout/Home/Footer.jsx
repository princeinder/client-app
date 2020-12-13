import React from "react";
const Footer = () => {
  return (
    <footer className="p50">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3">
            <img src="img/foot-logo.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo. Aenean massa. Cum sociis natoque penatibus et magnis dis
            </p>
            <div className="social-icon">
              <button
                type="button"
                className="btn btn-social-icon btn-outline-facebook"
              >
                <i className="fa fa-facebook" />
              </button>
              <button
                type="button"
                className="btn btn-social-icon btn-outline-youtube"
              >
                <i className="fa fa-youtube" />
              </button>
              <button
                type="button"
                className="btn btn-social-icon btn-outline-twitter"
              >
                <i className="fa fa-twitter" />
              </button>
              <button
                type="button"
                className="btn btn-social-icon btn-outline-linkedin"
              >
                <i className="fa fa-linkedin" />
              </button>
              <button
                type="button"
                className="btn btn-social-icon btn-outline-instagram"
              >
                <i className="fa fa-instagram" />
              </button>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <h3>Additional Links</h3>
            <ul className="foot-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-3">
            <h3>Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo. Aenean massa. Cum sociis natoque penatibus et magnis dis
            </p>
          </div>
          <div className="col-md-12 col-lg-3">
            <h3>Subscribe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo. Aenean massa. Cum sociis natoque penatibus et magnis dis
            </p>
            <input
              className="email"
              type="email"
              name="your-email"
              defaultValue
              size={40}
              placeholder="Your e-mail..."
            />
          </div>
        </div>
        <div className="row">
          <div className="foot-bottom">
            <div className="col-md-6 col-lg-6 pull-left">
              <p>Copyright © 2020 Alertya</p>
            </div>
            <div className="col-md-6 col-lg-6 pull-left">
              <a href="#">Privacy Policy Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
