// CrochetedGallery.tsx
import React, { useState } from 'react';
import CrochetedCard from '../crocheted-cards/page';
import FilterMenu from '../filtermenu/page';
import './crocheted-gallery.css'; // Import the new CSS

// Items with categories and tags
const items = [
  {
    title: 'Crocheted Black Skirt',
    images: [
      '/crocheted-images/coming-soon/1.png',
      '/crocheted-images/coming-soon/2.png',
      '/crocheted-images/coming-soon/3.png',
    ],
    etsyLink: 'https://effortlessworks.etsy.com',
    categories: ['skirt'],
    tags: ['Women', 'Adult'],
  },
  {
    title: 'Crocheted Winter Hat',
    images: [
      '/crocheted-images/coming-soon/1.png',
      '/crocheted-images/coming-soon/2.png',
      '/crocheted-images/coming-soon/3.png',
    ],
    etsyLink: 'https://effortlessworks.etsy.com',
    categories: ['hat'],
    tags: ['Men', 'Adult'],
  },
];

// Filter options
const categories = ['Hat', 'Skirt', 'Shirt'];
const gendersAges = ['Men', 'Women', 'Boys', 'Girls', 'Adults', 'Kids'];

const CrochetedGallery: React.FC = () => {
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
        <FilterMenu
          label="Category"
          options={categories}
          selectedOptions={selectedCategories}
          onChange={handleCategoryChange}
        />
        <FilterMenu
          label="Audience"
          options={gendersAges}
          selectedOptions={selectedTags}
          onChange={handleTagChange}
        />
      </div>

      {/* Gallery */}
      <section className="gallery">
        {filteredItems.map((item, index) => (
          <CrochetedCard
            key={index}
            title={item.title}
            images={item.images}
            etsyLink={item.etsyLink}
          />
        ))}
      </section>
    </div>
  );
};

export default CrochetedGallery;
