// HeroSection.tsx
import React from 'react';
import './podcasthero.css'; // Import your CSS file

const PodcastHero: React.FC = () => {
  return (
    <section className="hero">
        <div className="hero-content">
            <h1>Welcome to The Effortless Works Podcast</h1>
            <p>Your go-to podcast for mastering data management and staying organized effortlessly.</p>
        </div>
    </section>
  );
};

export default PodcastHero;
