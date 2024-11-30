//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
"use client"; //makes this a client component

import Navigation from './0-navigation/navigation'; //Navigation Bar Import
import HeroSection from './2-home-hero/hero'; // Hero Section Import
import StatisticsSection from './2-home-statistics/statistics'; // Statistics Import
import AboutSection from './2-home-about/about'; // About Section Import
import ServicesSection from './2-home-services/services'; // Services Section Import
import NewsletterSection from './2-home-newsletter/newsletter'; //Newsletter Import
import Footer from './0-footer/footer'; // Import Footer
import { usePathname } from 'next/navigation'; // For the current path
import { useState, useEffect } from 'react'; // For tracking screen size


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Home() {
  const pathname = usePathname(); // Get current path
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
      
      {/* Import Navigation */}

      <Navigation /> 

      {/* Import Navigation */}

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
