"use client";

import UnderConstruction from '../../0/0-UnderConstruction/UnderConstruction';
import Navigation from '../../0/0-navigation/navigation';
import './video.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import

export default function Home() {
  return (
    <div className="home-container">

      {/* Import Cursor */}
      <CustomCursor />
      
      {/* Import Navigation */}
      <Navigation /> 

      <img src={"../page-titles/videos.svg"} alt="videos title image" className="video-image" />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />
      
    </div>
  );
}

