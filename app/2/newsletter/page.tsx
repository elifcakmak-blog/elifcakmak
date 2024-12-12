"use client";

import Navigation from '../../0/0-navigation/navigation';
import './newsletter.css';
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

      <img src={"../page-titles/newsletter.svg"} alt="Newsletter Title Image" className="newsletter-image" />

      {/* Embedded Newsletter Form with Frame */}
      <div className="iframe-container">
        <div className="iframe-frame">
          <iframe
            title="Newsletter Signup"
            src="https://d95b7f78.sibforms.com/serve/MUIFAA9dv9CnNJlSRLU5ULFASpdA27XZGdENCNut-jzU1PspSDZLwpgmyJAExxwepRjSpHRrkfuLFsk0w4YGzYLJcIeX6RZh_uZefU93ennll9j601D9SuXGafSlZXKGhQTukDX1bq7KCMZWoohrx87RRi8iqy0TaeoL5AA9NwKh1RqLA6fPyQs_RU98aRD25xMan1X-UcetvRCy"
            scrolling="no"
            allowFullScreen
            className="iframe-element"
          />
        </div>
      </div>

       {/* Footer */}

       <Footer />

    </div>
  );
}
