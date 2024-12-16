"use client";

import Navigation from '../../0/0-navigation/navigation';
import BooksHero from '../../9/books-hero/page';
import BooksLinks from '../../9/books-links/page';
import BooksList from '../../9/books-list/page';
import EffortlessResources from '../../9/books-resources/newsletter'
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import


export default function Home() {
  return (
    <div className="podcast-container">
            
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation /> 

      <img src={"../page-titles/books.svg"}alt="Podcast Title Image"className="podcast-image"style={{width: '40%',objectFit: 'cover',borderRadius: '8px',display: 'block',margin: '0 auto', marginTop: "20px",}}/>

      {/* Import PodcastHero */}
      <BooksHero />

      {/* Import Podcast Links */}
      <BooksLinks />

      {/* Import Podcast Episodes */}
      <BooksList />  

      {/* Import Effortless Resources */}
      <EffortlessResources />  
    
      {/* Footer */}
      <Footer />

    </div>
  );
}
