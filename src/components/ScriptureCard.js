import React from "react";
import './ScriptureCard.css';

const ScriptureCard = ({ scripture, onSelect }) => {
  return (
    <div className="scripture-card" onClick={() => onSelect(scripture.path)}>
      <img
        src={scripture.image}
        alt={scripture.name}
        className="scripture-image"
      />
      <div className="scripture-name">{scripture.name}</div>
    </div>
  );
};

export default ScriptureCard;
