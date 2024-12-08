"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './about-hero.css';

const AboutHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Update the state based on screen width
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <section
      className="hero bg-cover bg-center text-center flex items-center justify-center h-screen relative"
      style={{
        backgroundImage: isMobile
          ? "url('/images/herobackground-mobile.png')" // Image for mobile view
          : "url('/images/herobackground.png')", // Image for desktop view
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-xl">
        <h1 className="text-3xl md:text-4xl font-thin tracking-tight text-hover-yellow">Effortless Work Begins</h1>
        <h1 className="text-3xl md:text-4xl font-thin tracking-tight mt-7 max-w-lg text-hover-yellow">with</h1>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider mt-4 text-yellow-300 text-hover-grow">Simplifying Tasks</h1>
        <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-left text-hover-yellow">
          Every tool you use can simplify your tasks and make work effortless.
        </p>
        <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-left text-hover-yellow">
          I&apos;m on a mission to provide the resources that transform complexity into simplicity, so you can focus on what matters.
        </p>
        <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-left text-hover-yellow">
          Because when we simplify the process, we make work effortless, one system at a time.
        </p>
        <div className="mt-6 max-w-lg">
          <Link
            href="https://www.effortlessworks.elifcakmak.blog/"
            className="btn-primary"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            Learn More
          </Link>
          <Link
            href="https://discord.com/invite/mr7K6eaC"
            className="btn-secondary"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            Join Discord
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
