"use client";

import Navigation from '../../0/0-navigation/navigation';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import
import AbServices2 from '../../5/about-services/page';
import NewsletterSection from '../../1/home-newsletter/newsletter';
import IslamGallery from '../../11/islam-gallery/page';

export default function About() {
  // Check if the screen is mobile

  return (
    <div className="about-container">

      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation />

      {/* Header Title Image */}


      <img src={"../page-titles/islam.svg"} alt="about title image" style={{width: "40%", objectFit: "cover", borderRadius: "8px",display: "block",margin: "0 auto", marginTop: "20px",}}/>

      {/* Islam Gallery */}
      <IslamGallery />

      {/* Services Section */}
      <AbServices2 />
      
    
      {/* Import Newsletter */}

      <NewsletterSection />
      
      {/* Footer */}
      <Footer />
      
    </div>
  );
}
