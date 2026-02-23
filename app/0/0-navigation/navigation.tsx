"use client";

import Image from 'next/image';
import { useEffect, useState } from "react";
import './navigation.css';

const Navigation = () => {
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

  // Scroll to a section smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector('.Nav-header') as HTMLElement | null;
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const extraOffset = 15;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - navbarHeight - extraOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header className={`Nav-header ${scrolled ? "shrink" : ""}`}>
        {/* Logo always visible */}
        <button onClick={() => scrollToSection("hero")} className="Nav-logo-link">
          <Image
            src="/Website-Logo/MuslimSuccessPath-Logo.svg"
            alt="Muslim Success Path Logo"
            width={100}
            height={100}
            className="Nav-logo"
          />
        </button>

        {/* Nav buttons visible only if showNav is true */}
        {showNav && (
          <nav className="Nav-nav">
            <button onClick={() => scrollToSection("hero")} className="Nav-newsletter-button">
              <Image src="/logos/homebutton.svg" alt="Hero" width={70} height={40} />
            </button>
            <button onClick={() => scrollToSection("statistics")} className="Nav-newsletter-button">
              <Image src="/logos/statistics.svg" alt="Statistics" width={70} height={40} />
            </button>
            <button onClick={() => scrollToSection("about")} className="Nav-newsletter-button">
              <Image src="/logos/about.svg" alt="About" width={70} height={40} />
            </button>
            <button onClick={() => scrollToSection("services")} className="Nav-newsletter-button">
              <Image src="/logos/services.svg" alt="Services" width={70} height={40} />
            </button>
            <button onClick={() => scrollToSection("crocheting")} className="Nav-newsletter-button">
              <Image src="/logos/crocheting.svg" alt="Crocheting" width={70} height={40} />
            </button>
            <button onClick={() => scrollToSection("islam")} className="Nav-newsletter-button">
              <Image src="/logos/Islam.svg" alt="Islam" width={70} height={40} />
            </button>
            <button onClick={() => scrollToSection("organization")} className="Nav-newsletter-button">
              <Image src="/logos/organizing.svg" alt="Organization" width={70} height={40} />
            </button>
            <button onClick={() => scrollToSection("roadmap")} className="Nav-newsletter-button">
              <Image src="/logos/roadmap.svg" alt="Roadmap" width={70} height={40} />
            </button>
            <button onClick={() => scrollToSection("newsletter")} className="Nav-newsletter-button">
              Newsletter
            </button>
          </nav>
        )}
      </header>

      <div style={{ height: '310px' }} />
    </>
  );
};

export default Navigation;