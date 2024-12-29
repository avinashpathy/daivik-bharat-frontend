import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-db.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-name">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
          <h2>Daivik Bharat</h2>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
