"use client";

import Navigation from '../0-navigation/navigation';
import PodcastHero from '../6-podcast-hero/page';
import PodcastLinks from '../6-podcast-links/page';
import PodcastEpisodes from '../6-podcast-episodes/page';
import Footer from '../0-footer/footer';
import CustomCursor from '../0-cursor/page'; // Cursor Import

export default function Home() {
  return (
    <div className="podcast-container">
      
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation /> 

      <img src={"../podcast.svg"}alt="Logo"className="podcast-image"style={{width: '40%',objectFit: 'cover',borderRadius: '8px',display: 'block',margin: '0 auto'}}/>

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
