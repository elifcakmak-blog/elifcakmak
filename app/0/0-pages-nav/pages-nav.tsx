/* pages-nav.tsx */
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import './pages-nav.css';

const PagesNav = () => {
  const [scrolled, setScrolled] = useState(false); // shrink state
  const [showNav, setShowNav] = useState(true);    // mobile nav visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth <= 768;

      // Shrink for desktop or mobile scroll past 50px
      setScrolled(currentScrollY > 50);

      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // scrolling down → hide nav buttons
          setShowNav(false);
        } else {
          // scrolling up → show nav buttons
          setShowNav(true);
        }
      } else {
        // always show nav on desktop
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`Pages-header ${scrolled ? "shrink" : ""}`}>
        {/* Logo always visible */}
        <Link href="/" className="Pages-logo-link">
          <Image
            src="/Website-Logo/MuslimSuccessPath-Logo.svg"
            alt="Muslim Success Path Logo"
            width={100}
            height={100}
            className="Pages-logo"
          />
        </Link>

        {/* Nav buttons visible only if showNav is true */}
        {showNav && (
          <nav className="Pages-nav">
            <Link href="/" className="Pages-newsletter-button">
              <Image src="/logos/homebutton.svg" alt="Home" width={70} height={40} />
            </Link>
            <Link href="/2/about" className="Pages-newsletter-button">
              <Image src="/logos/about.svg" alt="About" width={70} height={40} />
            </Link>
            <Link href="/2/crocheting" className="Pages-newsletter-button">
              <Image src="/logos/crocheting.svg" alt="Crocheting" width={70} height={40} />
            </Link>
            <Link href="/2/islam" className="Pages-newsletter-button">
              <Image src="/logos/Islam.svg" alt="Islam" width={70} height={40} />
            </Link>
            <Link href="/2/organization" className="Pages-newsletter-button">
              <Image src="/logos/organizing.svg" alt="Organization" width={70} height={40} />
            </Link>
            <Link href="/2/videos" className="Pages-newsletter-button">
              <Image src="/logos/videos-logo.svg" alt="Videos" width={70} height={40} />
            </Link>
            <Link href="/2/podcast" className="Pages-newsletter-button">
              <Image src="/logos/podcast-logo.svg" alt="Podcasts" width={70} height={40} />
            </Link>
            <Link href="/2/apps" className="Pages-newsletter-button">
              <Image src="/logos/apps-logo.svg" alt="Apps" width={70} height={40} />
            </Link>
            <Link href="/2/books" className="Pages-newsletter-button">
              <Image src="/logos/books-logo.svg" alt="Books" width={70} height={40} />
            </Link>
            <a
              href="https://www.effortlessworks.store/000002/courses"
              className="Pages-newsletter-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/logos/courses-logo.svg" alt="Courses" width={70} height={40} />
            </a>
            <a
              href="https://github.com/Muslim-Success-Path"
              className="Pages-newsletter-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/logos/github-logo.svg" alt="GitHub" width={70} height={40} />
            </a>
            <Link href="/3" className="Pages-newsletter-button">
              <Image src="/logos/roadmap.svg" alt="Roadmap" width={70} height={40} />
            </Link>
          </nav>
        )}
      </header>

      <div style={{ height: '310px' }} />
    </>
  );
};

export default PagesNav;