import React from 'react';
import './podcastlinks.css'; // Import your CSS file

const PodcastLinks: React.FC = () => {
  return (
    <section className="subscribe-links">
        <div className="wrapper-social-cards">
            <a 
                id="1"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/github.png"
                    loading="lazy" 
                    alt="GitHub icon" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Follow on</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">GitHub</p>
                </div>
            </a>

            <a 
                id="2"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/linkedin.png"
                    loading="lazy" 
                    alt="LinkedIn logo" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Follow on</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">LinkedIn</p>
                </div>
            </a>

            <a 
                id="3"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/instagram.jpg"
                    loading="lazy" 
                    alt="instagram icon" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Follow on</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">Instagram</p>
                </div>
            </a>

            <a 
                id="4"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/facebook.png"
                    loading="lazy" 
                    alt="Facebook Logo" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Follow On</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">Facebook</p>
                </div>
            </a>

            <a 
                id="5"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/twitter.png"
                    loading="lazy" 
                    alt="Twitter logo" 
                    className="icon-1x1-xlarge"
                />
                <div>
                    <p className="text-size-tiny text-color-charcoal"><strong>Follow On</strong></p>
                    <p className="text-size-medium text-color-charcoal text-weight-bold">X</p>
                </div>
            </a>
        </div>
    </section>
  );
};

export default PodcastLinks;
