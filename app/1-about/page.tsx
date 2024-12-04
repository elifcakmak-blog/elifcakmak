"use client";

import Navigation from '../0-navigation/navigation';
import './about.css';
import Footer from '../0-footer/footer';
import UnderConstruction from '../3-UnderConstruction/UnderConstruction';
import CustomCursor from '../0-cursor/page'; // Cursor Import

export default function About() {
  return (
    <div className="about-container">

      {/* Import Cursor */}
      <CustomCursor />
      
      {/* Import Navigation */}
      <Navigation />

      <img src={"../about.svg"} alt="Logo" className="about-image" />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* About Page Content */}
      <main className="about-main">
        <section className="about-introduction">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            ...
          </p>
        </section>

        <section className="about-details">
          <h2 className="details-title">My Journey</h2>
          <p>
            ...
          </p>
        </section>

        <section className="about-image-section">
          <img 
            src="[your-image-url]" 
            alt="About Me" 
            className="about-image"
          />
        </section>
      </main> 

      {/* Footer */}

      <Footer />
      
    </div>
  );
}
