import React from 'react';
import './absection2.css';
import Image from 'next/image';

const AbSection2 = () => {
  return (
    <section className="ab-section2 py-8 mb-8">
      <div className="ab-content2 px-8 ml-0">
<p className="mt-4 ab-content2 text-hover-yellow">
Muslim Success Path and Effortless Works are dedicated to helping Muslims on a journey of faith, growth, and purposeful living. Our mission is to help you strengthen your iman, develop your skills, and live intentionally in every aspect of life.
</p>
<p className="mt-4 ab-content2 text-hover-yellow">
Since 2024, we’ve been sharing insights and practical resources to make learning, worship, and daily routines more meaningful and manageable. By combining experience, knowledge, and a focus on faith-centered growth, we help Muslims cultivate clarity, discipline, and purpose in their lives.
</p>
<p className="mt-4 ab-content2 text-hover-yellow">
Today, we are recognized as a trusted companion on the path of intentional Muslim living. Through our educational resources, tools, and creative works, we empower Muslims to strengthen their faith, nurture their talents, and live in alignment with their values.
</p>
<p className="mt-4 ab-content2 text-hover-yellow">
Our goal is to help you simplify your life, grow spiritually, and achieve your aspirations—whether through our learning resources, practical tools, or creative projects designed to inspire and uplift.
</p>
<Image
    src="/Website-Logo/MuslimSuccessPath-White.svg" // Replace with your image path
    alt="Muslim Success Path"
    width={600} 
    height={400} 
  />
</div>
    </section>
  );
};

export default AbSection2;
