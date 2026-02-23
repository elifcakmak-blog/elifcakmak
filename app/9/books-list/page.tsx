"use client";

import React, { useState } from "react";
import "./books.css";

interface Book {
  id: number;
  category: string;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

const books: Book[] = [
  /* Example book:
  {
    id: 1,
    category: "Self-Help",
    title: "Getting Things Done",
    date: "2023-10-10",
    imageSrc: "/path-to-image.jpg",
    imageAlt: "Book cover for Getting Things Done",
    link: "https://example.com/book1",
  },
  */
];

const BooksSection: React.FC = () => {
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

  const sortedBooks = [...books].sort((a, b) => {
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

  const filteredBooks = sortedBooks.filter(
    (book) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(book.category)) &&
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="books_floating-wrapper">
      <section className="books_section_books">
        <div className="books_container-large">
          <div className="books_wrapper-section">
            {/* Header */}
            <div className="books_max-width-xlarge books_align-center">
              <div className="books_margin-bottom books_margin-xxsmall">
                <h2 className="books_heading-style-h2 books_text-align-center">
                  Books That Help Muslims<br />
                  Learn, Create, and Grow
                </h2>
              </div>
            </div>

            {/* Filter and Sort Section */}
            <div className="books_wrapper-filter">
              {/* Categories Dropdown */}
              <div className="books_filter-dropdown">
                <div
                  className="books_toggle"
                  aria-expanded={dropdownOpen.categories}
                  onClick={() =>
                    setDropdownOpen((prevState) => ({
                      ...prevState,
                      categories: !prevState.categories,
                    }))
                  }
                >
                  Filter by Categories
                  <span
                    className={`books_dropdown-icon ${
                      dropdownOpen.categories ? "books_rotate" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`books_dropdown-list ${
                    dropdownOpen.categories ? "active" : ""
                  }`}
                >
                  {[""].map((category, index) => (
                    <div key={index} className="books_check-box-field">
                      <input
                        type="checkbox"
                        id={`books-category-${index}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                        className="books_chk-box"
                      />
                      <label
                        htmlFor={`books-category-${index}`}
                        className="books_chk-box-label"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="books_filter-dropdown">
                <div
                  className="books_toggle"
                  aria-expanded={dropdownOpen.sort}
                  onClick={() =>
                    setDropdownOpen((prevState) => ({
                      ...prevState,
                      sort: !prevState.sort,
                    }))
                  }
                >
                  Sort Books
                  <span
                    className={`books_dropdown-icon ${
                      dropdownOpen.sort ? "books_rotate" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`books_dropdown-list ${
                    dropdownOpen.sort ? "active" : ""
                  }`}
                >
                  {[
                    { label: "Name (A-Z)", value: "name-asc" },
                    { label: "Name (Z-A)", value: "name-desc" },
                    { label: "Date (Asc)", value: "date-asc" },
                    { label: "Date (Desc)", value: "date-desc" },
                  ].map((option) => (
                    <div key={option.value} className="books_check-box-field">
                      <input
                        type="radio"
                        id={`books-sort-${option.value}`}
                        name="sortOption"
                        checked={sortOption === option.value}
                        onChange={() => handleSortChange(option.value)}
                        className="books_chk-box"
                      />
                      <label
                        htmlFor={`books-sort-${option.value}`}
                        className="books_chk-box-label"
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
                  placeholder="Search Books..."
                  className="books_search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Clear Filters Button */}
              <button className="books_clear-filters-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>

            {/* Books List */}
            <div className="books_cms books_wrapper-grid">
              {filteredBooks.map((book) => (
                <a
                  key={book.id}
                  href={book.link}
                  className="books_card"
                >
                  <img
                    src={book.imageSrc}
                    alt={book.imageAlt}
                    className="books_thumbnail"
                  />
                  <div className="books_category-pill">{book.category}</div>
                  <p className="books_text-size-medium books_text-weight-bold">
                    {book.title}
                  </p>
                  <div className="books_hide">{book.date}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BooksSection;