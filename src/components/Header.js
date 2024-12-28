import React from "react";
import logo from "../assets/logo-db.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <img className="logo" src={logo} alt="logo"/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          {/* <li>Cart</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
