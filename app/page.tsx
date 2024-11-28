import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <Link href="/" className="logo-link">
          <Image src="/elifcakmaklogo.svg" alt="Elif Cakmak Logo" width={100} height={100} className="logo" />
        </Link>
        <p className="header-subtitle">Your source for insights, apps, books, and more.</p>
      </header>
      <main className="main-content">
        <section className="about-section">
          <h2 className="section-title">About Me</h2>
          <p className="section-content">Content about Elif Cakmak&apos;s background, interests, and more.</p>
        </section>
        <section className="updates-section">
          <h2 className="section-title">Latest Updates</h2>
          <p className="section-content">Information about recent projects, blog posts, or news.</p>
        </section>
      </main>
    </div>
  );
}

