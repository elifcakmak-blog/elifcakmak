import React from 'react';
import './podcastlinks.css'; // Import your CSS file

const PodcastLinks: React.FC = () => {
  return (
    <section className="subscribe-links">
        <div className="wrapper-social-cards">
            <a 
                id="1"
                href="https://open.spotify.com/show/elif823"
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/spotify.png" 
                    loading="lazy" 
                    alt="Spotify icon" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Listen on</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">Spotify</p>
                </div>
            </a>

            <a 
                id="2"
                href="https://podcasts.apple.com/us/podcast/easyflow-media/idef145d4d-39e4-4c53-bd56-cdda4736cdeb"
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/applepodcasts.png"
                    loading="lazy" 
                    alt="Apple podcast logo" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Listen on</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">Apple Podcasts</p>
                </div>
            </a>

            <a 
                id="3"
                href="https://www.youtube.com/@EasyFlow-Media"
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/youtube.png"
                    loading="lazy" 
                    alt="Youtube icon" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Watch and Listen on</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">YouTube</p>
                </div>
            </a>

            <a 
                id="4"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/audible.jpg"
                    loading="lazy" 
                    alt="Audible Logo" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Listen On</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">Audible</p>
                </div>
            </a>

            <a 
                id="5"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/amazon.jpg"
                    loading="lazy" 
                    alt="Amazon Music logo" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Listen On</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">Amazon</p>
                </div>
            </a>
        </div>
    </section>
  );
};

export default PodcastLinks;
