"use client";

import React, { useState } from "react";
import "./video-episodes.css";

interface Podcast {
  id: number;
  category: string;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

const podcasts: Podcast[] = [
  /*{
    id: 1,
    category: "Organization",
    title: "Getting Things Done",
    date: "2023-10-10",
    imageSrc: "/path-to-image.jpg",
    imageAlt: "Podcast cover for Getting Things Done",
    link: "https://example.com/podcast1",
  },*/
  
];

const PodcastSection: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({
    categories: false,
    sort: false,
  });
  const [sortOption, setSortOption] = useState<string>("name-asc");

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
    setSortOption("name-asc");
  };

  const sortedPodcasts = [...podcasts].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      default:
        return 0;
    }
  });

  const filteredPodcasts = sortedPodcasts.filter(
    (podcast) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(podcast.category)) &&
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="floating-video-wrapper">
      <section className="section_video">
        <div className="container-large">
          <div className="wrapper-podcast">
            {/* Header */}
            <div className="max-width-xlarge align-center">
              <div className="margin-bottom margin-xxsmall">
                <h2 className="heading-style-h2 text-align-center">
                  Effortless Resources to Help You<br />
                  Simplify Your Workflow
                </h2>
              </div>
              <p className="text-size-regular text-align-center">
                New videos every week.
              </p>
            </div>

            {/* Filter and Sort Section */}
            <div className="wrapper-filter-podcast">
              {/* Categories Dropdown */}
              <div className="filter-dropdown" style={{ cursor: 'none' }}>
                <div
                  className="toggle" style={{ cursor: 'none' }}
                  aria-expanded={dropdownOpen.categories}
                  onClick={() =>
                    setDropdownOpen((prevState) => ({
                      ...prevState,
                      categories: !prevState.categories,
                    }))}
                >
                  Filter by Categories
                  <span
                    className={`dropdown-icon ${dropdownOpen.categories ? "rotate" : ""}`} 
                    style={{ cursor: 'none' }}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`dropdown-list ${dropdownOpen.categories ? "active" : ""}`} 
                  style={{ cursor: 'none' }}
                >
                  {["",].map(
                    (category, index) => (
                      <div key={index} className="check-box-field" style={{ cursor: 'none' }}>
                        <input
                          type="checkbox"
                          id={`category-${index}`}
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCheckboxChange(category)}
                          className="chk-box" style={{ cursor: 'none' }}
                        />
                        <label htmlFor={`category-${index}`} className="chk-box-label" style={{ cursor: 'none' }}>
                          {category}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="filter-dropdown">
                <div
                  className="toggle"
                  aria-expanded={dropdownOpen.sort}
                  onClick={() =>
                    setDropdownOpen((prevState) => ({
                      ...prevState,
                      sort: !prevState.sort,
                    }))}
                >
                  Sort Videos
                  <span
                    className={`dropdown-icon ${dropdownOpen.sort ? "rotate" : ""}`}
                  >
                    ▼
                  </span>
                </div>
                <div className={`dropdown-list ${dropdownOpen.sort ? "active" : ""}`}>
                  {[
                    { label: "Name (A-Z)", value: "name-asc" },
                    { label: "Name (Z-A)", value: "name-desc" },
                    { label: "Date (Asc)", value: "date-asc" },
                    { label: "Date (Desc)", value: "date-desc" },
                  ].map((option) => (
                    <div key={option.value} className="check-box-field">
                      <input
                        type="radio"
                        id={`sort-${option.value}`}
                        name="sortOption"
                        checked={sortOption === option.value}
                        onChange={() => handleSortChange(option.value)}
                        className="chk-box" style={{ cursor: 'none' }}
                      />
                      <label htmlFor={`sort-${option.value}`} className="chk-box-label" style={{ cursor: 'none' }}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div>
                <input
                  type="text"
                  placeholder="Search Videos..."
                  className="search w-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Clear Filters Button */}
              <button 
                className="clear-filters-btn"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>

            {/* Podcast List */}
            <div className="cms-podcast wrapper-grid-podcast">
              {filteredPodcasts.map((podcast) => (
                <a
                  key={podcast.id}
                  href={podcast.link}
                  className="card-podcast w-inline-block"
                >
                  <img
                    src={podcast.imageSrc}
                    alt={podcast.imageAlt}
                    className="podcast-thumbnail"
                  />
                  <div className="category-pill">{podcast.category}</div>
                  <p className="text-size-medium text-weight-bold">
                    {podcast.title}
                  </p>
                  <div className="hide">{podcast.date}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastSection;
