// Politics.js
import React from "react";
import PoliticsCard from "./PoliticsCard";
import "./Politics.css";

const politicsTopics = [
  {
    id: 1,
    name: "Ram Mandir Pran Pratistha",
    image:
      "https://i0.wp.com/www.opindia.com/wp-content/uploads/2024/01/Add-a-heading_20240109_165717_0000.png?w=1280&ssl=1",
    path: "ram-mandir",
    link: "https://www.opindia.com/tag/ayodhya-ram-mandir-pran-pratishtha/",
  },
];

const Politics = ({ onNavigate }) => {
  const handleTopicSelect = (path) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="politics-container">
      <h2 className="politics-title">Politics</h2>
      <div className="politics-content">
        {politicsTopics.map((topic) => (
          <PoliticsCard
            key={topic.id}
            topic={topic}
            onSelect={handleTopicSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Politics;
