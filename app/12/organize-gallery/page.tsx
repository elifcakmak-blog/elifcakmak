// OrganizeGallery.tsx
'use client';
import React, { useState } from 'react';
import OrganizeCard from '../../12/organize-cards/OrganizeCard';
import Filterorganize from '../filtermenu/filterorganize';
import './organize-gallery.css';

// Items with categories and tags
const items = [
  {
    title: 'Life Tracker - Google Sheets',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: ['Trackers'], 
    businessCategories: [],       
    types: ['Sheets'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Life Tracker - Notion',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: ['Trackers'], 
    businessCategories: [],      
    types: ['Notion'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Personal Tracker - Google Sheets',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: ['Trackers'], 
    businessCategories: [],       
    types: ['Sheets'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Personal Tracker - Notion',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: ['Trackers'], 
    businessCategories: [],       
    types: ['Notion'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Personal Projects - Google Sheets',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: ['Projects'], 
    businessCategories: [],       
    types: ['Sheets'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Personal Projects - Notion',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: ['Projects'], 
    businessCategories: [],       
    types: ['Notion'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Product Videos- How Tos - Personal',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: ['How Tos'], 
    businessCategories: [],       
    types: ['Videos'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Self Paced Courses- How Tos - Personal',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
     categories: ['How Tos'], 
    businessCategories: [],       
    types: ['Courses'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Instructor Led Courses- How Tos - Personal',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: ['How Tos'], 
    businessCategories: [],       
    types: ['Courses'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Website Builder- Services',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['Services'],       
    types: ['Builders'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'App Builder- Services',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['Services'],       
    types: ['Builders'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Onboarding Builder- Services',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['Services'],       
    types: ['Builders'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Back Office- Google Sheets',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['Back Office'],       
    types: ['Sheets'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Back Office- Notion',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['Back Office'],       
    types: ['Notion'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Project Management - Google Sheets',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['Management'],       
    types: ['Sheets'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Project Management - Notion',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['Management'],       
    types: ['Notion'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Product Videos- How Tos - Business',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['How Tos'],       
    types: ['Videos'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Self Paced Courses- How Tos - Business',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['How Tos'],       
    types: ['Courses'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
  {
    title: 'Instructor Led Courses- How Tos - Business',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://www.effortlessworks.store/000013/pt-sheets',
    categories: [], 
    businessCategories: ['How Tos'],       
    types: ['Courses'],            
    audience: ['Adults', 'Women', 'Men'], 
  },
];

// Filter options
const personalCategories = [ 'Trackers', 'Projects', 'How Tos'];
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
      item.businessCategories?.some(c => selectedBusiness.includes(c));

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
            />
        ))}
      </section>
    </div>
  );
};

export default OrganizeGallery;
