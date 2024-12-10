import React from 'react';
import './podcastlinks.css';

const PodcastLinks: React.FC = () => {
  return (
    <section className="subscribe-links">
        <h2>Subscribe to Effortless Works</h2>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">Listen on Spotify Podcasts</a>
        <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer">Listen on Apple Podcasts</a>
    </section>
  );
};

export default PodcastLinks;