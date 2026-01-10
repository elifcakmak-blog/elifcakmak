"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './navigation.css';

const Navigation = () => {
  const pathname = usePathname(); 

  return (
    <header className="header">
      <Link href="/" className="logo-link">
        <Image src="/elif-logo/elifcakmaklogo.svg" alt="Elif Çakmak Logo" width={100} height={100} className="logo" />
      </Link>
      <nav className="nav">
      <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Home</Link>
        <Link href="/2/crocheting" className={`nav-link ${pathname === '/2/crocheting' ? 'active' : ''}`}>Crocheting</Link>
        <Link href="/2/islam" className={`nav-link ${pathname === '/2/islam' ? 'active' : ''}`}>Islam</Link>
        <Link href="/2/organization" className={`nav-link ${pathname === '/2/organization' ? 'active' : ''}`}>Organization</Link>
        <Link href="/3" className={`nav-link ${pathname === '/3' ? 'active' : ''}`}>Road Map</Link>
        <Link href="/2/newsletter" className={`newsletter-button ${pathname === '/2/newsletter' ? 'active' : ''}`}>Newsletter</Link>
      </nav>
    </header>
  );
};

export default Navigation;
