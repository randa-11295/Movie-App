import React from "react";
import { MovieCardType } from "../../types/moviesTypes";

const MovieCard: React.FC<MovieCardType> = ({
  title,
  year,
  type,
  poster,
  id,
  onDetailsClick,
}) => {
  return (
    <div className=" bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl ">
      <img
        src={poster !== "N/A" ? poster : "/placeholder.jpg"}
        alt={title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{year}</p>
        <span className="inline-block mt-2 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full w-fit">
          {type}
        </span>

        {/* 🔘 Details Button */}
        <button
          onClick={() => onDetailsClick?.(id)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
