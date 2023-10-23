import { useState } from 'react';

export default function Works() {
  const [currentPage, setCurrentPage] = useState(1);

  // Content for each page
  const pages = [
    "Content for Page 1",
    "Content for Page 2",
    "Content for Page 3",
    "Content for Page 4",
    "Content for Page 5",
    "Content for Page 6",
    "Content for Page 7",
  ];

  return (
    <div>
      <nav className="pagination" aria-label="navigation for works">
        <ul className="pagination__list">
          <li>
            <a
              className="pagination__arrow"
              aria-label="Go to Previous Page"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg width={33} height={8} aria-hidden="true" viewBox="0 0 33 8">
                {/* Previous arrow icon */}
              </svg>
            </a>
          </li>
          {pages.map((pageContent, index) => (
            <li key={index} className={`pagination__item ${index + 1 === currentPage ? 'is-active' : ''}`}>
              <a
                aria-label={`Go to Page ${index + 1}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li>
            <a
              className="pagination__arrow"
              aria-label="Go to Next Page"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pages.length}
            >
              <svg width={33} height={8} aria-hidden="true" viewBox="0 0 33 8">
                {/* Next arrow icon */}
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <div className="page-content">
        {pages[currentPage - 1]}
      </div>
    </div>
  );
}
