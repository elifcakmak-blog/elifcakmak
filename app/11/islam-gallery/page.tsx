// IslamGallery.tsx
'use client';
import React, { useState } from 'react';
import IslamCard from '../../11/islam-cards/IslamCard';
import Filterislam from '../filtermenu/Filterislam';
import './islam-gallery.css'; // Import the new CSS

// Items with categories and tags
const items = [
  {
    title: 'Becoming Muslim As A Revert',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://effortlessworks.etsy.com',
    categories: ['Book'],
    tags: ['Women','Men', 'Adult'],
  },
  {
    title: 'Muslim Prayer Basics',
    images: [
      '/islam-images/coming-soon/4.png',
      '/islam-images/coming-soon/5.png',
      '/islam-images/coming-soon/6.png',
    ],
    etsyLink: 'https://effortlessworks.etsy.com',
    categories: ['Guide'],
    tags: ['Women', 'Men', 'Adult','Kids','Boys', 'Girls'],
  },
];

// Filter options
const categories = ['Book','Guide',];
const gendersAges = ['Men', 'Women', 'Boys', 'Girls', 'Adults', 'Kids'];

const IslamGallery: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleCategoryChange = (option: string, checked: boolean) => {
    setSelectedCategories(prev =>
      checked ? [...prev, option] : prev.filter(c => c !== option)
    );
  };

  const handleTagChange = (option: string, checked: boolean) => {
    setSelectedTags(prev =>
      checked ? [...prev, option] : prev.filter(t => t !== option)
    );
  };

  const filteredItems = items.filter(item => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      item.categories?.some(c => selectedCategories.includes(c));

    const tagMatch =
      selectedTags.length === 0 ||
      item.tags?.some(t => selectedTags.includes(t));

    return categoryMatch && tagMatch;
  });

  return (
    <div>
      {/* Filter bar */}
      <div className="filter-bar">
        <Filterislam
          label="Category"
          options={categories}
          selectedOptions={selectedCategories}
          onChange={handleCategoryChange}
        />
        <Filterislam
          label="Audience"
          options={gendersAges}
          selectedOptions={selectedTags}
          onChange={handleTagChange}
        />
      </div>

      {/* Gallery */}
      <section className="gallery">
        {filteredItems.map((item, index) => (
          <IslamCard
            key={index}
            title={item.title}
            images={item.images}
            etsyLink={item.etsyLink}
            categories={item.categories}
            tags={item.tags}
          />
        ))}
      </section>
    </div>
  );
};

export default IslamGallery;
