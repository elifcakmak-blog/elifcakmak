"use client"; // Add this directive to make this a client component

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import to get the current path
import { useState, useEffect } from 'react'; // Import hooks

export default function Home() {
  const pathname = usePathname(); // Get current path
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  // Effect to handle screen width
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if width is 768px or less
    };
    updateScreenSize(); // Run on mount
    window.addEventListener("resize", updateScreenSize); // Listen for resize events
    return () => window.removeEventListener("resize", updateScreenSize); // Cleanup
  }, []);

  return (
    <div className="home-container">
      <header className="header">
        <Link href="/" className="logo-link">
          <Image src="/elifcakmaklogo.svg" alt="Elif Cakmak Logo" width={100} height={100} className="logo"/>
        </Link>
        <nav className="nav">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/about"className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link href="/podcast"className={`nav-link ${pathname === '/podcast' ? 'active' : ''}`}>Podcast</Link>
          <Link href="/apps"className={`nav-link ${pathname === '/apps' ? 'active' : ''}`}>Apps</Link>
          <Link href="/books"className={`nav-link ${pathname === '/books' ? 'active' : ''}`}>Books</Link>
          <Link href="/newsletter" className={`newsletter-button ${pathname === '/newsletter' ? 'active' : ''}`}>Newsletter</Link>
        </nav>
      </header>

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
    <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right text-hover-yellow">Every tool you use can simplify your tasks and make work effortless.</p>
    <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right text-hover-yellow">I&apos;m on a mission to provide the resources that transform complexity into simplicity, so you can focus on what matters.</p>
    <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right text-hover-yellow">Because when we simplify the process, we make work effortless, one system at a time.</p>
    <div className="mt-6 max-w-lg">
      <Link href="/about" className="btn-primary">Learn More</Link>
      <Link href="/contact" className="btn-secondary ml-4">Contact Me</Link>
    </div>
  </div>
</section>


{/* Statistics Section */}
<section className="statistics h-70 py-8 bg-[#efe1ff]">
  <div className="container mx-auto px-8">
    <div className="grid grid-cols-3 gap-8 mt-[-10px]">
      <div className="stat-card p-6 bg-[#504081] shadow-md rounded-md text-center">
        <h3 className="text-2xl text-[#fef74b] font-bold">4+</h3>
        <p className="mt-2 text-[#efe1ff]">Years Expertise</p>
      </div>
      <div className="stat-card p-6 bg-[#504081] shadow-md rounded-md text-center">
        <h3 className="text-2xl text-[#fef74b] font-bold">0+</h3>
        <p className="mt-2 text-[#efe1ff]">Media Creations</p>
      </div>
      <div className="stat-card p-6 bg-[#504081] shadow-md rounded-md text-center">
        <h3 className="text-2xl text-[#fef74b] font-bold">0+</h3>
        <p className="mt-2 text-[#efe1ff]">Digital Products</p>
      </div>
      <div className="stat-card p-6 bg-[#504081] shadow-md rounded-md text-center">
        <h3 className="text-2xl text-[#fef74b] font-bold">0+</h3>
        <p className="mt-2 text-[#efe1ff]">Podcast Episodes</p>
      </div>
      <div className="stat-card p-6 bg-[#504081] shadow-md rounded-md text-center">
        <h3 className="text-2xl text-[#fef74b] font-bold">0+</h3>
        <p className="mt-2 text-[#efe1ff]">Apps Developed</p>
      </div>
      <div className="stat-card p-6 bg-[#504081] shadow-md rounded-md text-center">
        <h3 className="text-2xl text-[#fef74b] font-bold">0+</h3>
        <p className="mt-2 text-[#efe1ff]">Publications</p>
      </div>
    </div>
  </div>
</section>




<section className="about-section py-8 mb-8">
  <div className="about-content px-8 ml-0">
    <h1 className="text-4xl font-bold text-hover-yellow">About Elif</h1>
    <p className="mt-4 text-3lg text-hover-yellow">Elif Cakmak is a data management expert, software developer, and content creator. With a passion for simplifying complex processes, she provides practical solutions that help individuals and businesses achieve effortless productivity. Through her tools and insights, she empowers others to work smarter and live better.</p>
  </div>
</section>


      {/* Services Section */}
      {/* Services Section */}
<section className="services bg-[#504081] py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-yellow-400">EasyFlow Media Presents</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div className="service-card p-6 bg-[#efe1ff] shadow-md rounded-md text-center">
        <h3 className="text-xl font-bold">Podcasts</h3>
        <p className="mt-2 text-gray-600">Simplified Insights on Data and Software</p>
        <Link href="/podcast">
          <button className="btn-primary mt-4">Explore</button>
        </Link>
      </div>
      <div className="service-card p-6 bg-[#efe1ff] shadow-md rounded-md text-center">
        <h3 className="text-xl font-bold">Apps</h3>
        <p className="mt-2 text-gray-600">Conquer Tasks and Learning Objectives</p>
        <Link href="/apps">
          <button className="btn-primary mt-4">Explore</button>
        </Link>
      </div>
      <div className="service-card p-6 bg-[#efe1ff] shadow-md rounded-md text-center">
        <h3 className="text-xl font-bold">Books</h3>
        <p className="mt-2 text-gray-600"> Wise Wisdom To Aid Your Own Story</p>
        <Link href="/books">
          <button className="btn-primary mt-4">Explore</button>
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Call-to-Action Section */}
      <section className="cta bg-[#504081] text-[#efe1ff] py-16 text-center">
        <h2 className="text-3xl font-bold">Join My Newsletter</h2>
        <p className="mt-4 text-lg">Stay updated on my latest projects and insights.</p>
        <button className="btn-primary mt-6">Subscribe Now</button>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 Elif Cakmak. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
