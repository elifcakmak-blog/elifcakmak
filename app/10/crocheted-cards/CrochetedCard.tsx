'use client';

import React, { useState } from 'react';
import './crocheted-cards.css';

interface CrochetedCardProps {
  title: string;
  images: string[];
  etsyLink: string;
  categories?: string[];
  tags?: string[];
}

const CrochetedCard: React.FC<CrochetedCardProps> = ({ title, images, etsyLink, categories, tags }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const allTags = [...(categories || []), ...(tags || [])];

  return (
    <div className="crocheted-card">
      <div className="crocheted-image-row">
        <div className="crocheted-image-container">
          <img
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="crocheted-image"
          />
        </div>

        <div className="crocheted-arrows-container">
          <button onClick={prevImage} className="crocheted-arrow">◀</button>
          <button onClick={nextImage} className="crocheted-arrow">▶</button>
        </div>
      </div>

      <h3 className="crocheted-title">{title}</h3>

      {allTags.length > 0 && (
        <div className="crocheted-badges-container">
          {allTags.map((tag, index) => (
            <span key={index} className="crocheted-badge tag">{tag}</span>
          ))}
        </div>
      )}

      <a href={etsyLink} target="_blank" rel="noopener noreferrer">
        <button className="crocheted-button">Visit Etsy Listing</button>
      </a>
    </div>
  );
};

export default CrochetedCard;