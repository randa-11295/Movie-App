import { FormikProps } from "formik";
export interface MovieType {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  imdbID: string;
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

export interface FetchMoviesResponse {
  Search?: MovieType[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
}

export interface PaginationType {
  totalResults: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
  visiblePages?: number;
}

export interface ReusableInputProps<T> {
  formik: FormikProps<T>;
  name: keyof T;
}

export type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export type DetailMovieRowProps = {
  label: string;
  value: React.ReactNode;
};

export interface MovieDetailsType {
  Director: string;
  Writer: string;
  Actors: string;
  Language: string;
  Country: string;
  imdbRating?: string;
}

export interface DetailRowType {
  label: string;
  value: string | null | undefined;
}
