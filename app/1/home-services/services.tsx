import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './services.css';

const ServicesSection: React.FC = () => {
  const services = [
    { title: 'Podcasts', img: '/logos/podcast-logo.svg', href: '/2/podcast', btn: 'Listen' },
    { title: 'Apps', img: '/logos/apps-logo.svg', href: '/2/apps', btn: 'Explore' },
    { title: 'Books', img: '/logos/books-logo.svg', href: '/2/books', btn: 'Read' },
    { title: 'Courses', img: '/logos/courses-logo.svg', href: 'https://www.effortlessworks.store/000002/courses', btn: 'Learn', external: true },
    { title: 'Videos', img: '/logos/videos-logo.svg', href: '/2/videos', btn: 'Watch' },
    { title: 'Organization', img: '/logos/effortless-logo.svg', href: 'https://www.effortlessworks.store/', btn: 'Simplify', external: true },
  ];

  return (
    <section className="services bg-[#504081] py-16 relative opacity-80 overflow-hidden">
      <div className="rain">
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
          <div className="easyflow-title bg-[#fef74b] p-6 rounded-lg shadow-lg inline-block animate-spinShake border-4 border-[#1c0e45] hover:transform hover:translateY-[-8px] transition-transform">
            <h2 className="text-3xl font-bold text-[#efe1ff]">
              Explore the Muslim Success Path
            </h2>
          </div>
        </div>

        {/* Flex grid wrapper with responsive card sizes */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                service-card 
                flex-1 
                min-w-[140px] max-w-[200px]       /* default mobile */
                sm:min-w-[160px] sm:max-w-[220px] /* small tablets */
                md:min-w-[180px] md:max-w-[250px] /* medium screens */
                lg:min-w-[237px] lg:max-w-[350px] /* large desktops */
                p-4 sm:p-4 md:p-6 
                bg-[#1c0e45] shadow-md rounded-md text-center 
                hover:shadow-lg transform hover:translateY-[-2px] transition-transform"
            >
              <div className="flex justify-center mb-2">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={150}
                  height={50}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="mt-2 text-gray-300 font-bold text-lg sm:text-xl md:text-2xl">{service.title}</p>
              {service.external ? (
                <a href={service.href} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 sm:mt-6 btn-secondary">{service.btn}</button>
                </a>
              ) : (
                <Link href={service.href}>
                  <button className="mt-4 sm:mt-6 btn-secondary">{service.btn}</button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;