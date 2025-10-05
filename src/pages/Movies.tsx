import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/movie";
import MovieCard from "../components/cards/MovieCard";
import { MovieType } from "../types/moviesTypes";

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
  
  );
}

export default Movies;
