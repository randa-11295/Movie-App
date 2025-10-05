import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../api/movie";
import Logo from "../components/common/Logo";
import DetailRow from "../components/common/DetailMovieRow";
import { detailsRoWs } from "../utils/consts";
import ReusableBtn from "../components/reusable/ReusableBtn";
import { useNavigate } from "react-router-dom";
export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id!),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-400">
        Loading movie details...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Failed to load movie details.
      </div>
    );

  if (!movie)
    return (
      <div className="flex justify-center items-center h-screen text-gray-400">
        No movie found.
      </div>
    );

  return (
    <>
      <Logo />
      <div className="mt-6 flex flex-col md:flex-row gap-10 items-start px-4 md:px-0">
        {/* Poster */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={
              movie.Poster && movie.Poster !== "N/A"
                ? movie.Poster
                : "/no-poster.png"
            }
            alt={movie.Title}
            className="w-full h-auto rounded-2xl shadow-xl border border-gray-800"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Title & Meta */}
          <div>
            <h1 className="text-4xl font-extrabold mb-2">{movie.Title}</h1>
            <p className="text-gray-400 text-sm">
              {movie.Year} • {movie.Genre} • {movie.Runtime}
            </p>
          </div>

          <p className="text-gray-200 text-lg leading-relaxed">{movie.Plot}</p>

          <div className="grid gap-y-2 text-sm sm:text-base text-gray-300">
            {detailsRoWs(movie).map(
              (item) =>
                item.value &&
                item.value !== "N/A" && (
                  <DetailRow
                    key={item.label}
                    label={item.label}
                    value={item.value}
                  />
                )
            )}
          </div>

          {movie.Website && movie.Website !== "N/A" && (
            <a
              href={movie.Website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition-all shadow-md"
            >
              Visit Official Website
            </a>
          )}

          <ReusableBtn onClick={handleGoBack} className="mt-4 self-start">
            Go Back
          </ReusableBtn>
        </div>
      </div>
    </>
  );
}
