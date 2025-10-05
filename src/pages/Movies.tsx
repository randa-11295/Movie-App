import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/movie";
import MovieCard from "../components/cards/MovieCard";
import { MovieType } from "../types/moviesTypes";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Pagination from "../components/common/Pagination";
import { SearchSchema } from "../utils/schema";
import ReusableInput from "../components/reusable/ReusableInput";


function Movies() {
  const [searchValue, setSearchValue] = useState("princess");
  const [pageValue, setPageValue] = useState(1);

  const handleChangePage = (newPage: number) => {
    setPageValue(newPage);
  };
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["movies", { search: searchValue, page: pageValue }],
    queryFn: fetchMovies,
  });

  

  const formik = useFormik({
    initialValues: { search: searchValue },
    validationSchema: SearchSchema,
    onSubmit: (values) => {
      setSearchValue(values.search.trim());
    },
  });

  // 🔁 Trigger re-fetch when searchValue changes
  useEffect(() => {
    if (searchValue) refetch();
  }, [searchValue, refetch]);

  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <img src={logo} alt="Logo" className="h-16 w-auto" />

        {/* Search Form */}
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col md:flex-row items-start w-full md:w-1/2 gap-2"
        >
      <ReusableInput formik={formik} name="search" />

          <button
            type="submit"
            disabled={isFetching}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all disabled:opacity-60"
          >
            {isFetching ? "Searching..." : "Search"}
          </button>
        </form>
      </div>

      {/* States */}
      {isLoading || isFetching ? (
        <div className="flex items-center justify-center mt-10">
          <p className="text-gray-400 text-lg">Loading movies...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center mt-10">
          <p className="text-red-400 text-lg">Error loading movies.</p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.Search?.length ? (
            data.Search.map((movie: MovieType) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
                poster={movie.Poster}
                id={movie.imdbID}
              />
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No movies found.
            </p>
          )}
        </div>
      )}
        <Pagination
          currentPage={pageValue}
          onPageChange={handleChangePage}
          totalResults={data?.totalResults ? parseInt(data.totalResults) : 0}
        />
    </>
  );
}

export default Movies;
