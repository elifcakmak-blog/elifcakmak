'use client';

import React, { useState } from 'react';
import './organize-cards.css';

interface OrganizeCardProps {
  title: string;
  images: string[];
  etsyLink: string;
  categories?: string[];
  businessCategories?: string[];
  types?: string[];
  audience?: string[];
  tags?: string[];
}

const OrganizeCard: React.FC<OrganizeCardProps> = ({
  title,
  images,
  etsyLink,
  categories,
  businessCategories,
  types,
  audience,
  tags,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () =>
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  // Merge all fields for display
  const allTags = [
    ...(categories || []),
    ...(businessCategories || []),
    ...(types || []),
    ...(audience || []),
    ...(tags || []),
  ];

  return (
    <div className="organize-card">
      <div className="organize-image-row">
        <div className="organize-image-container">
          <img
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="organize-image"
          />
        </div>

        <div className="organize-arrows-container">
          <button onClick={prevImage} className="organize-arrow">
            ◀
          </button>
          <button onClick={nextImage} className="organize-arrow">
            ▶
          </button>
        </div>
      </div>

      <h3 className="organize-title">{title}</h3>

      {allTags.length > 0 && (
        <div className="organize-badges-container">
          {allTags.map((tag, index) => (
            <span key={index} className="organize-badge tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <a href={etsyLink} target="_blank" rel="noopener noreferrer">
        <button className="organize-button">Visit Effortless Works</button>
      </a>
    </div>
  );
};

export default OrganizeCard;