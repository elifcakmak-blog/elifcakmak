"use client";

import Image from 'next/image';
import { useEffect, useState } from "react";
import './navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to a section smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector('.header') as HTMLElement | null;
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
      <header className={`header ${scrolled ? "shrink" : ""}`}>
        {/* Logo */}
        <button onClick={() => scrollToSection("hero")} className="logo-link">
          <Image
            src="/elif-logo/MuslimSuccessPath-Logo.svg"
            alt="Muslim Success Path Logo"
            width={100}
            height={100}
            className="logo"
          />
        </button>

        <nav className="nav">
          {/* Hero Section */}
          <button onClick={() => scrollToSection("hero")} className="newsletter-button">
            <Image
              src="/logos/homebutton.svg"
              alt="Hero"
              width={70}
              height={40}
            />
          </button>

          {/* Statistics Section */}
          <button onClick={() => scrollToSection("statistics")} className="newsletter-button">
            <Image
              src="/logos/statistics.svg"
              alt="Statistics"
              width={70}
              height={40}
            />
          </button>

          {/* About Section */}
          <button onClick={() => scrollToSection("about")} className="newsletter-button">
            <Image
              src="/logos/about.svg"
              alt="About"
              width={70}
              height={40}
            />
          </button>

          {/* Services Section */}
          <button onClick={() => scrollToSection("services")} className="newsletter-button">
            <Image
              src="/logos/services.svg"
              alt="Services"
              width={70}
              height={40}
            />
          </button>

          {/* Crocheting Section */}
          <button onClick={() => scrollToSection("crocheting")} className="newsletter-button">
            <Image
              src="/logos/crocheting.svg"
              alt="Crocheting"
              width={70}
              height={40}
            />
          </button>

          {/* Islam Section */}
          <button onClick={() => scrollToSection("islam")} className="newsletter-button">
            <Image
              src="/logos/Islam.svg"
              alt="Islam"
              width={70}
              height={40}
            />
          </button>

          {/* Organization Section */}
          <button onClick={() => scrollToSection("organization")} className="newsletter-button">
            <Image
              src="/logos/organizing.svg"
              alt="Organization"
              width={70}
              height={40}
            />
          </button>

          {/* Roadmap Section */}
          <button onClick={() => scrollToSection("roadmap")} className="newsletter-button">
            <Image
              src="/logos/roadmap.svg"
              alt="Roadmap"
              width={70}
              height={40}
            />
          </button>

          {/* Newsletter Section */}
          <button onClick={() => scrollToSection("newsletter")} className="newsletter-button">
            Newsletter
          </button>
        </nav>
      </header>

      {/* Spacer div as a separate element */}
      <div style={{ height: '300px' }} /> {/* matches header height */}
    </>
  );
};

export default Navigation;