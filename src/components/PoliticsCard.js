import React from "react";
import "./PoliticsCard.css";

const PoliticsCard = ({ topic, onSelect }) => {
  return (
    <div className="politics-gallery" onClick={() => onSelect(topic.path)}>
      <a
        href={topic.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="gallery-image-container">
          <img src={topic.image} alt={topic.name} className="gallery-image" />
        </div>
        <div className="gallery-desc">{topic.name}</div>
      </a>
    </div>
  );
};

export default PoliticsCard;
