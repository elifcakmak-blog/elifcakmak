"use client";

import UnderConstruction from '../../0/0-UnderConstruction/UnderConstruction'; 
import TermsNav from '../../0/0-termsnav/termsnav';
import './terms.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import
//import './terms.css';

export default function Home() {
  return (
    <div className="home-container">
      
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <TermsNav /> 

      <img src={"../page-titles/terms.svg"} alt="Logo" className="terms-image" />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />

    </div>
  );
}