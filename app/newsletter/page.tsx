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
            src="https://d95b7f78.sibforms.com/serve/MUIFAM59Z7N-u5pMLbnFAA3vmFFcks9r6XZcf6PSI1u8W-_mVanPXaypSE585H1stRl6BpTZOknidULKxwJKUCSt80cKO7akQF3a9fq9GuU1Ec41YP5vq-5qEMJb2MM31QxxzpiaZ_TkYXe1uJYF1qStzQJOkxaO9g0_fnp3JtV_ELS17bOmiTQckEONA9T4yPnU6ndddp8NzI1o"
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
