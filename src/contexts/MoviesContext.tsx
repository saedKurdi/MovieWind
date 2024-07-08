import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { MovieType } from "../types/MovieType";
import axios from "axios";
import { MovieSpecialType } from "../types/MovieSpecialType";
import Actor from "../types/Actor";

type MoviesContextType = {
  movies: MovieType[];
  query: string;
  setQuery: (newQuery: string) => void;
  page: number;
  setPage: (newPage: number) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  totalPages: number;
  getMovieById: (id: number) => Promise<MovieSpecialType>;
  getMovieCast: (id: number) => Promise<Actor[]>;
};

const MoviesContext = createContext({} as MoviesContextType);

export const useMoviesContext = () => useContext(MoviesContext);

interface MoviesContextProviderProps {
  children: ReactNode;
}

const apiKey = "16dfca1b4378c326eb967d6ae3d881c3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmRmY2ExYjQzNzhjMzI2ZWI5NjdkNmFlM2Q4ODFjMyIsIm5iZiI6MTcyMDI1MDgyOC45MjQxMDQsInN1YiI6IjY2ODhlZjc4MzRhNTQzOTA0ZjFkMDIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RI7st4lbXhJy38ElO8wE0Y5ThiSHcODlNEtlYFFtzEw",
  },
};

export const MoviesContextProvider: FC<MoviesContextProviderProps> = ({
  children,
}) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [query, setQuery] = useState<string>("A");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [url, setUrl] = useState<string>("");

  const getMoviesFromIMDBAndSet = async (): Promise<void> => {
    setIsLoading(true);
    const response = await axios.get(url, options);
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
    setIsLoading(false);
  };

  useEffect(() => {
    setPage(1);
    setUrl(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
    );
  }, [query]);

  useEffect(() => {
    setUrl(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
    );
  }, [page]);

  useEffect(() => {
    getMoviesFromIMDBAndSet();
  }, [url]);

  const getMovieById = async (movie_id: number): Promise<MovieSpecialType> => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`,
      options
    );
    const movie = response.data;
    return movie;
  };

  const getMovieCast = async (id: number): Promise<Actor[]> => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
    const response = await axios.get(url, options);
    setIsLoading(false);
    return response.data.crew;
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        query,
        setQuery,
        page,
        setPage,
        isLoading,
        totalPages,
        getMovieById,
        setIsLoading,
        getMovieCast,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
