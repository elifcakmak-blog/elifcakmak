"use client";

import React, { useState } from "react";
import "./video-episodes.css";

interface Video {
  id: number;
  category: string;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

const videos: Video[] = [
  /*{
    id: 1,
    category: "Organization",
    title: "Getting Things Done",
    date: "2023-10-10",
    imageSrc: "/path-to-image.jpg",
    imageAlt: "Video cover for Getting Things Done",
    link: "https://example.com/video1",
  },*/
];

const VideoSection: React.FC = () => {
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

  const sortedVideos = [...videos].sort((a, b) => {
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

  const filteredVideos = sortedVideos.filter(
    (video) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(video.category)) &&
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="video_floating-video-wrapper">
      <section className="video_section_video">
        <div className="video_container-large">
          <div className="video_wrapper-podcast">
            {/* Header */}
            <div className="video_max-width-xlarge video_align-center">
              <div className="video_margin-bottom video_margin-xxsmall">
                <h2 className="video_heading-style-h2 video_text-align-center">
                  Effortless Resources to Help You<br />
                  Build Your Muslim Success Path
                </h2>
              </div>
              {/*<p className="video_text-size-regular video_text-align-center">
                New videos every week.
              </p>*/}
            </div>

            {/* Filter and Sort Section */}
            <div className="video_wrapper-filter-podcast">
              {/* Categories Dropdown */}
              <div className="video_filter-dropdown">
                <div
                  className="video_toggle"
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
                    className={`video_dropdown-icon ${
                      dropdownOpen.categories ? "video_rotate" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`video_dropdown-list ${
                    dropdownOpen.categories ? "active" : ""
                  }`}
                >
                  {["Organization", "Education", "Faith"].map((category, index) => (
                    <div key={index} className="video_check-box-field">
                      <input
                        type="checkbox"
                        id={`category-${index}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                        className="video_chk-box"
                      />
                      <label htmlFor={`category-${index}`} className="video_chk-box-label">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="video_filter-dropdown">
                <div
                  className="video_toggle"
                  aria-expanded={dropdownOpen.sort}
                  onClick={() =>
                    setDropdownOpen((prev) => ({ ...prev, sort: !prev.sort }))
                  }
                >
                  Sort Videos
                  <span
                    className={`video_dropdown-icon ${
                      dropdownOpen.sort ? "video_rotate" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`video_dropdown-list ${
                    dropdownOpen.sort ? "active" : ""
                  }`}
                >
                  {[
                    { label: "Name (A-Z)", value: "name-asc" },
                    { label: "Name (Z-A)", value: "name-desc" },
                    { label: "Date (Asc)", value: "date-asc" },
                    { label: "Date (Desc)", value: "date-desc" },
                  ].map((option) => (
                    <div key={option.value} className="video_check-box-field">
                      <input
                        type="radio"
                        id={`sort-${option.value}`}
                        name="sortOption"
                        checked={sortOption === option.value}
                        onChange={() => handleSortChange(option.value)}
                        className="video_chk-box"
                      />
                      <label htmlFor={`sort-${option.value}`} className="video_chk-box-label">
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
                  className="video_search w-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Clear Filters Button */}
              <button
                className="video_clear-filters-btn"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>

            {/* Video List */}
            <div className="video_cms-podcast video_wrapper-grid-podcast">
              {filteredVideos.map((video) => (
                <a
                  key={video.id}
                  href={video.link}
                  className="video_card-podcast w-inline-block"
                >
                  <img
                    src={video.imageSrc}
                    alt={video.imageAlt}
                    className="video_podcast-thumbnail"
                  />
                  <div className="video_category-pill">{video.category}</div>
                  <p className="video_text-size-medium video_text-weight-bold">
                    {video.title}
                  </p>
                  <div className="video_hide">{video.date}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoSection;