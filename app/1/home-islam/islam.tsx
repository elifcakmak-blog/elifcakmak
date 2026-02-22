import React from 'react';
import Link from 'next/link';
import './islam.css';

const IslamSection: React.FC = () => {
  return (
    <section className="islam-section py-8 mb-8">
      <div className="islam-content px-8 ml-0">
        <h1 className="text-4xl font-bold text-hover-yellow">Islamic Resources</h1>
        <p className="mt-4 text-3lg text-hover-yellow">
          Discover Islamic books, courses, and resources with step-by-step guides to help you learn and grow. You will also find related handmade items—like crocheted hijabs and prayer accessories—to complement your journey.
        </p>
        {/* Button to navigate to the About Me page */}
        <Link href="/2/islam">
          <button className="btn-islam mt-6 px-4 py-2 bg-[#fef74b] text-[#0b0228] font-semibold rounded hover:bg-[#504081] hover:text-[#fff] transition duration-300">
            Explore Resources
          </button>
        </Link>
      </div>
    </section>
  );
};

export default IslamSection;
