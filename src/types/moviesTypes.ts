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
  onDetailsClick?: (id: string) => void;
}