"use client";

import UnderConstruction from '../../0/0-UnderConstruction/UnderConstruction';
import Navigation from '../../0/0-navigation/navigation';
import './apps.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import

export default function Home() {
  return (
    <div className="home-container">
    
      {/* Import Cursor */}
      <CustomCursor />
      
      {/* Import Navigation */}
      <Navigation /> 

      <img src={"../page-titles/apps.svg"} alt="apps title image" className="apps-image" />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />
      
    </div>
  );
}

