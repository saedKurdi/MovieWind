import { MovieListContainer } from "./styles";
import { Movie } from "../Movie/Movie";
import { useMoviesContext } from "../../contexts/MoviesContext";

export const MovieList = () => {
  const { movies } = useMoviesContext();
  return (
    <MovieListContainer>
      {movies?.map((m) => (
        <Movie key={m.id} movie={m} />
      ))}
    </MovieListContainer>
  );
};
