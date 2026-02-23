"use client";

import PageNavigation from '../../0/0-pages-nav/pages-nav';
import BooksHero from '../../9/books-hero/page';
import BooksLinks from '../../9/books-links/page';
import BooksList from '../../9/books-list/page';
import EffortlessResources from '../../9/books-resources/newsletter'
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import


export default function Home() {
  return (
    <div className="books-container">
            
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <PageNavigation /> 

      <img src={"../page-titles/books.svg"}alt="Books Title Image"className="books-image"style={{width: '40%',objectFit: 'cover',borderRadius: '8px',display: 'block',margin: '0 auto', marginTop: "20px",}}/>

      {/* Import BooksHero */}
      <BooksHero />

      {/* Import Books Links */}
      <BooksLinks />

      {/* Import Books Episodes */}
      <BooksList />  

      {/* Import Effortless Resources */}
      <EffortlessResources />  
    
      {/* Footer */}
      <Footer />

    </div>
  );
}
