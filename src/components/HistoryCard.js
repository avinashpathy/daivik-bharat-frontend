import React from "react";
import "./HistoryCard.css";
import { Link } from "react-router-dom";

const HistoryCard = ({ topic, onSelect }) => {
  return (
    <Link to={topic.path} style={{ textDecoration: "none" }}>
      <div className="history-gallery" onClick={() => onSelect(topic.path)}>
        <div className="gallery-image-container">
          <img src={topic.image} alt={topic.name} className="gallery-image" />
        </div>
        <div className="gallery-desc">{topic.name}</div>
      </div>
    </Link>
  );
};

export default HistoryCard;
