"use client";

import UnderConstruction from '../3-UnderConstruction/UnderConstruction'; 
import TermsNav from '../0-termsnav/termsnav';
import './return.css';
import Footer from '../0-footer/footer';
import CustomCursor from '../0-cursor/page'; // Cursor Import
//import './return.css';

export default function Home() {
  return (
    <div className="home-container">
      
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <TermsNav /> 

      <img src={"../returns.svg"} alt="Logo" className="return-image" />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />

    </div>
  );
}