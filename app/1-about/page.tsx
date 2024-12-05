"use client";

import Navigation from '../0-navigation/navigation';
import './about.css';
import Footer from '../0-footer/footer';
import CustomCursor from '../0-cursor/page'; // Cursor Import
import Link from 'next/link'; // Import Link if you're using Next.js

export default function About() {
  // Check if the screen is mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div className="about-container">

      {/* Import Cursor */}
      <CustomCursor />

      {/* Import Navigation */}
      <Navigation />

      <img 
        src={"../about.svg"} 
        alt="Logo" 
        style={{
          width: "50%",
          objectFit: "cover",
          borderRadius: "8px",
          display: "block",
          margin: "0 auto", // Centers the image
        }} 
      />

      {/* About Section */}

      <section className="ab-section2 py-8 mb-8">
        <div className="ab-content2 px-8 ml-0">
          <p className="mt-4 text-3lg text-hover-yellow">
          At just 23, I led a high-performing sales team that generated $180,000 in three months, and I realized that simplifying tasks was the secret to unlocking business efficiency. Over four years in sales, supporting a top CEO, and leading multiple teams, I mastered the art of building scalable systems that make work effortless and results achievable. From designing KPI tracking systems to creating company-wide data management tools, I’ve learned that the right system can transform operations, save time, and eliminate chaos. Now, as the founder of Effortless Works and Easy Flow Media, my mission is to design intuitive, scalable systems that simplify daily operations and let businesses focus on what truly matters.
          </p>
        </div>
      </section>

      {/* Services Section */}

      <section className="services bg-[#504081] py-16 relative opacity-80 overflow-hidden">
      <div className="rain">
        {/*multiple layers of rain for a stronger effect */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="rain-drop"
            style={{ animationDelay: `${index * 0.1}s`, left: `${Math.random() * 100}vw` }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="services-content text-center mb-8">
          <div className="bg-[#fef74b] p-6 rounded-lg shadow-lg inline-block animate-spinShake border-4 border-[#1c0e45] hover:transform hover:translateY(-8px) transition-transform">
            <h2 className="text-3xl font-bold text-[#504081]">EasyFlow Media Presents</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <h3 className="text-xl font-bold">Podcasts</h3>
            <p className="mt-2 text-gray-600">Simplified Insights on Data and Software</p>
            <Link href="/1-podcast">
              <button className="btn-primary mt-4">Listen</button>
            </Link>
          </div>
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <h3 className="text-xl font-bold">Apps</h3>
            <p className="mt-2 text-gray-600">Conquer Tasks and Learning Objectives</p>
            <Link href="/1-apps">
              <button className="btn-primary mt-4">Download</button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Hero Section */}
    <section
        className="hero bg-cover bg-center text-center flex items-center justify-center h-screen relative"
        style={{
          backgroundImage: isMobile
            ? "url('/images/herobackground-mobile.png')" // Image for mobile view
            : "url('/images/herobackground.png')", // Image for desktop view
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-xl">
          <h1 className="text-3xl md:text-4xl font-thin tracking-tight text-hover-yellow">Effortless Work Begins</h1>
          <h1 className="text-3xl md:text-4xl font-thin tracking-tight mt-7 max-w-lg text-hover-yellow">with</h1>
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider mt-4 text-yellow-300 text-hover-grow">Simplifying Tasks</h1>
          <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-left text-hover-yellow">Every tool you use can simplify your tasks and make work effortless.</p>
          <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-left text-hover-yellow">I&apos;m on a mission to provide the resources that transform complexity into simplicity, so you can focus on what matters.</p>
          <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-left text-hover-yellow">Because when we simplify the process, we make work effortless, one system at a time.</p>
          <div className="mt-6 max-w-lg">
            <Link
              href="https://www.effortlessworks.elifcakmak.blog/"
              className="btn-primary"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              Learn More
            </Link>
            <Link
              href="https://discord.com/invite/mr7K6eaC"
              className="btn-secondary"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              Join Discord
            </Link>
          </div>
        </div>
      </section>

      <section className="cta bg-[#504081] text-[#efe1ff] py-16 text-center">
      <h2 className="text-3xl font-bold text-[#4bfe5a]">Join My Newsletter</h2>
      <p className="mt-4 text-lg">Stay updated on my latest projects and insights.</p>
      <Link href="/1-newsletter">
        <button className="btn-primary mt-6">Subscribe Now</button>
      </Link>
    </section>
      

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
