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
  // Add podcasts here...
];

const PodcastSection: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState<string>("name-asc"); // New state for sorting
  const [extraInput, setExtraInput] = useState(""); // New state for extra input field

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

  const handleExtraInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtraInput(event.target.value);
  };

  // Sort podcasts based on selected option
  const sortedPodcasts = [...podcasts].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.title.localeCompare(b.title); // A-Z
      case "name-desc":
        return b.title.localeCompare(a.title); // Z-A
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime(); // Date Ascending
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Date Descending
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
    <section className="section_podcast">
      <div className="container-large">
        <div className="wrapper-podcast">
          {/* Header */}
          <div className="max-width-xlarge align-center">
            <div className="margin-bottom margin-xxsmall">
              <h2 className="heading-style-h2 text-align-center">
                Simplify Your Tasks Effortlessly<br />
                The #1 Podcast for Organization.
              </h2>
            </div>
            <p className="text-size-regular text-align-center">
              New episodes every week.
            </p>
          </div>

          {/* Filter Section */}
          <div className="wrapper-filter-podcast" style={{ cursor: 'none' }}>
            {/* Categories Dropdown */}
            <div className="filter-dropdown" style={{ cursor: 'none' }}>
              <div
                className="toggle"
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ cursor: 'none' }}
              >
                Filter by Categories
                <span
                  className={`dropdown-icon ${isDropdownOpen ? "rotate" : ""}`}
                  style={{ cursor: 'none' }}
                >
                  ▼
                </span>
              </div>
              <div
                className={`dropdown-list ${isDropdownOpen ? "active" : ""}`}
                style={{ cursor: 'none' }}
              >
                {[
                  "Software Development",
                  "Data Management",
                  "Organization",
                ].map((category, index) => (
                  <div key={index} className="check-box-field" style={{ cursor: 'none' }}>
                    <input
                      type="checkbox"
                      id={`category-${index}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCheckboxChange(category)}
                      className="chk-box"
                      style={{ cursor: 'none' }}
                    />
                    <label
                      htmlFor={`category-${index}`}
                      className="chk-box-label"
                      style={{ cursor: 'none' }}
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Sort Dropdown with Checkboxes */}
            <div className="filter-dropdown" style={{ cursor: 'none' }}>
              <div
                className="toggle"
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ cursor: 'none' }}
              >
                Sort Podcasts
                <span
                  className={`dropdown-icon ${isDropdownOpen ? "rotate" : ""}`}
                  style={{ cursor: 'none' }}
                >
                  ▼
                </span>
              </div>
              <div
                className={`dropdown-list ${isDropdownOpen ? "active" : ""}`}
                style={{ cursor: 'none' }}
              >
                {[
                  { label: "Name (A-Z)", value: "name-asc" },
                  { label: "Name (Z-A)", value: "name-desc" },
                  { label: "Date (Asc)", value: "date-asc" },
                  { label: "Date (Desc)", value: "date-desc" },
                ].map((option, index) => (
                  <div key={index} className="check-box-field" style={{ cursor: 'none' }}>
                    <input
                      type="radio"
                      id={`sort-${option.value}`}
                      name="sortOption"
                      checked={sortOption === option.value}
                      onChange={() => handleSortChange(option.value)}
                      className="chk-box"
                      style={{ cursor: 'none' }}
                    />
                    <label
                      htmlFor={`sort-${option.value}`}
                      className="chk-box-label"
                      style={{ cursor: 'none' }}
                    >
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
                className="search w-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
  );
};

export default PodcastSection;
