"use client"; // Add this directive to make this a client component

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import to get the current path

export default function Home() {
  const pathname = usePathname(); // Get current path

  return (
    <div className="home-container">
      <header className="header">
        <Link href="/" className="logo-link">
          <Image src="/elifcakmaklogo.svg" alt="Elif Cakmak Logo" width={100} height={100} className="logo" />
        </Link>
        <nav className="nav">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link href="/podcast" className={`nav-link ${pathname === '/podcast' ? 'active' : ''}`}>Podcast</Link>
          <Link href="/apps" className={`nav-link ${pathname === '/apps' ? 'active' : ''}`}>Apps</Link>
          <Link href="/books" className={`nav-link ${pathname === '/books' ? 'active' : ''}`}>Books</Link>
          <Link href="/newsletter" className={`newsletter-button ${pathname === '/newsletter' ? 'active' : ''}`}>Newsletter</Link>
        </nav>
      </header>

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
