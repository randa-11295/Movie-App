// api/omdb.ts
import axios from "axios";
import type { QueryFunctionContext } from "@tanstack/react-query";

const API_KEY = "6db94cd0";
const BASE_URL = "https://www.omdbapi.com/";

interface FetchMoviesParams {
  search: string;
  page: number;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface FetchMoviesResponse {
  Search?: Movie[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
}

export const fetchMovies = async (
  context: QueryFunctionContext<[string, FetchMoviesParams]>
): Promise<FetchMoviesResponse> => {
  const [, { search, page }] = context.queryKey;

  const response = await axios.get<FetchMoviesResponse>(BASE_URL, {
    params: {
      s: search,
      apikey: API_KEY,
      page,
    },
  });

  return response.data;
};
