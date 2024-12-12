"use client";

import Navigation from '../../0/0-navigation/navigation';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import
import AbSection2 from '../../5/about-about/page'; // about section Import
import AbServices2 from '../../5/about-services/page';
import NewsletterSection from '../../1/home-newsletter/newsletter';
import Head from 'next/head'; // Import for adding elements to the <head>

export default function About() {
  // Check if the screen is mobile

  return (
    <div className="about-container">
      <Head>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6V7P46JDCR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6V7P46JDCR');
            `,
          }}
        />
      </Head>
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation />

      {/* Header Title Image */}


      <img src={"../page-titles/about.svg"} alt="about title image" style={{width: "40%", objectFit: "cover", borderRadius: "8px",display: "block",margin: "0 auto", marginTop: "20px",}}/>


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
