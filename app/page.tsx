//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
"use client"; //makes this a client component

import Navigation from './0/0-navigation/navigation'; //Navigation Bar Import
import HeroSection from './1/home-hero/hero'; // Hero Section Import
import StatisticsSection from './1/home-statistics/statistics'; // Statistics Import
import AboutSection from './1/home-about/about'; // About Section Import
import ServicesSection from './1/home-services/services'; // Services Section Import
import NewsletterSection from './1/home-newsletter/newsletter'; //Newsletter Import
import Footer from './0/0-footer/footer'; // Import Footer
import CustomCursor from './0/0-cursor/page'; // Cursor Import
import { useState, useEffect } from 'react';
import Head from 'next/head'; // Import for adding elements to the <head>


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Home() {
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {/* Screen View Handling */}
////////////////////////////////////////
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if width is 768px or less
    };
    updateScreenSize(); // Run on mount
    window.addEventListener("resize", updateScreenSize); // Listen for resize events
    return () => window.removeEventListener("resize", updateScreenSize); // Cleanup
  }, []);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="home-container">
      
      {/* Add the font link */}
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Import Cursor */}
      <CustomCursor />
      
      {/* Import Navigation */}

      <Navigation /> 

      {/* Import Hero Section */}
      {/* Import Hero Section */}

      <HeroSection isMobile={isMobile} />

      {/* Import Statistics */} 

      <StatisticsSection />

      {/* Import About */}

      <AboutSection />

      {/* Import Services */}

      <ServicesSection />

      {/* Import Newsletter */}

      <NewsletterSection />

      {/* Footer */}

      <Footer />


    </div>
  );
}
