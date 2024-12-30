// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="mailto:daivikbharat01@gmail.com" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://twitter.com/daivikbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/daivikbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="footer-info">
          <div className="copyright">
            © 2025 Copyright. All rights reserved.
          </div>

          <div className="developers">
            Developed by{" "}
            <a
              href="https://linkedin.com/in/srishti-tyagi-5014a3175"
              target="_blank"
              rel="noopener noreferrer"
            >
              Srishti Tyagi
            </a>{" "}
            and{" "}
            <a
              href="https://avinashpathy.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avinash Pathy
            </a>
          </div>

          <div className="terms">
            <a href="/termsandconditions">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
