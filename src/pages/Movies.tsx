import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/movie";
import MovieCard from "../components/cards/MovieCard";
import { MovieType } from "../types/moviesTypes";
import logo from "../assets/logo.png";

function Movies() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies", { search: "princess", page: 2 }],
    queryFn: fetchMovies,
  });

  if (isLoading)
    return (
      <div className=" flex items-center justify-center ">
        <p className="text-gray-200 text-lg">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className=" flex items-center justify-center ">
        <p className="text-red-400 text-lg">Error loading movies.</p>
      </div>
    );

    
  return (
    <>
      <div className="flex justify-between mb-10 items-center">
        <img src={logo} alt="Logo" className="h-16 w-auto" />

        <div className="md:w-1/2  flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="grow-1 p-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            // onClick={handleClick}
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
          > search</button>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.Search?.map((movie: MovieType) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            type={movie.Type}
            poster={movie.Poster}
            id={movie.imdbID}
          />
        ))}
      </div>
    </>
  );
}

export default Movies;
