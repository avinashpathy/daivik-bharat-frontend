import React from "react";
import "./Body.css";
import BodyCard from "./BodyCard";

const bodyList = [
  {
    id: 1,
    name: "Scriptures",
    image:
      "https://img.freepik.com/premium-photo/hindu-scriptures-open-ornate-stand_1079150-130914.jpg",
  },
  {
    id: 2,
    name: "Politics",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*KJZ-B1RrJjhFWzD1vk6RxA.jpeg",
  },
  {
    id: 3,
    name: "History",
    image:
      "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/10/ancient-indian-history.jpg",
  },
  {
    id: 4,
    name: "Books",
    image:
      "https://www.bookgeeks.in/wp-content/uploads/2020/06/Best-Indian-Books-by-Indian-Authors-1.jpg",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div>
        {bodyList.slice(0, 2).map((item) => (
          <BodyCard key={item.id} bodyData={item} />
        ))}
      </div>
      <div>
        {bodyList.slice(2).map((item) => (
          <BodyCard key={item.id} bodyData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
