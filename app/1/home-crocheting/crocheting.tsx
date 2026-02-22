import React from 'react';
import Link from 'next/link';
import './crocheting.css';

const CrochetingSection: React.FC = () => {
  return (
    <section className="crocheting-section py-8 mb-8">
      <div className="crocheting-content px-8 ml-0">
        <h1 className="text-4xl font-bold text-hover-yellow">Patterns &amp; Creations</h1>
        <p className="mt-4 text-3lg text-hover-yellow">
          Discover crochet and Sentro knitting machine patterns with easy-to-follow step-by-step video guides. Explore patterns and handmade pieces—including hijabs, abayas, other Muslim clothing, and handbags—that you can create or enjoy.
        </p>
        {/* Button to navigate to the About Me page */}
        <Link href="/2/crocheting">
          <button className="btn-crocheting mt-6 px-4 py-2 bg-[#fef74b] text-[#0b0228] font-semibold rounded hover:bg-[#504081] hover:text-[#fff] transition duration-300">
            Explore Patterns
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CrochetingSection;
