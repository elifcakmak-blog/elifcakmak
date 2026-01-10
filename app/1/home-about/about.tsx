import React from 'react';
import Link from 'next/link';
import './about.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section py-8 mb-8">
      <div className="about-content px-8 ml-0">
        <h1 className="text-4xl font-bold text-hover-yellow">About Elif</h1>
        <p className="mt-4 text-3lg text-hover-yellow">
          Elif Çakmak is a creator and educator focused on making learning, creating, and organizing effortless. With a passion for exploring new skills—from crocheting and handcrafted work, to Islamic knowledge and Qur’an learning, to organizational spreadsheets and planners—she shares practical resources that support purposeful growth. Through her learning resources, handmade items, and organizational systems, she empowers others to build a simpler, more intentional, and meaningful life.
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
