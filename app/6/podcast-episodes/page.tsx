import React from 'react';
import './episodes.css';

const PodcastEpisodes: React.FC = () => {
  return (
    <section className="featured-episodes">
        <h2>Featured Episodes</h2>
        <div className="episode-list">
          <div className="episode">
            <h3>Future Episode 1</h3>
            <p>...desc of the episode...</p>
            <button>Play</button>
          </div>
          <div className="episode">
            <h3>Future Episode 2</h3>
            <p>...desc of the episode...</p>
            <button>Play</button>
          </div>
          <div className="episode">
            <h3>Future Episode 3</h3>
            <p>...desc of the episode...</p>
            <button>Play</button>
          </div>
          <div className="episode">
            <h3>Future Episode 4</h3>
            <p>...desc of the episode...</p>
            <button>Play</button>
          </div>
          <div className="episode">
            <h3>Future Episode 5</h3>
            <p>...desc of the episode...</p>
            <button>Play</button>
          </div>
          {/* Add more episode components as needed */}
        </div>
      </section>
  );
};

export default PodcastEpisodes;