import React from 'react';
import './about.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section py-8 mb-8">
      <div className="about-content px-8 ml-0">
        <h1 className="text-4xl font-bold text-hover-yellow">About Elif</h1>
        <p className="mt-4 text-3lg text-hover-yellow">
          Elif Çakmak is a data management expert, software developer, and content creator. With a passion for simplifying complex processes, she provides practical solutions that help individuals and businesses achieve effortless productivity. Through her tools and insights, she empowers others to work smarter and live better.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
