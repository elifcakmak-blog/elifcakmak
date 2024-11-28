"use client"; // Add this directive to make this a client component

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import to get the current path

export default function Home() {
  const pathname = usePathname(); // Get current path

  return (
    <div className="home-container">

      <header className="header">
        <Link href="/" className="logo-link">
          <Image src="/elifcakmaklogo.svg" alt="Elif Cakmak Logo" width={100} height={100} className="logo" />
        </Link>
        <nav className="nav">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link href="/podcast" className={`nav-link ${pathname === '/podcast' ? 'active' : ''}`}>Podcast</Link>
          <Link href="/apps" className={`nav-link ${pathname === '/apps' ? 'active' : ''}`}>Apps</Link>
          <Link href="/books" className={`nav-link ${pathname === '/books' ? 'active' : ''}`}>Books</Link>
          <button className="newsletter-button">Newsletter</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero bg-cover bg-center text-center flex items-center justify-center h-screen relative"
      style={{ backgroundImage: "url('/images/herobackground.png')" }}>
        {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
  <div className="relative z-10 text-white max-w-xl">
    <h1 className="text-4xl md:text-6xl font-thin tracking-tight">Effortless Work Begins</h1>
    <h1 className="text-4xl md:text-6xl font-thin tracking-tight mt-7 max-w-lg">with</h1>
    <h1 className="text-4xl md:text-6xl font-bold tracking-wider mt-4 text-yellow-300">Simplifying Tasks</h1>
    <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right">Every tool you use can simplify your tasks and make work effortless.</p>
    <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right">I&apos;m on a mission to provide the resources that transform complexity into simplicity, so you can focus on what matters.</p>
    <p className="mt-5 text-sm md:text-xl max-w-lg mx-auto text-center lg:text-right">Because when we simplify the process, we make work effortless, one system at a time.</p>
    <div className="mt-6 max-w-lg">
      <Link href="/about" className="btn-primary">Learn More</Link>
      <Link href="/contact" className="btn-secondary ml-4">Contact Me</Link>
    </div>
  </div>
</section>

      {/* Introduction Section */}
      <section className="about-section py-16 text-center">
        <div className="container mx-auto px-4">
          <Image src="/portrait.jpg" alt="Elif Cakmak" width={150} height={150} className="mx-auto rounded-full" />
          <h2 className="text-3xl font-bold mt-6">About Me</h2>
          <p className="mt-4 text-lg text-gray-700">
            Hi, I'm Elif! A passionate creator of inspiring podcasts, innovative apps, and captivating books. Let's explore the possibilities together.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">What I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="service-card p-6 bg-white shadow-md rounded-md text-center">
              <h3 className="text-xl font-bold">Podcasts</h3>
              <p className="mt-2 text-gray-600">Listen to thought-provoking episodes on diverse topics.</p>
              <Link href="/podcast" className="text-blue-500 hover:underline mt-4 block">Explore Podcasts</Link>
            </div>
            <div className="service-card p-6 bg-white shadow-md rounded-md text-center">
              <h3 className="text-xl font-bold">Apps</h3>
              <p className="mt-2 text-gray-600">Discover apps designed to simplify your life.</p>
              <Link href="/apps" className="text-blue-500 hover:underline mt-4 block">Explore Apps</Link>
            </div>
            <div className="service-card p-6 bg-white shadow-md rounded-md text-center">
              <h3 className="text-xl font-bold">Books</h3>
              <p className="mt-2 text-gray-600">Read engaging and insightful stories.</p>
              <Link href="/books" className="text-blue-500 hover:underline mt-4 block">Explore Books</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta bg-blue-600 text-white py-16 text-center">
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
