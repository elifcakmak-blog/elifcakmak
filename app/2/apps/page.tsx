"use client";

import PageNavigation from '../../0/0-pages-nav/pages-nav';
import AppsHero from '../../8/apps-hero/page';
import AppsLinks from '../../8/apps-links/page';
import AppsList from '../../8/apps-list/page';
import EffortlessResources from '../../8/apps-resources/newsletter'
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import


export default function Home() {
  return (
    <div className="apps-container">
            
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <PageNavigation /> 

      <img src={"../page-titles/appswebsites.svg"}alt="Apps Title Image"className="apps-image"style={{width: '40%',objectFit: 'cover',borderRadius: '8px',display: 'block',margin: '0 auto', marginTop: "20px",}}/>

      {/* Import PodcastHero */}
      <AppsHero />

      {/* Import Podcast Links */}
      <AppsLinks />

      {/* Import Podcast Episodes */}
      <AppsList />  

      {/* Import Effortless Resources */}
      <EffortlessResources />  
    
      {/* Footer */}
      <Footer />

    </div>
  );
}

