"use client";

import React from 'react';
import './milestone.css';
import Navigation from '../0-navigation/navigation';
import UnderConstruction from '../3-UnderConstruction/UnderConstruction'; 
import Footer from '../0-footer/footer';
import CustomCursor from '../0-cursor/page'; // Cursor Import

type Circle = {
  id: number;
  description: string;
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

const MilestonePage: React.FC<MilestonePageProps> = ({ milestones }) => {
  return (
    <div className="page-container">
        {/* Import Cursor */}
        <CustomCursor />

        {/* Import Navigation */}
        <Navigation /> 

        <div className="milestone-container">
        <img src={"../milestones.svg"} alt="Logo" className="milestone-image" />
         {/* Use the UnderConstruction component */}
      <UnderConstruction />
            <div className="milestone-grid">
                {milestones.map((milestone) => (
                <div key={milestone.id} className="milestone-card">
                    <img src={milestone.imageSrc} alt={milestone.title} className="milestone-image" />
                    <h3 className="milestone-title">{milestone.title}</h3>
                    <div className="circle-grid">
                        {milestone.circles.map((circle) => (
                        <div key={circle.id} className="circle">
                            <div className="thought-bubble">{circle.description}</div>
                        </div>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
        {/* Footer */}

       <Footer />
    </div>
  );
};

export default MilestonePage;
