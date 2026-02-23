'use client';

import React, { useState } from 'react';
import './islam-cards.css';

interface IslamCardProps {
  title: string;
  images: string[];
  etsyLink: string;
  categories?: string[];
  tags?: string[];
}

const IslamCard: React.FC<IslamCardProps> = ({ title, images, etsyLink, categories, tags }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const allTags = [...(categories || []), ...(tags || [])];

  return (
    <div className="islam-card">
      <div className="islam-image-row">
        <div className="islam-image-container">
          <img
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="islam-image"
          />
        </div>

        <div className="islam-arrows-container">
          <button onClick={prevImage} className="islam-arrow">◀</button>
          <button onClick={nextImage} className="islam-arrow">▶</button>
        </div>
      </div>

      <h3 className="islam-title">{title}</h3>

      {allTags.length > 0 && (
        <div className="islam-badges-container">
          {allTags.map((tag, index) => (
            <span key={index} className="islam-badge islam-tag">{tag}</span>
          ))}
        </div>
      )}

      <a href={etsyLink} target="_blank" rel="noopener noreferrer">
        <button className="islam-button">Visit Etsy Listing</button>
      </a>
    </div>
  );
};

export default IslamCard;