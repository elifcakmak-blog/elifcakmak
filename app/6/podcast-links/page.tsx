// PodcastLinks.tsx
import React from 'react';
import './podcastlinks.css'; // Episode1-specific CSS

const PodcastLinks: React.FC = () => {
  return (
    <section className="episode1-subscribe-links">
      <div className="episode1-wrapper-social-cards">
        <a
          id="1"
          href="https://open.spotify.com/show/elif823"
          target="_blank"
          className="episode1-card"
        >
          <img
            src="/easyflow-socials/spotify.png"
            loading="lazy"
            alt="Spotify icon"
            className="episode1-icon-1x1-xlarge"
          />
          <div>
            <p className="episode1-text-size-tiny episode1-text-color-charcoal">
              <strong>Listen on</strong>
            </p>
            <p className="episode1-text-size-medium episode1-text-color-charcoal">
              Spotify
            </p>
          </div>
        </a>

        <a
          id="2"
          href="https://podcasts.apple.com/us/podcast/easyflow-media/idef145d4d-39e4-4c53-bd56-cdda4736cdeb"
          target="_blank"
          className="episode1-card"
        >
          <img
            src="/easyflow-socials/applepodcasts.png"
            loading="lazy"
            alt="Apple podcast logo"
            className="episode1-icon-1x1-xlarge"
          />
          <div>
            <p className="episode1-text-size-tiny episode1-text-color-charcoal">
              <strong>Listen on</strong>
            </p>
            <p className="episode1-text-size-medium episode1-text-color-charcoal">
              Apple Podcasts
            </p>
          </div>
        </a>

        <a
          id="3"
          href="https://www.youtube.com/@EasyFlow-Media"
          target="_blank"
          className="episode1-card"
        >
          <img
            src="/easyflow-socials/youtube.png"
            loading="lazy"
            alt="Youtube icon"
            className="episode1-icon-1x1-xlarge"
          />
          <div>
            <p className="episode1-text-size-tiny episode1-text-color-charcoal">
              <strong>Watch and Listen on</strong>
            </p>
            <p className="episode1-text-size-medium episode1-text-color-charcoal">
              YouTube
            </p>
          </div>
        </a>

        <a
          id="4"
          href=""
          target="_blank"
          className="episode1-card"
        >
          <img
            src="/easyflow-socials/audible.jpg"
            loading="lazy"
            alt="Audible Logo"
            className="episode1-icon-1x1-xlarge"
          />
          <div>
            <p className="episode1-text-size-tiny episode1-text-color-charcoal">
              <strong>Listen On</strong>
            </p>
            <p className="episode1-text-size-medium episode1-text-color-charcoal">
              Audible
            </p>
          </div>
        </a>

        <a
          id="5"
          href=""
          target="_blank"
          className="episode1-card"
        >
          <img
            src="/easyflow-socials/amazon.jpg"
            loading="lazy"
            alt="Amazon Music logo"
            className="episode1-icon-1x1-xlarge"
          />
          <div>
            <p className="episode1-text-size-tiny episode1-text-color-charcoal">
              <strong>Listen On</strong>
            </p>
            <p className="episode1-text-size-medium episode1-text-color-charcoal">
              Amazon
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default PodcastLinks;