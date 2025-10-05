import React from "react";
import { MovieCardType } from "../../types/moviesTypes";
import { useNavigate } from "react-router-dom";
import ReusableBtn from "../reusable/ReusableBtn";
const MovieCard: React.FC<MovieCardType> = ({
  title,
  year,
  type,
  poster,
  id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };
  return (
    <div className=" bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl ">
      <img
        src={poster !== "N/A" ? poster : "/placeholder.jpg"}
        alt={title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center gap-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
          {title}
        </h3>
        <span className="inline-block mt-2 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full w-fit">
          {type}
        </span>

        </div>
        <p className=" mb-2  text-sm text-gray-500 dark:text-gray-400 mt-1">{year}</p>

        <ReusableBtn onClick={handleClick}>View Details</ReusableBtn>
      </div>
    </div>
  );
};

export default MovieCard;
