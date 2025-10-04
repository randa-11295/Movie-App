export interface MovieType {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  imdbID : string;
}

export interface MovieCardType {
  title: string;
  year: string;
  type: string;
  poster: string;
  id: string;
}
export interface FetchMoviesParamsType {
  search: string;
  page: number;
}

export interface  FetchMoviesResponse  {
  Search?: MovieType[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
}
