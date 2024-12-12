"use client";

import UnderConstruction from '../../0/0-UnderConstruction/UnderConstruction';
import Navigation from '../../0/0-navigation/navigation';
import './apps.css';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import
import Head from 'next/head'; // Import for adding elements to the <head>

export default function Home() {
  return (
    <div className="home-container">
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

      <img src={"../page-titles/apps.svg"} alt="apps title image" className="apps-image" />

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />
      
    </div>
  );
}

