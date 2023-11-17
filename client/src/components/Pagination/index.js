import React from 'react';
import './pagi.css';
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const visiblePages = 5; // Number of pages to show at a time

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const getPageButtons = () => {
    if (totalPages <= visiblePages) {
      return [];
    }

    const midPoint = Math.ceil(visiblePages / 2);

    if (currentPage <= midPoint) {
      return ['<', currentPage, '/', totalPages, '>'];
    } else if (currentPage > totalPages - midPoint) {
      return ['<', currentPage, '/', totalPages, '>'];
    } else {
      return ['<', currentPage, '/', totalPages, '>'];
    }
  };

  return (
    <div className="pagination">
      {getPageButtons().map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button)}
          disabled={button === '...' || (button === '<' && isFirstPage) || (button === '>' && isLastPage)}
        >
          {button}
        </button>
      ))}
    </div>
  );

  function handleButtonClick(button) {
    if (button === '<' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (button === '>' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default Pagination;
