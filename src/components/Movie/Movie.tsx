import { FC } from "react";
import { MovieType } from "../../types/MovieType";
import { MovieContainer, MovieTitle, MovieImage } from "./styles";
import { useNavigate } from "react-router-dom";

interface MovieParamInterface {
  movie: MovieType;
}
export const Movie: FC<MovieParamInterface> = ({ movie }) => {
  const navigate = useNavigate();
  const toSpecialMoviePage = () => {
    navigate(`/movies/${movie.id}`);
  };
  return (
    <MovieContainer onClick={toSpecialMoviePage}>
      <MovieImage
        src={
          movie.poster_path == null
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWWV_TzALxkkrkC-4yhP7_2DTYAa7N0cABg&s"
            : "https://image.tmdb.org/t/p/w500" + movie.poster_path
        }
        alt={movie.title}
      />
      <MovieTitle>{movie.title}</MovieTitle>
    </MovieContainer>
  );
};
