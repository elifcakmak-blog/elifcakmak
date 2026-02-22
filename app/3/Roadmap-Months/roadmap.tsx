import React from 'react';
import './roadmap.css';
import CustomCursor from '../../0/0-cursor/page';
import PageNavigation from '../../0/0-pages-nav/pages-nav';
import Footer from '../../0/0-footer/footer';

type Roadmap = {
  id: number;
  imageSrc: string;
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
    <div>
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <PageNavigation />
      
    <div className="page-container">
      

      <img src={"../roadmap-tiles/months.svg"} alt="RoadMap Months Title Image" className="months-image" />

      <div className="roadmaps-container">
        {roadmaps.map((roadmap) => (
          <div key={roadmap.id} className="roadmap-card">
            <img src={roadmap.imageSrc} className="roadmap-image" />
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

     
    </div>
    <Footer />
    </div>
  );
};

export default RoadmapsPage;
