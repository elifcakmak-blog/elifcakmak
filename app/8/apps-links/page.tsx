import React from 'react';
import './apps-links.css'; // Import your CSS file

const AppsLinks: React.FC = () => {
  return (
    <section className="apps_subscribe-links">
        <div className="apps_wrapper-social-cards">
            <a 
                id="1"
                href="https://github.com/Muslim-Success-Path"
                target="_blank"
                className="apps_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/github.png"
                    loading="lazy" 
                    alt="GitHub icon" 
                    className="apps_icon-1x1-xlarge"
                />
                <div>
                    <p className="apps_text-size-tiny apps_text-color-charcoal"><strong>Follow on</strong></p>
                    <p className="apps_text-size-medium apps_text-color-charcoal apps_text-weight-bold">GitHub</p>
                </div>
            </a>

            <a 
                id="2"
                href="https://www.linkedin.com/company/muslim-success-path/about"
                target="_blank"
                className="apps_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/linkedin.png"
                    loading="lazy" 
                    alt="LinkedIn logo" 
                    className="apps_icon-1x1-xlarge"
                />
                <div>
                    <p className="apps_text-size-tiny apps_text-color-charcoal"><strong>Follow on</strong></p>
                    <p className="apps_text-size-medium apps_text-color-charcoal apps_text-weight-bold">LinkedIn</p>
                </div>
            </a>

            <a 
                id="3"
                href="https://www.instagram.com/muslim.success.path"
                target="_blank"
                className="apps_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/instagram.jpg"
                    loading="lazy" 
                    alt="Instagram icon" 
                    className="apps_icon-1x1-xlarge"
                />
                <div>
                    <p className="apps_text-size-tiny apps_text-color-charcoal"><strong>Follow on</strong></p>
                    <p className="apps_text-size-medium apps_text-color-charcoal apps_text-weight-bold">Instagram</p>
                </div>
            </a>

            <a 
                id="5"
                href="https://x.com/muslimsuccess_"
                target="_blank"
                className="apps_card is-social-link w-inline-block"
            >
                <img 
                    src="/easyflow-socials/twitter.png"
                    loading="lazy" 
                    alt="X logo" 
                    className="apps_icon-1x1-xlarge"
                />
                <div>
                    <p className="apps_text-size-tiny apps_text-color-charcoal"><strong>Follow on</strong></p>
                    <p className="apps_text-size-medium apps_text-color-charcoal apps_text-weight-bold">X</p>
                </div>
            </a>
        </div>
    </section>
  );
};

export default AppsLinks;