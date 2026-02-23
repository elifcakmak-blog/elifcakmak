import React from 'react';
import './video-links.css'; // Import your video-specific CSS

const VideoLinks: React.FC = () => {
  return (
    <section className="video_subscribe-links">
        <div className="video_wrapper-social-cards">
            <a 
                id="1"
                href="https://www.youtube.com/@MuslimSuccessPath"
                target="_blank"
                className="video_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/youtube.png"
                    loading="lazy" 
                    alt="Youtube icon" 
                    className="video_icon-1x1-xlarge"
                />
                <div>
                    <p className="video_text-size-tiny video_text-color-charcoal"><strong>Watch on</strong></p>
                    <p className="video_text-size-medium video_text-color-charcoal video_text-weight-bold">YouTube</p>
                </div>
            </a>

            <a 
                id="2"
                href="https://www.tiktok.com/@muslim.success.path"
                target="_blank"
                className="video_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/tiktok.png"
                    loading="lazy" 
                    alt="TikTok logo" 
                    className="video_icon-1x1-xlarge"
                />
                <div>
                    <p className="video_text-size-tiny video_text-color-charcoal"><strong>Watch on</strong></p>
                    <p className="video_text-size-medium video_text-color-charcoal video_text-weight-bold">TikTok</p>
                </div>
            </a>

            <a 
                id="3"
                href="https://www.instagram.com/muslim.success.path"
                target="_blank"
                className="video_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/instagram.jpg"
                    loading="lazy" 
                    alt="Instagram icon" 
                    className="video_icon-1x1-xlarge"
                />
                <div>
                    <p className="video_text-size-tiny video_text-color-charcoal"><strong>Watch on</strong></p>
                    <p className="video_text-size-medium video_text-color-charcoal video_text-weight-bold">Instagram</p>
                </div>
            </a>

            <a 
                id="5"
                href="https://x.com/muslimsuccess_"
                target="_blank"
                className="video_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/twitter.png"
                    loading="lazy" 
                    alt="Twitter logo" 
                    className="video_icon-1x1-xlarge"
                />
                <div>
                    <p className="video_text-size-tiny video_text-color-charcoal"><strong>Watch on</strong></p>
                    <p className="video_text-size-medium video_text-color-charcoal video_text-weight-bold">X</p>
                </div>
            </a>
        </div>
    </section>
  );
};

export default VideoLinks;