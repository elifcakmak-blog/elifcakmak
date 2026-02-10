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
          ? "url('/backend-images/herobackground-mobile.svg')" // Image for mobile view
          : "url('/backend-images/herobackground.svg')", // Image for desktop view
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-xl">
        <h1 className="text-3xl md:text-4xl font-thin tracking-tight text-hover-yellow">Muslim Success Path Begins</h1>
        <h1 className="text-3xl md:text-4xl font-thin tracking-tight mt-7 max-w-lg text-hover-yellow">with</h1>
        <h1 className="text-3xl md:text-3xl font-bold tracking-wider mt-4 text-yellow-300 text-hover-grow">Faith, Learning, & Intentional Living</h1>
        <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right text-hover-yellow">Every resource here is designed to support your success path in Islam, every step of the way. 🌙✨</p>
        <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right text-hover-yellow">We are on a mission to provide faith-centered learning resources, inspiration, and systems—from Islamic books, podcasts, courses, and videos, to handmade crochet items and practical organizational tools—all created to help you grow, stay organized, and live with intention through Islam.</p>
        <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right text-hover-yellow">When learning, creating, and organizing in line with Islam is effortless, life becomes simpler. It becomes more intentional. And it becomes more meaningful—one habit, one system, and one step at a time.</p>
        <div className="mt-6 max-w-lg flex flex-wrap gap-3 justify-center md:justify-end">
          <Link href="/2/crocheting" className="btn-primary">
            Crocheting
          </Link>
          <Link href="/2/islam" className="btn-secondary">
            Islam
          </Link>
          <Link href="/2/organization" className="btn-3">
            Organization
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
