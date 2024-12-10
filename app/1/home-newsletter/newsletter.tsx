import React from 'react';
import Link from 'next/link';
import './newsletter.css';

const NewsletterSection: React.FC = () => {
  return (
    <section className="cta bg-[#504081] text-[#efe1ff] py-16 text-center">
      <h2 className="text-3xl font-bold text-[#4bfe5a]">Join My Newsletter</h2>
      <p className="mt-4 text-lg">Stay updated on my latest projects and insights.</p>
      <Link href="/2/newsletter">
        <button className="btn-primary mt-6">Subscribe Now</button>
      </Link>
    </section>
  );
};

export default NewsletterSection;
