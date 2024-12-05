import React from 'react';
import Link from 'next/link';
import './abservices2.css';

const AbServices2 = () => {
  // Create a number of lanterns to spread evenly across the bottom
  const lanternCount = 30; // Adjust as needed for more/less lanterns

  return (
    <section className="services bg-[#504081] py-16 relative opacity-80 overflow-hidden">
      <div className="lanterns">
        {/* Render lanterns */}
        {Array.from({ length: lanternCount }).map((_, index) => (
          <div key={index} className="lantern" style={{ animationDelay: `${(index * 0.2) % 8}s` }}></div>
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="service-card p-8 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform h-[300px]">
            <h3 className="text-xl font-bold">Podcasts</h3>
            <p className="mt-2 text-gray-600">Simplified Insights on Data and Software</p>
            <Link href="/1-podcast">
              <button className="btn-primary mt-4">Listen</button>
            </Link>
          </div>
          <div className="service-card p-8 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform h-[300px]">
            <h3 className="text-xl font-bold">Apps</h3>
            <p className="mt-2 text-gray-600">Conquer Tasks and Learning Objectives</p>
            <Link href="/1-apps">
              <button className="btn-primary mt-4">Download</button>
            </Link>
          </div>
          <div className="service-card p-8 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform h-[300px]">
            <h3 className="text-xl font-bold">GitHub</h3>
            <p className="mt-2 text-gray-600">Explore my Current Software Development Projects</p>
            <Link href="https://github.com/elifcakmak-blog">
              <button className="btn-primary mt-4">Explore</button>
            </Link>
          </div>
          <div className="service-card p-8 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform h-[300px]">
            <h3 className="text-xl font-bold">Roadmap</h3>
            <p className="mt-2 text-gray-600">See Upcoming Updates and Milestones I&apos;m Completing</p>
            <Link href="/1-roadmap">
              <button className="btn-primary mt-4">Observe</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbServices2;
