"use client";

import UnderConstruction from '../../0/0-UnderConstruction/UnderConstruction'; 
import TermsNav from '../../0/0-termsnav/termsnav';
import './cookies.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import
//import './cookies.css';

export default function Home() {
  return (
    <div className="home-container">
      
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <TermsNav /> 

      <img src={"../page-titles/cookies.svg"} alt="Logo" className="cookies-image" />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />

    </div>
  );
}