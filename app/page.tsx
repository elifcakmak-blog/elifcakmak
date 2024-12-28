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
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://elifcakmak.blog"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://www.elifcakmak.blog/2/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Videos",
                  "item": "https://www.elifcakmak.blog/2/videos"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Podcast",
                  "item": "https://www.elifcakmak.blog/2/podcast"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Apps",
                  "item": "https://www.elifcakmak.blog/2/apps"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Books",
                  "item": "https://www.elifcakmak.blog/2/books"
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "name": "Road Map",
                  "item": "https://www.elifcakmak.blog/3"
                },
                {
                  "@type": "ListItem",
                  "position": 8,
                  "name": "Newsletter",
                  "item": "https://www.elifcakmak.blog/2/newsletter"
                }
              ]
            })
          }}
        />
        
      </Head>

      {/* Import Cursor */}
      <CustomCursor />
      
      {/* Import Navigation */}

      <Navigation /> 

    
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
