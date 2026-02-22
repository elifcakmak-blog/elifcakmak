"use client";

import Image from 'next/image';
import Link from 'next/link';
import './pages-nav.css';

const PagesNav = () => {
  return (
    <>
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

          <Link href="/" className="newsletter-button">
            <Image src="/logos/homebutton.svg" alt="Home" width={70} height={40} />
          </Link>

          <Link href="/2/about" className="newsletter-button">
            <Image src="/logos/about.svg" alt="About" width={70} height={40} />
          </Link>

          <Link href="/2/crocheting" className="newsletter-button">
            <Image src="/logos/crocheting.svg" alt="Crocheting" width={70} height={40} />
          </Link>

          <Link href="/2/islam" className="newsletter-button">
            <Image src="/logos/Islam.svg" alt="Islam" width={70} height={40} />
          </Link>

          <Link href="/2/organization" className="newsletter-button">
            <Image src="/logos/organizing.svg" alt="Organization" width={70} height={40} />
          </Link>

          <Link href="/2/videos" className="newsletter-button">
            <Image src="/logos/videos-logo.svg" alt="Videos" width={70} height={40} />
          </Link>

          <Link href="/2/podcast" className="newsletter-button">
            <Image src="/logos/podcast-logo.svg" alt="Podcasts" width={70} height={40} />
          </Link>

          <Link href="/2/apps" className="newsletter-button">
            <Image src="/logos/apps-logo.svg" alt="Apps" width={70} height={40} />
          </Link>

          <Link href="/2/books" className="newsletter-button">
            <Image src="/logos/books-logo.svg" alt="Books" width={70} height={40} />
          </Link>

          {/* External links stay as <a> */}
          <a
            href="https://www.effortlessworks.store/000002/courses"
            className="newsletter-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/logos/courses-logo.svg" alt="Courses" width={70} height={40} />
          </a>

          <a
            href="https://github.com/Muslim-Success-Path"
            className="newsletter-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/logos/github-logo.svg" alt="GitHub" width={70} height={40} />
          </a>

          <Link href="/3" className="newsletter-button">
            <Image src="/logos/roadmap.svg" alt="Roadmap" width={70} height={40} />
          </Link>

        </nav>
      </header>

      <div style={{ height: '300px' }} />
    </>
  );
};

export default PagesNav;