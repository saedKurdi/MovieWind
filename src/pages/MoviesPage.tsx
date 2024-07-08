import { Pagination } from "@mui/material";
import Header from "../components/Header/Header";
import Header2 from "../components/Header2/Header2";
import Loader from "../components/Loader/Loader";
import { MovieList } from "../components/MovieList/MovieList";
import { useMoviesContext } from "../contexts/MoviesContext";

export default function MoviesPage() {
  const { isLoading, page, setPage, totalPages } = useMoviesContext();

  const handleChange = (
    e: React.ChangeEvent<unknown>,
    selectedPage: number
  ) => {
    setPage(selectedPage);
  };

  return (
    <div
      style={{
        backgroundColor: "#202c3c",
      }}
    >
      <Header />
      <Header2 />
      {isLoading ? <Loader /> : <MovieList />}
      <Pagination
        color="primary"
        count={totalPages}
        variant="outlined"
        shape="rounded" // Shape of pagination buttons
        page={page} // Current selected page
        onChange={handleChange}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      />
    </div>
  );
}
