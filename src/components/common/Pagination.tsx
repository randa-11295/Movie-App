import React, { useCallback, useMemo } from "react";
import { PaginationType } from "../../types/moviesTypes";

const Pagination: React.FC<PaginationType> = ({
  totalResults,
  currentPage,
  onPageChange,
  itemsPerPage = 10,
  visiblePages = 5,
}) => {
  const totalPages = useMemo(() => Math.ceil(totalResults / itemsPerPage), [
    totalResults,
    itemsPerPage,
  ]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page !== currentPage) onPageChange(page);
    },
    [currentPage, onPageChange]
  );

  const { startPage, endPage, pages } = useMemo(() => {
    const start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const end = Math.min(totalPages, start + visiblePages - 1);
    const arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return { startPage: start, endPage: end, pages: arr };
  }, [currentPage, totalPages, visiblePages]);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {startPage > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className="px-3 py-1 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600"
          >
            1
          </button>
          {startPage > 2 && <span className="text-gray-400">...</span>}
        </>
      )}

      {pages.map((num) => (
        <button
          key={num}
          onClick={() => handlePageChange(num)}
          className={`px-3 py-1 rounded-md transition-all ${
            currentPage === num
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {num}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="text-gray-400">...</span>}
          <button
            onClick={() => handlePageChange(totalPages)}
            className="px-3 py-1 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600"
          >
            {totalPages}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
