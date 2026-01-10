import React from 'react';
import Link from 'next/link';
import './statistics.css';

type Statistic = {
  label: string;
  value: string;
  color: string;
  href: string;      // internal path or external URL
  external?: boolean; // true if external URL
};

const statistics: Statistic[] = [
  {
    label: 'Crocheted Pieces',
    value: '0+',
    color: '#fef74b',
    href: '/2/crocheting',
    external: false,
  },
  {
    label: 'Books Written',
    value: '0+',
    color: '#fef74b',
    href: '/2/books',
    external: false,
  },
  {
    label: 'Organizational Tools',
    value: '0+',
    color: '#fef74b',
    href: '/2/organization',
    external: false,
  },
  {
    label: 'Videos Created',
    value: '0+',
    color: '#fef74b',
    href: '/2/videos',
    external: false,
  },
  {
    label: 'Podcast Episodes',
    value: '0+',
    color: '#fef74b',
    href: '/2/podcast',
    external: false,
  },
  {
    label: 'Apps and Websites Developed',
    value: '0+',
    color: '#fef74b',
    href: '/2/apps',
    external: false,
  },
  {
    label: 'Courses Created',
    value: '0+',
    color: '#fef74b',
    href: 'https://www.effortlessworks.store/000002/courses',
    external: true,
  },
  {
    label: 'Etsy Sales',
    value: '0+',
    color: '#fef74b',
    href: 'https://www.etsy.com/shop/EffortlessWorks',
    external: true,
  },
  {
    label: 'Years Expertise',
    value: '6+',
    color: '#fef74b',
    href: '/2/about',
  },
];

const StatisticsSection: React.FC = () => {
  return (
    <section className="statistics h-70 py-8 bg-[#efe1ff]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-3 gap-8 mt-[-10px]">
          {statistics.map((stat, index) => {
            const content = (
              <>
                <h3
                  className="
                    text-2xl transition-all duration-300
                    group-hover:drop-shadow-[0_0_10px_#fef74b]
                  "
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    mt-2 text-[#efe1ff]
                    transition-all duration-300
                    group-hover:text-[#fef74b]
                    group-hover:drop-shadow-[0_0_8px_#fef74b]
                  "
                >
                  {stat.label}
                </p>
              </>
            );

            return stat.external ? (
              <a
                key={index}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group stat-card p-6 bg-[#504081]
                  shadow-md rounded-md text-center
                  hover:scale-105 transition-transform cursor-pointer
                "
              >
                {content}
              </a>
            ) : (
              <Link
                key={index}
                href={stat.href}
                className="
                  group stat-card p-6 bg-[#504081]
                  shadow-md rounded-md text-center
                  hover:scale-105 transition-transform cursor-pointer
                "
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
