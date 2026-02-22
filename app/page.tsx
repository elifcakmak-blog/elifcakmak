"use client";

import Navigation from './0/0-navigation/navigation'; // Navigation Bar Import
import HeroSection from './1/home-hero/hero'; // Hero Section Import
import StatisticsSection from './1/home-statistics/statistics'; // Statistics Import
import AboutSection from './1/home-about/about'; // About Section Import
import ServicesSection from './1/home-services/services'; // Services Section Import
import NewsletterSection from './1/home-newsletter/newsletter'; // Newsletter Import
import Footer from './0/0-footer/footer'; // Footer Import
import CustomCursor from './0/0-cursor/page'; // Cursor Import
import CrochetingSection from './1/home-crocheting/crocheting'; // Crocheting Placeholder
import IslamSection from './1/home-islam/islam'; // Islam Placeholder
import OrganizationSection from './1/home-organization/organization'; // Organization Placeholder
import RoadmapSection from './1/home-roadmap/roadmap'; // Organization Placeholder


import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Screen size tracking
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className="home-container">
      {/* Fonts / SEO / Breadcrumb */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://elifcakmak.blog" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.elifcakmak.blog/2/about" },
                { "@type": "ListItem", "position": 3, "name": "Videos", "item": "https://www.elifcakmak.blog/2/videos" },
                { "@type": "ListItem", "position": 4, "name": "Podcast", "item": "https://www.elifcakmak.blog/2/podcast" },
                { "@type": "ListItem", "position": 5, "name": "Apps", "item": "https://www.elifcakmak.blog/2/apps" },
                { "@type": "ListItem", "position": 6, "name": "Books", "item": "https://www.elifcakmak.blog/2/books" },
                { "@type": "ListItem", "position": 7, "name": "Road Map", "item": "https://www.elifcakmak.blog/3" },
                { "@type": "ListItem", "position": 8, "name": "Newsletter", "item": "https://www.elifcakmak.blog/2/newsletter" }
              ]
            })
          }}
        />
      </Head>

      {/* Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navigation />

      {/* Sections with IDs for scrolling */}
      <section id="hero">
        <HeroSection isMobile={isMobile} />
      </section>

      <section id="statistics">
        <StatisticsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="crocheting">
        <CrochetingSection />
      </section>

      <section id="islam">
        <IslamSection />
      </section>

      <section id="organization">
        <OrganizationSection />
      </section>

      <section id="roadmap">
        <RoadmapSection />
      </section>

      <section id="newsletter">
        <NewsletterSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}