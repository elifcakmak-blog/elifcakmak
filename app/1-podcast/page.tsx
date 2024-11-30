"use client";

import UnderConstruction from '../3-UnderConstruction/UnderConstruction';
import Navigation from '../0-navigation/navigation';

export default function Home() {
  return (
    <div className="home-container">
      {/* Import Navigation */}
      <Navigation /> 

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}
      <footer className="footer bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 Elif Cakmak. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
