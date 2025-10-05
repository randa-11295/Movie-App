import React from "react";
import {PaginationType} from "../../types/moviesTypes";

const Pagination: React.FC<PaginationType> = ({
  totalResults,
  currentPage,
  onPageChange,
  itemsPerPage = 10,
  visiblePages = 5,
}) => {
  const totalPages = Math.ceil(totalResults / itemsPerPage);
  if (totalPages <= 1) return null;

  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {/* First Page */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600"
          >
            1
          </button>
          {startPage > 2 && <span className="text-gray-400">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-3 py-1 rounded-md transition-all ${
            currentPage === num
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {num}
        </button>
      ))}

      {/* Last Page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="text-gray-400">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600"
          >
            {totalPages}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
