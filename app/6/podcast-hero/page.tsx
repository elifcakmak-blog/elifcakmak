// HeroSection.tsx
import React from 'react';
import './podcasthero.css'; // Your episode1-specific CSS

const PodcastHero: React.FC = () => {
  return (
    <section className="episode1-hero">
      <div className="episode1-hero-content">
        <h1>The Muslim Success Path Podcast</h1>
        <p>Your go-to podcast for faithful, intentional, creative, organized living.</p>
      </div>
    </section>
  );
};

export default PodcastHero;