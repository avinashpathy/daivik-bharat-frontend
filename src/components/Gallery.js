import React, { useState } from "react";
import "./Gallery.css";

const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const puriJagannathPhotos = importAll(
  require.context(
    "../components/temple-photos/puri-jagannath-temple",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const kotilingeshwaraPhotos = importAll(
  require.context(
    "../components/temple-photos/kotilingeshwara-temple",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const Modal = ({ image, onClose }) => (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Enlarged view" className="modal-image" />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );

const temples = [
  {
    id: 1,
    name: "Kotilingeshwara Temple",
    thumbnail:
      "https://lh3.googleusercontent.com/p/AF1QipM-fVaQXjhn4bJFTbV_gBpboAdlZbDL3HY61Eqx=s1360-w1360-h1020",
    photos: kotilingeshwaraPhotos,
  },
  {
    id: 3,
    name: "Puri Jagannath Temple",
    thumbnail:
      "https://media.istockphoto.com/id/1408456832/photo/sri-mandir-at-puri-odisha-india.jpg?s=612x612&w=0&k=20&c=SEx42KYFq2oBWW0LmUDEzdbSH-F2-d3oJPakl1ECvwM=",
    photos: puriJagannathPhotos,
  },
];

const Gallery = () => {
    const [selectedTemple, setSelectedTemple] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleThumbnailClick = (temple) => {
      setSelectedTemple(temple);
    };
  
    const handleBackClick = () => {
      setSelectedTemple(null);
    };
  
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
    };
  
    return (
      <div className="gallery-container">
        {!selectedTemple ? (
          <div className="thumbnail-grid">
            {temples.map((temple) => (
              <div
                key={temple.id}
                className="thumbnail-card"
                onClick={() => handleThumbnailClick(temple)}
              >
                <img
                  src={temple.thumbnail}
                  alt={temple.name}
                  className="thumbnail-image"
                />
                <h3 className="thumbnail-title">{temple.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="photo-viewer">
            <button className="back-button" onClick={handleBackClick}>
              Back to Gallery
            </button>
            <h2>{selectedTemple.name}</h2>
            <div className="photo-grid">
              {selectedTemple.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`${selectedTemple.name} Photo ${index + 1}`}
                  className="photo-item"
                  onClick={() => handleImageClick(photo)}
                />
              ))}
            </div>
          </div>
        )}
        {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
      </div>
    );
  };
  
  export default Gallery;
