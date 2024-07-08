import { Outlet, useParams } from "react-router-dom";
import { useMoviesContext } from "../contexts/MoviesContext";
import { MovieSpecialType } from "../types/MovieSpecialType";
import { DetailedMovie } from "../components/DetailedMovie/DetailedMovie";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

export default function MovieDetailsPage() {
  const { getMovieById, isLoading, setIsLoading } = useMoviesContext();
  const params = useParams();
  const movieId = params.movieId;
  const [movie, setMovie] = useState<MovieSpecialType>();

  const getMovie = async () => {
    setIsLoading(true);
    const movie = await getMovieById(Number(movieId));
    setMovie(movie);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#383c4c",
        }}
      >
        {isLoading ? <Loader /> : <DetailedMovie movie={movie} />}
        <Outlet />
      </div>
    </>
  );
}
