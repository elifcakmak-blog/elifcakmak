import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './abservices2.css';

const AbServices2: React.FC = () => {
  const lanternCount = 30;

  return (
    <section className="services bg-[#504081] py-16 relative opacity-80 overflow-hidden">
      {/* Lantern animation */}
      <div className="lanterns">
        {Array.from({ length: lanternCount }).map((_, index) => (
          <div
            key={index}
            className="lantern"
            style={{ animationDelay: `${(index * 0.2) % 8}s` }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="services-content text-center mb-8">
          <div className="easyflow-title bg-[#fef74b] p-6 rounded-lg shadow-lg inline-block animate-spinShake border-4 border-[#1c0e45] hover:transform hover:translateY(-8px) transition-transform">
            <h2 className="text-3xl font-bold text-[#efe1ff]">
              Join The Muslim Success Path
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          
          {/* Podcasts */}
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <div className="flex justify-center mb-2">
              <Image src="/logos/podcast-logo.svg" alt="Podcasts" width={200} height={50} className="object-contain transition-transform hover:scale-110" />
            </div>
            <p className="mt-[-40px] text-gray-300 font-bold text-2xl">Podcasts</p>
            <Link href="/2/podcast">
              <button className="mt-[50px] btn-secondary">Listen</button>
            </Link>
          </div>

          {/* Websites & Apps */}
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <div className="flex justify-center mb-2">
              <Image src="/logos/apps-logo.svg" alt="Apps" width={200} height={70} className="object-contain transition-transform hover:scale-110" />
            </div>
            <p className="mt-[-40px] text-gray-300 font-bold text-2xl">Websites & Apps</p>
            <Link href="/2/apps">
              <button className="mt-[50px] btn-secondary">Explore</button>
            </Link>
          </div>

          {/* GitHub */}
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <div className="flex justify-center mb-2">
              <Image src="/logos/github-logo.svg" alt="GitHub" width={200} height={70} className="object-contain transition-transform hover:scale-110" />
            </div>
            <p className="mt-[-40px] text-gray-300 font-bold text-2xl">GitHub</p>
            <Link href="https://github.com/Muslim-Success-Path" target="_blank" rel="noopener noreferrer">
              <button className="mt-[50px] btn-secondary">Explore</button>
            </Link>
          </div>

          {/* Roadmap */}
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <div className="flex justify-center mb-2">
              <Image src="/logos/roadmap-logo.svg" alt="Roadmap" width={200} height={70} className="object-contain transition-transform hover:scale-110" />
            </div>
            <p className="mt-[-40px] text-gray-300 font-bold text-2xl">Roadmap</p>
            <Link href="/3">
              <button className="mt-[50px] btn-secondary">Observe</button>
            </Link>
          </div>

          {/* Videos */}
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <div className="flex justify-center mb-2">
              <Image src="/logos/videos-logo.svg" alt="Videos" width={200} height={70} className="object-contain transition-transform hover:scale-110" />
            </div>
            <p className="mt-[-40px] text-gray-300 font-bold text-2xl">Videos</p>
            <Link href="/2/videos">
              <button className="mt-[50px] btn-secondary">Watch</button>
            </Link>
          </div>

          {/* Courses */}
          <div className="service-card p-6 bg-[#1c0e45] shadow-md rounded-md text-center hover:shadow-lg transform hover:translateY(-4px) transition-transform">
            <div className="flex justify-center mb-2">
              <Image src="/logos/courses-logo.svg" alt="Courses" width={200} height={70} className="object-contain transition-transform hover:scale-110" />
            </div>
            <p className="mt-[-40px] text-gray-300 font-bold text-2xl">Courses</p>
            <Link href="https://www.effortlessworks.store/000002/courses" target="_blank" rel="noopener noreferrer">
              <button className="mt-[50px] btn-secondary">Learn</button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AbServices2;
