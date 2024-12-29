import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-db.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <div className="header">
      <div className="header-name">
        <Link to="/" onClick={closeMenu}>
          <img className="logo" src={logo} alt="logo" />
          <h2>Daivik Bharat</h2>
        </Link>
      </div>
      
      <button 
        className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;