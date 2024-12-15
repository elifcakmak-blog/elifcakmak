import React from 'react';
import './podcastlinks.css'; // Import your CSS file

const PodcastLinks: React.FC = () => {
  return (
    <section className="subscribe-links">
        <div className="wrapper-social-cards">
            <a 
                id="w-node-ef7f8c61-3a19-1240-09fb-4b0f42a46302-6855791d"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="https://cdn.prod.website-files.com/667be57bf3c0ff272fe5509c/667ea753a0ff490bde30efb0_Group%2033847%20(5).png" 
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
                id="w-node-efa5de4a-55c9-886a-41c6-42ee53df6737-6855791d"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="https://cdn.prod.website-files.com/667be57bf3c0ff272fe5509c/667ea754bba934514aea5646_image%20350.png" 
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
                id="w-node-_621cfc86-d516-345e-f1ea-3aa9e08049f2-6855791d"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="https://cdn.prod.website-files.com/667be57bf3c0ff272fe5509c/667ea753deb88d3142d5e4da_Group%2033848%20(1).png" 
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
                id="w-node-f7eaffbf-b348-e5d4-40e9-2d02465f7865-6855791d"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="https://cdn.prod.website-files.com/667be57bf3c0ff272fe5509c/669b562cfa9968951bb405ee_audible.jpg" 
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
                id="w-node-_7a12fc44-a34c-5208-ba07-ac03bcc28c51-6855791d"
                href=""
                target="_blank"
                className="card is-social-link w-inline-block"
            >
                <img 
                    src="https://cdn.prod.website-files.com/667be57bf3c0ff272fe5509c/669b56f731cb89881b093811_amazon-music.jpg" 
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
