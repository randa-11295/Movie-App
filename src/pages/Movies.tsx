import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/movie";

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
};

function Movies() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies", { search: "batman", page: 2 }],
    queryFn: fetchMovies,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies.</p>;
  
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {data?.Search?.map((movie: Movie) => (
          <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
