import React, { useState } from 'react';
import './crocheted-cards.css';

interface CrochetedCardProps {
  title: string;
  images: string[];
  etsyLink: string;
  categories?: string[]; // optional
  tags?: string[];       // optional
}

const CrochetedCard: React.FC<CrochetedCardProps> = ({ title, images, etsyLink, categories, tags }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="card">
      <div className="image-row">
        <button onClick={prevImage} className="arrow">◀</button>
        <div className="image-container">
          <img
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="image"
          />
        </div>
        <button onClick={nextImage} className="arrow">▶</button>
      </div>
      <h3 className="title">{title}</h3>
      <a href={etsyLink} target="_blank" rel="noopener noreferrer">
        <button className="button">Visit Etsy Listing</button>
      </a>
    </div>
  );
};

export default CrochetedCard;
