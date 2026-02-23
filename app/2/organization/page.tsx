"use client";

import PageNavigation from '../../0/0-pages-nav/pages-nav';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import
import AbServices2 from '../../5/about-services/page';
import NewsletterSection from '../../1/home-newsletter/newsletter';
import OrganizeGallery from '../../12/organize-gallery/page';

export default function About() {
  // Check if the screen is mobile

  return (
    <div className="organization-container">

      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <PageNavigation />

      {/* Header Title Image */}


      <img src={"../page-titles/organization.svg"} alt="Organization Title Image" style={{width: "40%", objectFit: "cover", borderRadius: "8px",display: "block",margin: "0 auto", marginTop: "20px",}}/>

      {/* Organize Section */}
      <OrganizeGallery />

      {/* Services Section */}
      <AbServices2 />
      
    
      {/* Import Newsletter */}

      <NewsletterSection />
      
      {/* Footer */}
      <Footer />
      
    </div>
  );
}
