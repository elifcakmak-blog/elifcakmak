"use client";

import Navigation from '../0-navigation/navigation';
import './about.css';
import Footer from '../0-footer/footer';
import UnderConstruction from '../3-UnderConstruction/UnderConstruction';

export default function About() {
  return (
    <div className="about-container">
      {/* Import Navigation */}
      <Navigation />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* About Page Content */}
      <main className="about-main">
        <section className="about-introduction">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            Hi, I'm Elif Cakmak! Welcome to my website. Here, I share my journey, projects, and passions.
          </p>
        </section>

        <section className="about-details">
          <h2 className="details-title">My Journey</h2>
          <p>
            I'm passionate about coding, design, and sharing knowledge with others. 
            On this site, you can explore my latest works and connect with me.
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
