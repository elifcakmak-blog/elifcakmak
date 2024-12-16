"use client";

import Navigation from '../../0/0-navigation/navigation';
import PodcastHero from '../../6/podcast-hero/page';
import PodcastLinks from '../../6/podcast-links/page';
import PodcastEpisodes from '../../6/podcast-episodes/page';
import EffortlessResources from '../../6/podcast-resources/newsletter'
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import


export default function Home() {
  return (
    <div className="podcast-container">
            
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation /> 

      <img src={"../page-titles/podcast.svg"}alt="Podcast Title Image"className="podcast-image"style={{width: '40%',objectFit: 'cover',borderRadius: '8px',display: 'block',margin: '0 auto', marginTop: "20px",}}/>

      {/* Import PodcastHero */}
      <PodcastHero />

      {/* Import Podcast Links */}
      <PodcastLinks />

      {/* Import Podcast Episodes */}
      <PodcastEpisodes />  

      {/* Import Effortless Resources */}
      <EffortlessResources />  
    
      {/* Footer */}
      <Footer />

    </div>
  );
}
