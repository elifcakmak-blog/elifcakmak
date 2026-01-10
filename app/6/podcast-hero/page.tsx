// HeroSection.tsx
import React from 'react';
import './podcasthero.css'; // Import your CSS file

const PodcastHero: React.FC = () => {
  return (
    <section className="hero">
        <div className="hero-content">
            <h1>The Muslim Success Path Podcast</h1>
            <p>Your go-to podcast for faithful, intentional, creative, organized living.</p>
        </div>
    </section>
  );
};

export default PodcastHero;
