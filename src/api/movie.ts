import axios from "axios";
import { QueryFunctionContext } from "@tanstack/react-query";
import {
  FetchMoviesParamsType,
  FetchMoviesResponse,
} from "../types/moviesTypes";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (
  context: QueryFunctionContext<[string, FetchMoviesParamsType]>
): Promise<FetchMoviesResponse> => {
  const [, { search, page }] = context.queryKey;

  const response = await axios.get<FetchMoviesResponse>(apiUrl, {
    params: {
      s: search,
      apikey: apiKey,
      page,
    },
  });

  return response.data;
};

export const fetchMovieDetails = async (id: string) => {

  if (!id) throw new Error("Movie ID is required");

  const response = await axios.get(apiUrl, {
    params: {
      i: id,        
      apikey: apiKey,
    },
  });

  return response.data;
};
