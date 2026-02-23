"use client";

import React, { useState } from "react";
import "./apps-episodes.css";

interface AppItem {
  id: number;
  category: string;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

const apps: AppItem[] = [
  /* Example
  {
    id: 1,
    category: "Productivity",
    title: "Notion",
    date: "2023-10-10",
    imageSrc: "/path-to-image.jpg",
    imageAlt: "Notion App Logo",
    link: "https://www.notion.so/",
  },
  */
];

const AppsSection: React.FC = () => {
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

  const sortedApps = [...apps].sort((a, b) => {
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

  const filteredApps = sortedApps.filter(
    (app) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(app.category)) &&
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app_floating-wrapper">
      <section className="app_section">
        <div className="app_container-large">
          <div className="app_wrapper">
            {/* Header */}
            <div className="max-width-xlarge align-center">
              <div className="margin-bottom margin-xxsmall">
                <h2 className="app_heading-style-h2 text-align-center">
                  Websites and Apps To Build<br />
                  Your Muslim Success Path
                </h2>
              </div>
              <p className="app_text-size-regular text-align-center">
                New project updates every month.
              </p>
            </div>

            {/* Filter and Sort Section */}
            <div className="app_wrapper-filter">
              {/* Categories Dropdown */}
              <div className="app_filter-dropdown">
                <div
                  className="app_toggle"
                  aria-expanded={dropdownOpen.categories}
                  onClick={() =>
                    setDropdownOpen((prevState) => ({
                      ...prevState,
                      categories: !prevState.categories,
                    }))}
                >
                  Filter by Categories
                  <span
                    className={`app_dropdown-icon ${dropdownOpen.categories ? "app_rotate" : ""}`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`app_dropdown-list ${dropdownOpen.categories ? "active" : ""}`}
                >
                  {[""].map((category, index) => (
                    <div key={index} className="app_check-box-field">
                      <input
                        type="checkbox"
                        id={`category-${index}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                        className="app_chk-box"
                      />
                      <label htmlFor={`category-${index}`} className="app_chk-box-label">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="app_filter-dropdown">
                <div
                  className="app_toggle"
                  aria-expanded={dropdownOpen.sort}
                  onClick={() =>
                    setDropdownOpen((prevState) => ({
                      ...prevState,
                      sort: !prevState.sort,
                    }))}
                >
                  Sort Sites
                  <span
                    className={`app_dropdown-icon ${dropdownOpen.sort ? "app_rotate" : ""}`}
                  >
                    ▼
                  </span>
                </div>
                <div className={`app_dropdown-list ${dropdownOpen.sort ? "active" : ""}`}>
                  {[
                    { label: "Name (A-Z)", value: "name-asc" },
                    { label: "Name (Z-A)", value: "name-desc" },
                    { label: "Date (Asc)", value: "date-asc" },
                    { label: "Date (Desc)", value: "date-desc" },
                  ].map((option) => (
                    <div key={option.value} className="app_check-box-field">
                      <input
                        type="radio"
                        id={`sort-${option.value}`}
                        name="sortOption"
                        checked={sortOption === option.value}
                        onChange={() => handleSortChange(option.value)}
                        className="app_chk-box"
                      />
                      <label htmlFor={`sort-${option.value}`} className="app_chk-box-label">
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
                  placeholder="Search Apps..."
                  className="app_search w-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Clear Filters Button */}
              <button 
                className="app_clear-filters-btn"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>

            {/* App List */}
            <div className="app_cms app_wrapper-grid">
              {filteredApps.map((app) => (
                <a
                  key={app.id}
                  href={app.link}
                  className="app_card w-inline-block"
                >
                  <img
                    src={app.imageSrc}
                    alt={app.imageAlt}
                    className="app_thumbnail"
                  />
                  <div className="app_category-pill">{app.category}</div>
                  <p className="app_text-size-medium app_text-weight-bold">
                    {app.title}
                  </p>
                  <div className="hide">{app.date}</div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AppsSection;