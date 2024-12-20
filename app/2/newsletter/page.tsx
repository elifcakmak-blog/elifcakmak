"use client"; // Add this directive at the top

import { useState } from 'react';
import Navigation from "../../0/0-navigation/navigation";
import CustomCursor from "../../0/0-cursor/page";
import Footer from "../../0/0-footer/footer";
import './newsletter.css';

export default function NewsletterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {  // Typing the event parameter
    e.preventDefault();
    setStatus('Subscribing...');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Successfully subscribed!');
      } else {
        setStatus(data.message || 'Something went wrong');
      }
    } catch {
      setStatus('Failed to subscribe');
    }
  };

  return (
    <div>
      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation />

      <div className="floating-card">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#4bfe5a] mb-5">Join Our Newsletter</h1>
          <p className="text-[#fef74b]">Resources to help you simplify your work effortlessly</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="cursor-none">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="cursor-none"
          />

          <label htmlFor="email" className="cursor-none">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="cursor-none"
          />

          <button type="submit">Subscribe</button>
        </form>

        {status && (
          <p className={`mt-4 ${status.includes('Successfully') ? 'status-success' : status.includes('Failed') ? 'status-fail' : 'status-info'}`}>
            {status}
          </p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
