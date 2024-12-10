import React from 'react';
import './roadmap.css';
import CustomCursor from '../../0/0-cursor/page';
import Navigation from '../../0/0-navigation/navigation';
import Footer from '../../0/0-footer/footer';

type Roadmap = {
  id: number;
  imageSrc: string;
  title: string;
  button: {
    label: string;
    link: string;
    color: string;
  };
};

interface RoadmapsPageProps {
  roadmaps: Roadmap[];
}

const RoadmapsPage: React.FC<RoadmapsPageProps> = ({ roadmaps }) => {
  return (
    <div className="page-container">
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation />

      <img src={"../roadmap-tiles/months.svg"} alt="RoadMap Months Title Image" className="months-image" />

      <div className="roadmaps-container">
        {roadmaps.map((roadmap) => (
          <div key={roadmap.id} className="roadmap-card">
            <img src={roadmap.imageSrc} alt={roadmap.title} className="roadmap-image" />
            <h3 className="roadmap-title">{roadmap.title}</h3>
            <a
              href={roadmap.button.link}
              className="roadmap-button"
              style={{ backgroundColor: roadmap.button.color }}
            >
              {roadmap.button.label}
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default RoadmapsPage;
