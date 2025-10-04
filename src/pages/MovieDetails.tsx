// MovieDetails.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Movie {
  Title: string;
  Plot: string;
  // Add other fields as needed
}

export default function MovieDetails() {
  const { id } = useParams(); // 👈 get ID from URL
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://www.omdbapi.com/?apikey=YOUR_KEY&i=${id}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4">
     test {id} 
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <p>{movie.Plot}</p>
    </div>
  );
}
