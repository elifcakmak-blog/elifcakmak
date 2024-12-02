"use client";

import UnderConstruction from '../3-UnderConstruction/UnderConstruction'; 
import Navigation from '../0-navigation/navigation';
import Footer from '../0-footer/footer';
//import './return.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Import Navigation */}
      <Navigation /> 

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />

    </div>
  );
}