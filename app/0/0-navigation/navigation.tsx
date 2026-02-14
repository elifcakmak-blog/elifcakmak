"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './navigation.css';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      {/* Logo */}
      <Link href="/" className="logo-link">
        <Image
          src="/elif-logo/MuslimSuccessPath-Logo.svg"
          alt="Muslim Success Path Logo"
          width={100}
          height={100}
          className="logo"
        />
      </Link>

      <nav className="nav">
        {/* Home */}
        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
          <Image
            src="/logos/homebutton.svg"
            alt="Home"
            width={70}
            height={40}
            className="nav-icon newsletter-button"
          />
        </Link>

        {/* Crocheting */}
        <Link href="/2/crocheting" className={`nav-link ${pathname === '/2/crocheting' ? 'active' : ''}`}>
          <Image
            src="/logos/crocheting.svg"
            alt="Crocheting"
            width={70}
            height={40}
            className="nav-icon newsletter-button"
          />
        </Link>

        {/* Islam */}
        <Link href="/2/islam" className={`nav-link ${pathname === '/2/islam' ? 'active' : ''}`}>
          <Image
            src="/logos/Islam.svg"
            alt="Islam"
            width={70}
            height={40}
            className="nav-icon newsletter-button"
          />
        </Link>

        {/* Organization */}
        <Link href="/2/organization" className={`nav-link ${pathname === '/2/organization' ? 'active' : ''}`}>
          <Image
            src="/logos/organizing.svg"
            alt="Organization"
            width={70}
            height={40}
            className="nav-icon newsletter-button"
          />
        </Link>

        {/* Road Map */}
        <Link href="/3" className={`nav-link ${pathname === '/3' ? 'active' : ''}`}>
          <Image
            src="/logos/roadmap.svg"
            alt="Road Map"
            width={70}
            height={40}
            className="nav-icon newsletter-button"
          />
        </Link>
        <Link href="/2/newsletter" className={`newsletter-button ${pathname === '/2/newsletter' ? 'active' : ''}`}>Newsletter</Link>
      </nav>
    </header>
  );
};

export default Navigation;
