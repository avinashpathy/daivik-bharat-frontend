import React from "react";
import "./PoliticsCard.css";

const PoliticsCard = ({ topic, onSelect }) => {
  return (
    <div className="politics-gallery" onClick={() => onSelect(topic.path)}>
      <div className="gallery-image-container">
        <img src={topic.image} alt={topic.name} className="gallery-image" />
      </div>
      <div className="gallery-desc">{topic.name}</div>
    </div>
  );
};

export default PoliticsCard;
