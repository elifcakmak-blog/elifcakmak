"use client";

import React, { useState } from "react";
import "./episodes.css";

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
  // Example podcast
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
    <div className="episode1-floating-card-wrapper">
      <section className="episode1-section_podcast">
        <div className="episode1-container-large">
          <div className="episode1-wrapper-podcast">
            {/* Header */}
            <div className="episode1-max-width-xlarge episode1-align-center">
              <div className="episode1-margin-bottom episode1-margin-xxsmall">
                <h2 className="episode1-heading-style-h2 episode1-text-align-center">
                  Simplify Faith, Life, and Learning<br />
                  The #1 podcast for intentional Muslim living
                </h2>
              </div>
            </div>

            {/* Filter and Sort Section */}
            <div className="episode1-wrapper-filter-podcast">
              {/* Categories Dropdown */}
              <div className="episode1-filter-dropdown">
                <div
                  className="episode1-toggle"
                  aria-expanded={dropdownOpen.categories}
                  onClick={() =>
                    setDropdownOpen((prev) => ({
                      ...prev,
                      categories: !prev.categories,
                    }))
                  }
                >
                  Filter by Categories
                  <span
                    className={`episode1-dropdown-icon ${dropdownOpen.categories ? "episode1-rotate" : ""}`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`episode1-dropdown-list ${dropdownOpen.categories ? "episode1-active" : ""}`}
                >
                  {["Software Development", "Data Management", "Organization"].map(
                    (category, index) => (
                      <div key={index} className="episode1-check-box-field">
                        <input
                          type="checkbox"
                          id={`category-${index}`}
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCheckboxChange(category)}
                          className="episode1-chk-box"
                        />
                        <label htmlFor={`category-${index}`} className="episode1-chk-box-label">
                          {category}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="episode1-filter-dropdown">
                <div
                  className="episode1-toggle"
                  aria-expanded={dropdownOpen.sort}
                  onClick={() =>
                    setDropdownOpen((prev) => ({
                      ...prev,
                      sort: !prev.sort,
                    }))
                  }
                >
                  Sort Podcasts
                  <span
                    className={`episode1-dropdown-icon ${dropdownOpen.sort ? "episode1-rotate" : ""}`}
                  >
                    ▼
                  </span>
                </div>
                <div className={`episode1-dropdown-list ${dropdownOpen.sort ? "episode1-active" : ""}`}>
                  {[
                    { label: "Name (A-Z)", value: "name-asc" },
                    { label: "Name (Z-A)", value: "name-desc" },
                    { label: "Date (Asc)", value: "date-asc" },
                    { label: "Date (Desc)", value: "date-desc" },
                  ].map((option) => (
                    <div key={option.value} className="episode1-check-box-field">
                      <input
                        type="radio"
                        id={`sort-${option.value}`}
                        name="sortOption"
                        checked={sortOption === option.value}
                        onChange={() => handleSortChange(option.value)}
                        className="episode1-chk-box"
                      />
                      <label htmlFor={`sort-${option.value}`} className="episode1-chk-box-label">
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
                  placeholder="Search Podcasts..."
                  className="episode1-search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Clear Filters Button */}
              <button
                className="episode1-clear-filters-btn"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>

            {/* Podcast List */}
            <div className="episode1-cms-podcast episode1-wrapper-grid-podcast">
              {filteredPodcasts.map((podcast) => (
                <a
                  key={podcast.id}
                  href={podcast.link}
                  className="episode1-card-podcast"
                >
                  <img
                    src={podcast.imageSrc}
                    alt={podcast.imageAlt}
                    className="episode1-podcast-thumbnail"
                  />
                  <div className="episode1-category-pill">{podcast.category}</div>
                  <p className="episode1-text-size-medium episode1-text-weight-bold">
                    {podcast.title}
                  </p>
                  <div className="episode1-hide">{podcast.date}</div>
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