import React from 'react';
import Link from 'next/link';
import './apps.css';

const NewsletterSection: React.FC = () => {
  return (
    <section className="apps bg-[#504081] text-[#fff] py-16 text-center">
      <h2 className="text-3xl font-bold text-[#fef74b]">Explore Effortless Works Resources</h2>
      <p className="mt-4 text-lg">See the variety of data management sytems available </p>
      <Link href="https://www.effortlessworks.store/" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary mt-6">Get Organized</button>
      </Link>


    </section>
  );
};

export default NewsletterSection;
