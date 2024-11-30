import React from 'react';
import './UnderConstruction.css';

const UnderConstruction: React.FC = () => {
  return (
    <div className="floating-card">
      <div className="construction-container">
        <div className="gear-container">
          <div className="gear gear1"></div>
          <div className="gear gear2"></div>
          <div className="gear gear3"></div>
        </div>
        <p className="message">This page is being built right now. Check back soon!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
