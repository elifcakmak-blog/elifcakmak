"use client";

import Navigation from '../0-navigation/navigation';
import Footer from '../0-footer/footer';
import CustomCursor from '../0-cursor/page'; // Cursor Import
import AbSection2 from '../5-about-about/page'; // about section Import
import AbServices2 from '../5-about-services/page';
import NewsletterSection from '../2-home-newsletter/newsletter';

export default function About() {
  // Check if the screen is mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div className="about-container">

      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation />

      {/* Header Title Image */}

      <img src={"../about.svg"} alt="Logo" style={{width: "40%", objectFit: "cover", borderRadius: "8px",display: "block",margin: "0 auto",}}/>

      {/* Import About Section */}
      <AbSection2 />

      {/* Services Section */}
      <AbServices2 />
      
      {/* Hero Section */}
      
    
      {/* Import Newsletter */}

      <NewsletterSection />
      
      {/* Footer */}
      <Footer />
      
    </div>
  );
}
