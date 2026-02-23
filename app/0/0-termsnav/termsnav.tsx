"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import './termsnav.css';

const TermsNav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth <= 768;

      setScrolled(currentScrollY > 50);

      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`Terms-header ${scrolled ? "shrink" : ""}`}>
        <Link href="/" className="Terms-logo-link">
          <Image
            src="/Website-Logo/MuslimSuccessPath-White.svg"
            alt="Muslim Success Path Logo"
            width={100}
            height={100}
            className="Terms-logo"
          />
        </Link>

        {showNav && (
          <nav className="Terms-nav">
            <Link href="/" className={`Terms-nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/4/privacy" className={`Terms-nav-link ${pathname === '/4/privacy' ? 'active' : ''}`}>Privacy</Link>
            <Link href="/4/terms" className={`Terms-nav-link ${pathname === '/4/terms' ? 'active' : ''}`}>Terms</Link>
            <Link href="/4/return" className={`Terms-nav-link ${pathname === '/4/return' ? 'active' : ''}`}>Returns</Link>
            <Link href="/4/cookies" className={`Terms-nav-link ${pathname === '/4/cookies' ? 'active' : ''}`}>Cookies</Link>
            <Link href="/4/disclaimer" className={`Terms-nav-link ${pathname === '/4/disclaimer' ? 'active' : ''}`}>Disclaimer</Link>
          </nav>
        )}
      </header>

      <div style={{ height: '150px' }} /> {/* Space for sticky header */}
    </>
  );
};

export default TermsNav;