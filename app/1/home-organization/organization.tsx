import React from 'react';
import Link from 'next/link';
import './organization.css';

const OrganizationSection: React.FC = () => {
  return (
    <section className="organization-section py-8 mb-8">
      <div className="organization-content px-8 ml-0">
        <h1 className="text-4xl font-bold text-hover-yellow">Organize Your Life</h1>
        <p className="mt-4 text-3lg text-hover-yellow">
          Take control of your personal life and business with practical tools and resources. Use customizable Google Sheets and Notion templates to organize tasks, track goals, and manage projects efficiently. You will also find courses, guides, and services to help you stay productive and achieve more.
        </p>
        {/* Button to navigate to the About Me page */}
        <Link href="/2/organization">
          <button className="btn-organization mt-6 px-4 py-2 bg-[#fef74b] text-[#0b0228] font-semibold rounded hover:bg-[#504081] hover:text-[#fff] transition duration-300">
            Get Organized
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OrganizationSection;
