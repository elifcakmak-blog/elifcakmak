import React from 'react';
import './statistics.css';

const statistics = [
  { label: 'Crocheted Pieces', value: '0+', color: '#fef74b' },
  { label: 'Books Written', value: '0+', color: '#fef74b' },
  { label: 'Organizational Tools', value: '0+', color: '#fef74b' },
  { label: 'Videos Created', value: '0+', color: '#fef74b' },
  { label: 'Podcast Episodes', value: '0+', color: '#fef74b' },
  { label: 'Apps and Websites Developed', value: '3+', color: '#fef74b' },
  { label: 'Courses Created', value: '0+', color: '#fef74b' },
];

const StatisticsSection: React.FC = () => {
  return (
    <section className="statistics h-70 py-8 bg-[#efe1ff]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-3 gap-8 mt-[-10px]">
          {statistics.map((stat, index) => (
            <div key={index} className="stat-card p-6 bg-[#504081] shadow-md rounded-md text-center">
              <h3 className="text-2xl" style={{ color: stat.color }}>{stat.value}</h3>
              <p className="mt-2 text-[#504081]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
