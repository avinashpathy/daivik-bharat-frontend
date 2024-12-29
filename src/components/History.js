import React from "react";
import HistoryCard from "./HistoryCard";
import "./History.css";

const historyTopics = [
  {
    id: 1,
    name: "History of the word 'Hindu'",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Om-hindu_symbol.jpg/640px-Om-hindu_symbol.jpg",
    path: "history-of-hindu",
  },
  {
    id: 2,
    name: "History of the word 'Bhārata'",
    image:
      "https://www.datocms-assets.com/46272/1633203430-1633203429130.jpg?auto=format&fit=max&w=1200",
    path: "history-of-bharat",
  },
  {
    id: 3,
    name: "Story of Lord Jagannath",
    image:
      "https://www.thestatesman.com/wp-content/uploads/2017/08/Jagannath-idol-with-his-elder-brother-Balabhadra-and-sister-Subhadra-Getty-Images.jpg",
    path: "lord-jagannath-story",
  },
  {
    id: 4,
    name: "Temples in Bharat",
    image:
      "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180801155144/Stone-Chariot-at-Vittala-Temple-Hampi-Karnataka-1024x682.jpg",
    path: "temples",
  },
  {
    id: 5,
    name: "Shakti Peethas",
    image:
      "https://templesinindiainfo.com/wp-content/uploads/2016/09/Ashtadasa-Shakti-Peethas.jpg",
    path: "shakti-peethas",
  },
  {
    id: 6,
    name: "Panch Kedar",
    image: "https://pbs.twimg.com/media/E4naaRJUYAQEbcv.jpg",
    path: "panch-kedar",
  },
  {
    id: 7,
    name: "Char Dham",
    image:
      "https://i0.wp.com/www.chardhamtour.in/wp-content/uploads/2018/01/Char-Dham-of-India.jpg",
    path: "char-dham",
  },
];

const History = ({ onNavigate }) => {
  const handleTopicSelect = (path) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="history-container">
      <h2 className="history-title">Spiritual & Cultural History</h2>
      <div className="history-content">
        {historyTopics.map((topic) => (
          <HistoryCard
            key={topic.id}
            topic={topic}
            onSelect={handleTopicSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
