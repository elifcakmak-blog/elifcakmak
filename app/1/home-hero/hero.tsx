import React from 'react';
import Link from 'next/link';
import './hero.css';

interface HeroSectionProps {
  isMobile: boolean; // Prop to determine the view type
}

const HeroSection: React.FC<HeroSectionProps> = ({ isMobile }) => {
  return (
    <section
      className="hero bg-cover bg-center text-center flex items-center justify-center h-screen relative"
      style={{
        backgroundImage: isMobile
          ? "url('/backend-images/herobackground-mobile.png')" // Image for mobile view
          : "url('/backend-images/herobackground.png')", // Image for desktop view
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-xl">
        <h1 className="text-3xl md:text-4xl font-thin tracking-tight text-hover-yellow">Effortless Works Begins</h1>
        <h1 className="text-3xl md:text-4xl font-thin tracking-tight mt-7 max-w-lg text-hover-yellow">with</h1>
        <h1 className="text-3xl md:text-3xl font-bold tracking-wider mt-4 text-yellow-300 text-hover-grow">Exploring, Learning, and Building</h1>
        <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right text-hover-yellow">Every resource here can help you learn new skills, gain knowledge, or bring your ideas to life.</p>
        <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right text-hover-yellow">I&apos;m on a mission to provide learning resources, inspiration, and systems—from crocheting and handcrafted items, to Islamic teachings and books, to tools that help you organize your life—so you can grow and bulid with ease.</p>
        <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right text-hover-yellow">Because when we make learning, building, and organizing effortless, life becomes simpler, more intentional, and more meaningful—one skill, one build, and one system at a time.</p>
        <div className="mt-6 max-w-lg">
          <Link 
            href="/2/crocheting" 
            className="btn-primary"
            rel="noopener noreferrer" // Security best practice
          >
            Crocheting
          </Link>
          <Link 
            href="/2/islam" 
            className="btn-secondary"
            rel="noopener noreferrer" // Security best practice
          >
            Islam
          </Link>
          <Link 
            href="/2/organization" 
            className="btn-3"
            rel="noopener noreferrer" // Security best practice
          >
            Organization
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
