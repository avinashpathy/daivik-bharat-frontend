import React from "react";
import "./HistoryCard.css";

const HistoryCard = ({ topic, onSelect }) => {
  return (
    <div className="history-gallery" onClick={() => onSelect(topic.path)}>
      <div className="gallery-image-container">
        <img src={topic.image} alt={topic.name} className="gallery-image" />
      </div>
      <div className="gallery-desc">{topic.name}</div>
    </div>
  );
};

export default HistoryCard;
