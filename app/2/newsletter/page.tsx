"use client";

import Navigation from '../../0/0-navigation/navigation';
import './newsletter.css';
import React, { useState } from 'react';
import Footer from '../../0/0-footer/footer';
import CustomCursor from '../../0/0-cursor/page'; // Cursor Import

const NewsletterSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Call your Next.js API route to create the campaign
      const response = await fetch('/api/createCampaign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        alert('Subscription successful!');
        setName('');
        setEmail('');
      } else {
        alert('There was an issue subscribing. Please try again later.');
      }
    } catch (error: any) {
      console.error('Error creating campaign:', error.response ? error.response.body : error.message);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div>
      {/* Import Custom Cursor */}
      <CustomCursor />
      {/* Import Navigation */}
      <Navigation />
      <section className="cta bg-[#504081] text-[#0d0d0c] py-20 px-10 min-h-[400px] text-center cursor-none">
        <h2 className="text-3xl font-bold text-[#4bfe5a]">Join My Newsletter</h2>
        <p className="mt-4 text-lg">Stay updated on my latest projects and insights.</p>
        <form onSubmit={handleSubmit} className="mt-6 newsletter-form cursor-none">
          <label htmlFor="name" className="block mr-2 cursor-none">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field cursor-none"
          />

          <label htmlFor="email" className="block mt-4 mb-2 cursor-none">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field cursor-none"
          />

          <div className="mt-10">
            <button type="submit" className="btn-primary">Subscribe</button>
          </div>
        </form>
      </section>
      {/* Import Footer */}
      <Footer />
    </div>
  );
};

export default NewsletterSection;
