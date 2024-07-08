import { useNavigate } from "react-router-dom";
import {
  Header2Button,
  Header2Container,
  Header2Link,
  Header2LinksSearch,
  Header2Logo,
  Header2Search,
} from "./styles";
import { useState } from "react";
import { useMoviesContext } from "../../contexts/MoviesContext";

export default function Header2() {
  const [search, setSearch] = useState<string>("");
  const { setQuery } = useMoviesContext();
  const navigate = useNavigate();
  return (
    <Header2Container>
      <Header2Logo
        onClick={() => {
          navigate("/", {
            replace: true,
          });
        }}
      >
        moviewind
      </Header2Logo>
      <Header2LinksSearch>
        <Header2Link>Holywood</Header2Link>
        <Header2Link>Bolywood</Header2Link>
        <Header2Link>Korean</Header2Link>
        <Header2Link>Series</Header2Link>
        <Header2Link>Others</Header2Link>
        <Header2Search
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setQuery(search);
              setSearch("");
            }
          }}
          placeholder="Search..."
        />
        <Header2Button>Telegram</Header2Button>
      </Header2LinksSearch>
    </Header2Container>
  );
}
