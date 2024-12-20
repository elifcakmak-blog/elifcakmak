"use client"; // Add this directive at the top

import { useState } from 'react';
import Navigation from "../../0/0-navigation/navigation";
import CustomCursor from "../../0/0-cursor/page";
import Footer from "../../0/0-footer/footer"

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
    } catch (error) {
      setStatus('Failed to subscribe');
    }
  };

  return (
    <div>
        {/* Import Cursor */}
        <CustomCursor />

        {/* Import Navigation */}
        <Navigation /> 
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Subscribe</button>

      {status && <p>{status}</p>}
    </form>

    {/* Footer */}
    <Footer />

    </div>
  );
}
