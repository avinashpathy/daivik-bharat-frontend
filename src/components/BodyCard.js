import React from "react";
import "./BodyCard.css";

const BodyCard = ({ bodyData }) => {
  return (
    <div className="body-card">
      <img
        className="body-card-image"
        src={bodyData.image}
        alt={bodyData.name}
      />
      <p>{bodyData.name}</p>
    </div>
  );
};

export default BodyCard;
