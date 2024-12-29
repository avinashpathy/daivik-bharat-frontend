import React from "react";
import "./BodyCard.css";
import { Link } from "react-router-dom";

const BodyCard = ({ bodyData }) => {
  return (
    <div className="body-card">
      <Link to={bodyData.name.toLowerCase()} style={{ textDecoration: "none" }}>
        <img
          className="body-card-image"
          src={bodyData.image}
          alt={bodyData.name}
        />
        <p>{bodyData.name}</p>
      </Link>
    </div>
  );
};

export default BodyCard;
