"use client";

import UnderConstruction from '../3-UnderConstruction/UnderConstruction';
import Navigation from '../0-navigation/navigation';
import './apps.css';
import Footer from '../0-footer/footer';
import CustomCursor from '../0-cursor/page'; // Cursor Import

export default function Home() {
  return (
    <div className="home-container">

      {/* Import Cursor */}
      <CustomCursor />
      
      {/* Import Navigation */}
      <Navigation /> 

      <img src={"../apps.svg"} alt="Logo" className="apps-image" />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />
      
    </div>
  );
}

