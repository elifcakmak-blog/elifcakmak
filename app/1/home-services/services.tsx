import React from 'react';
import Link from 'next/link';
import './services.css';

const ServicesSection: React.FC = () => {
  return (
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
          <div className="easyflow-title bg-[#fef74b] p-6 rounded-lg shadow-lg inline-block animate-spinShake border-4 border-[#1c0e45] hover:transform hover:translateY(-8px) transition-transform">
            <h2 className="text-3xl font-bold text-[#efe1ff]">EasyFlow Media Presents</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <h3 className="text-xl font-bold">Podcasts</h3>
            <p className="mt-2 text-gray-600">Simplified Insights on Data and Software</p>
            <Link href="/2/podcast">
              <button className="btn-primary mt-4">Listen</button>
            </Link>
          </div>
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <h3 className="text-xl font-bold">Apps</h3>
            <p className="mt-2 text-gray-600">Conquer Tasks and Learning Objectives</p>
            <Link href="/2/apps">
              <button className="btn-primary mt-4">Download</button>
            </Link>
          </div>
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <h3 className="text-xl font-bold">Books</h3>
            <p className="mt-2 text-gray-600">Wise Wisdom To Aid Your Own Story</p>
            <Link href="/2/books">
              <button className="btn-primary mt-4">Read</button>
            </Link>
          </div>
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <h3 className="text-xl font-bold">Courses</h3>
            <p className="mt-2 text-gray-600">Learn, Grow, and Achieve Mastery</p>
            <Link href="https://www.effortlessworks.elifcakmak.blog/courses" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary mt-4">Learn</button>
            </Link>
          </div>
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <h3 className="text-xl font-bold">Videos</h3>
            <p className="mt-2 text-gray-600">Tutorials That Upgrade Your Skill Set</p>
            <Link href="/2/videos">
              <button className="btn-primary mt-4">Watch</button>
            </Link>
          </div>
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <h3 className="text-xl font-bold">Effortless Works</h3>
            <p className="mt-2 text-gray-600">Simplify Your Tasks Effortlessly</p>
            <Link href="https://www.effortlessworks.store/" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary mt-4">Simplify</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
