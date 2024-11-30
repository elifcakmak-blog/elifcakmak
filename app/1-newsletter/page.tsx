"use client"; // Add this directive to make this a client component

import { usePathname } from 'next/navigation'; // Import to get the current path
import Navigation from '../0-navigation/navigation'; // Adjust the path as needed
import './newsletter.css';

export default function Home() {
  const pathname = usePathname(); // Get current path

  return (
    <div className="home-container">
      {/* Import Navigation */}

      <Navigation /> 

      {/* Embedded Newsletter Form with Frame */}
      <div className="iframe-container">
        <div className="iframe-frame">
          <iframe
            title="Newsletter Signup"
            src="https://d95b7f78.sibforms.com/serve/MUIFAA9dv9CnNJlSRLU5ULFASpdA27XZGdENCNut-jzU1PspSDZLwpgmyJAExxwepRjSpHRrkfuLFsk0w4YGzYLJcIeX6RZh_uZefU93ennll9j601D9SuXGafSlZXKGhQTukDX1bq7KCMZWoohrx87RRi8iqy0TaeoL5AA9NwKh1RqLA6fPyQs_RU98aRD25xMan1X-UcetvRCy"
            scrolling="no"
            allowFullScreen
            className="iframe-element"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 Elif Cakmak. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
