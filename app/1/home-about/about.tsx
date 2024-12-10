import React from 'react';
import Link from 'next/link';
import './about.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section py-8 mb-8">
      <div className="about-content px-8 ml-0">
        <h1 className="text-4xl font-bold text-hover-yellow">About Elif</h1>
        <p className="mt-4 text-3lg text-hover-yellow">
          Elif Çakmak is a data management expert, software developer, and content creator. With a passion for simplifying complex processes, she provides practical solutions that help individuals and businesses achieve effortless productivity. Through her tools and insights, she empowers others to work smarter and live better.
        </p>
        {/* Button to navigate to the About Me page */}
        <Link href="/2/about">
          <button className="btn-about mt-6 px-4 py-2 bg-[#fef74b] text-[#0b0228] font-semibold rounded hover:bg-[#504081] hover:text-[#fff] transition duration-300">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
