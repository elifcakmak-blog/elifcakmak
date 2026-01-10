// OrganizeGallery.tsx
'use client';
import React, { useState } from 'react';
import OrganizeCard from '../../12/organize-cards/OrganizeCard';
import Filterorganize from '../filtermenu/filterorganize';
import './organize-gallery.css';

// Items with categories and tags
const items = [
  {
    title: 'Personal Tracker - Google Sheets',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: ['Life Tracker'], // from personalCategories
    businessCategories: [],       // none for this one
    types: ['Sheets'],            // from types
    audience: ['Adults', 'Women', 'Men'], // from gendersAges
    tags: ['Productivity', 'Planning'],   // optional extra tags
  },
  {
    title: 'Team Management Guide',
    images: [
      '/islam-images/coming-soon/7.png',
      '/islam-images/coming-soon/8.png',
    ],
    etsyLink: 'https://effortlessworks.etsy.com',
    categories: ['How Tos'],              // from personalCategories
    businessCategories: ['Management'],   // from businessCategories
    types: ['Courses'],                   // from types
    audience: ['Adults', 'Men'],          // from gendersAges
    tags: ['Leadership', 'Business'],     // optional
  },
  {
    title: 'Notion Project Builder',
    images: [
      '/islam-images/coming-soon/9.png',
      '/islam-images/coming-soon/10.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000014/notion-project',
    categories: ['Projects'],             // from personalCategories
    businessCategories: ['Back Office'],  // from businessCategories
    types: ['Notion'],                    // from types
    audience: ['Adults', 'Women'],        // from gendersAges
    tags: ['Organization'],               // optional
  },
  {
    title: 'Kids Learning Videos',
    images: [
      '/islam-images/coming-soon/11.png',
      '/islam-images/coming-soon/12.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000015/kids-videos',
    categories: ['How Tos'],              // personalCategories
    businessCategories: ['Services'],     // businessCategories
    types: ['Videos'],                    // types
    audience: ['Kids', 'Boys', 'Girls'], // gendersAges
    tags: ['Education', 'Fun'],           // optional
  },
];

// Filter options
const personalCategories = ['Life Tracker', 'Trackers', 'Projects', 'How Tos'];
const businessCategories = ['Services', 'Back Office', 'Management', 'How Tos'];
const types = ['Sheets', 'Notion', 'Builders', 'Videos', 'Courses'];
const gendersAges = ['Men', 'Women', 'Boys', 'Girls', 'Adults', 'Kids'];

const OrganizeGallery: React.FC = () => {
  const [selectedPersonal, setSelectedPersonal] = useState<string[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAudience, setSelectedAudience] = useState<string[]>([]);

  const handleChange = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    option: string,
    checked: boolean
  ) => {
    setter(prev => (checked ? [...prev, option] : prev.filter(o => o !== option)));
  };

  const filteredItems = items.filter(item => {
    const personalMatch =
      selectedPersonal.length === 0 ||
      item.categories?.some(c => selectedPersonal.includes(c));

    const businessMatch =
      selectedBusiness.length === 0 ||
      item.categories?.some(c => selectedBusiness.includes(c));

    const typesMatch =
      selectedTypes.length === 0 ||
      item.types?.some(t => selectedTypes.includes(t));

    const audienceMatch =
      selectedAudience.length === 0 ||
      item.audience?.some(a => selectedAudience.includes(a));

    return personalMatch && businessMatch && typesMatch && audienceMatch;
  });

  return (
    <div>
      {/* Filter bar */}
      <div className="filter-bar">
        <Filterorganize
          label="Personal"
          options={personalCategories}
          selectedOptions={selectedPersonal}
          onChange={(option, checked) => handleChange(setSelectedPersonal, option, checked)}
        />
        <Filterorganize
          label="Business"
          options={businessCategories}
          selectedOptions={selectedBusiness}
          onChange={(option, checked) => handleChange(setSelectedBusiness, option, checked)}
        />
        <Filterorganize
          label="Types"
          options={types}
          selectedOptions={selectedTypes}
          onChange={(option, checked) => handleChange(setSelectedTypes, option, checked)}
        />
        <Filterorganize
          label="Audience"
          options={gendersAges}
          selectedOptions={selectedAudience}
          onChange={(option, checked) => handleChange(setSelectedAudience, option, checked)}
        />
      </div>

      {/* Gallery */}
      <section className="gallery">
        {filteredItems.map((item, index) => (
          <OrganizeCard
            key={index}
            title={item.title}
            images={item.images}
            etsyLink={item.etsyLink}
            categories={item.categories}
            businessCategories={item.businessCategories}
            types={item.types}
            audience={item.audience}
            tags={item.tags}
            />
        ))}
      </section>
    </div>
  );
};

export default OrganizeGallery;
