import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/movie";
import MovieCard from "../components/cards/MovieCard";
import { MovieType } from "../types/moviesTypes";

function Movies() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies", { search: "batman", page: 2 }],
    queryFn: fetchMovies,
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800">
        <p className="text-gray-200 text-lg">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800">
        <p className="text-red-400 text-lg">Error loading movies.</p>
      </div>
    );

  return (
    <section className="bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto  px-10">
   
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.Search?.map((movie: MovieType) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              poster={movie.Poster}
              id={movie.imdbID}
              onDetailsClick={(id) => console.log("Details for:", id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Movies;
