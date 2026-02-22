"use client";

import React, { useState, useRef, useEffect } from 'react';
import './milestone.css';
import PageNavigation from '../../0/0-pages-nav/pages-nav';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import

type Circle = {
  id: number;
  description: string;
  color: string; // Added color property
};

type Milestone = {
  id: number;
  imageSrc: string;
  title: string;
  circles: Circle[];
};

interface MilestonePageProps {
  milestones: Milestone[];
}

const CircleComponent: React.FC<{ color: string; description: string }> = ({ color, description }) => {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const adjustBubblePosition = () => {
      if (bubbleRef.current) {
        const bubbleRect = bubbleRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const margin = 0; // Margin to keep the bubble from going off the page

        // Adjust left position to avoid overflow
        if (bubbleRect.right > windowWidth - margin) {
          bubbleRef.current.style.left = `${windowWidth - bubbleRect.width - margin}px`;
          bubbleRef.current.style.transform = 'translateX(0)';
        } else if (bubbleRect.left < margin) {
          bubbleRef.current.style.left = `${margin}px`;
          bubbleRef.current.style.transform = 'translateX(0)';
        }

        // Move the bubble upwards on the y-axis by adjusting the top margin
        bubbleRef.current.style.top = `${-180}px`;  // Adjust this value to move bubble up (negative value moves it up)
      }
    };

    if (isHovered) {
      adjustBubblePosition();
    }

    // Add resize event listener to adjust bubble position on resize
    window.addEventListener('resize', adjustBubblePosition);

    return () => {
      window.removeEventListener('resize', adjustBubblePosition);
    };
  }, [isHovered]);

  return (
    <div className="circle" style={{ backgroundColor: color }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <div ref={bubbleRef} className={`thought-bubble ${isHovered ? 'show' : ''}`}>
        {description}
      </div>
    </div>
  );
};

const MilestonePage: React.FC<MilestonePageProps> = ({ milestones }) => {
  return (
    <div>
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <PageNavigation />
    <div className="page-container">
      <img src={"../../roadmap-tiles/milestones.svg"} alt="RoadMap Milestones Title Image" className="milestone-image" />

      <div className="milestone-container">
        <div className="milestone-grid">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="milestone-card">
              <img src={milestone.imageSrc} alt={milestone.title} className="milestone-image" />
              <h3 className="milestone-title">{milestone.title}</h3>
              <div className="circle-grid">
                {milestone.circles.map((circle) => (
                  <CircleComponent key={circle.id} color={circle.color} description={circle.description} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Footer */}
    <Footer />
    </div>
   
    </div>
  );
};

export default MilestonePage;
