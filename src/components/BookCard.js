import React from 'react'
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-gallery">
      <a href={book.link} target="_blank" rel="noopener noreferrer">
        <div className="gallery-image-container">
          <img src={book.image} alt={book.name} className="gallery-image" />
        </div>
        <div className="gallery-desc">{book.name}</div>
      </a>
    </div>
  );
};

export default BookCard