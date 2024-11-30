"use client"; // Add this directive to make this a client component

import { usePathname } from 'next/navigation'; // Import to get the current path
import UnderConstruction from '../3-UnderConstruction/UnderConstruction'; // Import the new component
import Navigation from '../0-navigation/navigation';

export default function Home() {
  const pathname = usePathname(); // Get current path

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
