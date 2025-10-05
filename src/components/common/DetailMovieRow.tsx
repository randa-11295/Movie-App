import { DetailMovieRowProps } from "../../types/moviesTypes";

const DetailMovieRow = ({ label, value }: DetailMovieRowProps) => (
  <p>
    <span className="font-semibold text-gray-400">{label}:</span>{" "}
    <span>{value}</span>
  </p>
);

export default DetailMovieRow