import { DetailRowType, MovieDetailsType } from "../types/moviesTypes";

export const detailsRoWs = (movie: MovieDetailsType): DetailRowType[] => [
  { label: "Director", value: movie.Director },
  { label: "Writer", value: movie.Writer },
  { label: "Actors", value: movie.Actors },
  { label: "Language", value: movie.Language },
  { label: "Country", value: movie.Country },
  {
    label: "IMDb",
    value: movie.imdbRating ? `⭐ ${movie.imdbRating}/10` : null,
  },
];
