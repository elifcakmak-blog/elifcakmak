"use client";

import PageNavigation from '../../0/0-pages-nav/pages-nav';
import VideoHero from '../../7/video-hero/page';
import Videolinks from '../../7/video-links/page';
import VideoEpisodes from '../../7/video-episodes/page';
import EffortlessResources from "../../7/video-resources/newsletter"
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import


export default function Home() {
  return (
    <div className="podcast-container">
            
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <PageNavigation /> 

      <img src={"../page-titles/videos.svg"}alt="Podcast Title Image"className="podcast-image"style={{width: '40%',objectFit: 'cover',borderRadius: '8px',display: 'block',margin: '0 auto', marginTop: "20px",}}/>

      {/* Import Hero */}
      <VideoHero />

      {/* Import Links */}
      <Videolinks />

      {/* Import  Episodes */}
      <VideoEpisodes />  
      
      {/* Import  Effortless Resources */}
      <EffortlessResources />  
    
      {/* Footer */}
      <Footer />

    </div>
  );
}
