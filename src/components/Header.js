import React from "react";
import logo from "../assets/logo-db.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-name">
        <img className="logo" src={logo} alt="logo" />
        <h2>Daivik Bharat</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
