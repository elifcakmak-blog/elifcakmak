"use client";

import UnderConstruction from '../../0/0-UnderConstruction/UnderConstruction'; 
import Navigation from '../../0/0-navigation/navigation';
import './books.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import

export default function Home() {
  return (
    <div className="home-container">
    
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation /> 

      <img src={"../page-titles/books.svg"} alt="Books Title Image" className="books-image" />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />

    </div>
  );
}
