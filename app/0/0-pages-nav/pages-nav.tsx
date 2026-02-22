"use client";

import Image from 'next/image';
import './pages-nav.css';

const PagesNav = () => {
  return (
    <>
      <header className="header">
        {/* Logo: goes to full website home page */}
        <a href="/" className="logo-link">
          <Image
            src="/elif-logo/MuslimSuccessPath-Logo.svg"
            alt="Muslim Success Path Logo"
            width={100}
            height={100}
            className="logo"
          />
        </a>

        <nav className="nav">
          {/* Home Button */}
          <a href="/" className="newsletter-button">
            <Image
              src="/logos/homebutton.svg"
              alt="Home"
              width={70}
              height={40}
            />
          </a>

          {/* About */}
          <a href="/2/about" className="newsletter-button">
            <Image
              src="/logos/about.svg"
              alt="About"
              width={70}
              height={40}
            />
          </a>

          {/* Crocheting Page */}
          <a href="/2/crocheting" className="newsletter-button">
            <Image
              src="/logos/crocheting.svg"
              alt="Crocheting"
              width={70}
              height={40}
            />
          </a>

          {/* Islam Page */}
          <a href="/2/islam" className="newsletter-button">
            <Image
              src="/logos/Islam.svg"
              alt="Islam"
              width={70}
              height={40}
            />
          </a>

          {/* Organization Page */}
          <a href="/2/organization" className="newsletter-button">
            <Image
              src="/logos/organizing.svg"
              alt="Organization"
              width={70}
              height={40}
            />
          </a>

          {/* Videos Page */}
          <a href="/2/videos" className="newsletter-button">
            <Image
              src="/logos/videos-logo.svg"
              alt="Videos"
              width={70}
              height={40}
            />
          </a>

          {/* Podcasts Page */}
          <a href="/2/podcast" className="newsletter-button">
            <Image
              src="/logos/podcast-logo.svg"
              alt="Podcasts"
              width={70}
              height={40}
            />
          </a>

          {/* Apps Page */}
          <a href="/2/apps" className="newsletter-button">
            <Image
              src="/logos/apps-logo.svg"
              alt="Apps"
              width={70}
              height={40}
            />
          </a>

          {/* Books Page */}
          <a href="/2/books" className="newsletter-button">
            <Image
              src="/logos/books-logo.svg"
              alt="Books"
              width={70}
              height={40}
            />
          </a>

          {/* Courses Page */}
            <a
            href="https://www.effortlessworks.store/000002/courses"
            className="newsletter-button"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                src="/logos/courses-logo.svg"
                alt="Courses"
                width={70}
                height={40}
            />
            </a>

         {/* GitHub Page: external link */}
            <a
            href="https://github.com/Muslim-Success-Path"
            className="newsletter-button"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                src="/logos/github-logo.svg"
                alt="GitHub"
                width={70}
                height={40}
            />
            </a>

          {/* Roadmap Page */}
          <a href="/3" className="newsletter-button">
            <Image
              src="/logos/roadmap.svg"
              alt="Roadmap"
              width={70}
              height={40}
            />
          </a>
        </nav>
      </header>

      {/* Spacer div to match header height */}
      <div style={{ height: '300px' }} />
    </>
  );
};

export default PagesNav;