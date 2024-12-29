// Carousel.js
import React, { useState, useEffect } from "react";
import "./Carousel.css";

const carouselImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "First slide",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1315684/pexels-photo-1315684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Second slide",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/4533747/pexels-photo-4533747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Third slide",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/3936815/pexels-photo-3936815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Fourth slide",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((image) => (
          <div key={image.id} className="carousel-slide">
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${currentIndex === index ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
