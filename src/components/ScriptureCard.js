import React from "react";
import "./ScriptureCard.css";
import { Link } from "react-router-dom";

const ScriptureCard = ({ scripture, onSelect }) => {
  console.log("sc", scripture.path);
  return (
    <Link to={scripture.path} style={{ textDecoration: "none" }}>
      <div className="scripture-card" onClick={() => onSelect(scripture.path)}>
        <img
          src={scripture.image}
          alt={scripture.name}
          className="scripture-image"
        />
        <div className="scripture-name">{scripture.name}</div>
      </div>
    </Link>
  );
};

export default ScriptureCard;
