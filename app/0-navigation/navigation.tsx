"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname(); // Get current path

  return (
    <header className="header">
      <Link href="/" className="logo-link">
        <Image src="/elifcakmaklogo.svg" alt="Elif Cakmak Logo" width={100} height={100} className="logo" />
      </Link>
      <nav className="nav">
        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/1-about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link href="/1-podcast" className={`nav-link ${pathname === '/podcast' ? 'active' : ''}`}>Podcast</Link>
        <Link href="/1-apps" className={`nav-link ${pathname === '/apps' ? 'active' : ''}`}>Apps</Link>
        <Link href="/1-books" className={`nav-link ${pathname === '/books' ? 'active' : ''}`}>Books</Link>
        <Link href="/1-newsletter" className={`newsletter-button ${pathname === '/newsletter' ? 'active' : ''}`}>Newsletter</Link>
      </nav>
    </header>
  );
};

export default Navigation;
