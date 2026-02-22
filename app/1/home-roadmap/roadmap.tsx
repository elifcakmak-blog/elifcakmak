import React from 'react';
import Link from 'next/link';
import './roadmap.css';

const RoadmapSection: React.FC = () => {
  return (
    <section className="roadmap-section py-8 mb-8">
      <div className="roadmap-content px-8 ml-0">
        <h1 className="text-4xl font-bold text-hover-yellow">Roadmap</h1>
        <p className="mt-4 text-3lg text-hover-yellow">
          The Roadmap outlines all upcoming steps and future projects within Muslim Success Path. It provides a clear view of what is being developed, launched, and improved to help you grow, stay organized, and succeed.
        </p>
        {/* Button to navigate to the About Me page */}
        <Link href="/3">
          <button className="btn-roadmap mt-6 px-4 py-2 bg-[#fef74b] text-[#0b0228] font-semibold rounded hover:bg-[#504081] hover:text-[#fff] transition duration-300">
            Explore The Map
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RoadmapSection;
