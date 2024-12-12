"use client";

import Navigation from '../../0/0-navigation/navigation';
import PodcastHero from '../../6/podcast-hero/page';
import PodcastLinks from '../../6/podcast-links/page';
import PodcastEpisodes from '../../6/podcast-episodes/page';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import
import UnderConstruction from '../../0/0-UnderConstruction/UnderConstruction';
import Head from 'next/head'; // Import for adding elements to the <head>

export default function Home() {
  return (
    <div className="podcast-container">
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

      <img src={"../page-titles/podcast.svg"}alt="Podcast Title Image"className="podcast-image"style={{width: '40%',objectFit: 'cover',borderRadius: '8px',display: 'block',margin: '0 auto', marginTop: "20px",}}/>


      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Import PodcastHero */}
      <PodcastHero />

      {/* Import Podcast Links */}
      <PodcastLinks />

      {/* Import Podcast Episodes */}
      <PodcastEpisodes />  
    
      {/* Footer */}
      <Footer />

    </div>
  );
}
