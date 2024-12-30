import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p className="subtitle">
          We'd love to hear from you about your interest in Bharat's rich
          culture and heritage
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Feel free to reach out through any of these platforms:</p>

          <div className="contact-links">
            <a href="mailto:daivikbharat1@gmail.com" className="contact-link">
              <i className="fa fa-envelope"></i>
              <div className="link-info">
                <h3>Email Us</h3>
                <p>daivikbharat1@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/daivikbharat"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fa fa-instagram"></i>
              <div className="link-info">
                <h3>Follow on Instagram</h3>
                <p>@daivikbharat</p>
              </div>
            </a>

            <a
              href="https://twitter.com/daivikbharat"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fa fa-twitter"></i>
              <div className="link-info">
                <h3>Connect on Twitter</h3>
                <p>@daivikbharat</p>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-message">
          <h2>Why Connect With Us?</h2>
          <div className="message-points">
            <div className="point">
              <i className="fa fa-comments"></i>
              <h3>Share Your Stories</h3>
              <p>
                Have interesting stories about Indian culture or history? We'd
                love to hear and possibly feature them!
              </p>
            </div>
            <div className="point">
              <i className="fa fa-lightbulb-o"></i>
              <h3>Suggest Topics</h3>
              <p>
                Help us explore more aspects of Bharat by suggesting topics
                you'd like to learn about.
              </p>
            </div>
            {/* <div className="point">
              <i className="fa fa-users"></i>
              <h3>Join the Community</h3>
              <p>
                Become part of our growing community of people passionate about
                Indian heritage.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
