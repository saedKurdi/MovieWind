import { FC } from "react";
import { MovieSpecialType } from "../../types/MovieSpecialType";
import {
  DetailedMovieContainer,
  DetailedMovieContainer2,
  DetailedMovieImage,
  DetailedMovieTextContainer,
  DetailedMovieTitleYear,
  DetailedMovieDurationAndIcon,
  DetailedMovieClockIcon,
  DetailedMovieDurationText,
  DetailedMovieRatingAndStar,
  DetailedMovieStarIcon,
  DetailedMovieRatingText,
  DetailedMovieOverview,
  DetailedMovieOverviewText,
  DetailedMovieAuthorAndIcon,
  DetailedMovieAuthorText,
  DetailedMovieAuthorIcon,
  DetailedMovieBackButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

interface IDetailedMovie {
  movie: MovieSpecialType | undefined;
}

export const DetailedMovie: FC<IDetailedMovie> = ({ movie }) => {
  const navigate = useNavigate();
  const toMoviesPage = () => {
    // Navigating to back :
    navigate("/movies", {
      replace: true,
    });
  };

  const toCastPage = () => {
    navigate(`/movies/${movie?.id}/cast`);
  };

  const closeCastPage = () => {
    navigate(`/movies/${movie?.id}`);
  };

  return (
    <DetailedMovieContainer>
      <DetailedMovieContainer2>
        <DetailedMovieImage
          src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
          alt={movie?.original_title}
        />
        <DetailedMovieTextContainer>
          <DetailedMovieTitleYear>
            {movie?.original_title}({movie?.release_date.slice(0, 4) as string})
          </DetailedMovieTitleYear>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <DetailedMovieDurationAndIcon>
              <DetailedMovieClockIcon className="fa-regular fa-clock" />
              <DetailedMovieDurationText>
                {movie?.runtime} min
              </DetailedMovieDurationText>
            </DetailedMovieDurationAndIcon>
            <DetailedMovieRatingAndStar>
              <DetailedMovieStarIcon className="fa-regular fa-star-half-stroke" />
              <DetailedMovieRatingText>
                {movie?.vote_average}
              </DetailedMovieRatingText>
            </DetailedMovieRatingAndStar>
          </div>
          <DetailedMovieOverview>Overview</DetailedMovieOverview>
          <DetailedMovieOverviewText>
            {movie?.overview}
          </DetailedMovieOverviewText>
          <DetailedMovieAuthorAndIcon>
            <DetailedMovieAuthorIcon className="fa-solid fa-globe" />
            <DetailedMovieAuthorText>
              {movie?.origin_country[0]}
            </DetailedMovieAuthorText>
          </DetailedMovieAuthorAndIcon>
          <DetailedMovieBackButton onClick={toMoviesPage}>
            <i className="fa-solid fa-arrow-left-long"></i> Back
          </DetailedMovieBackButton>
        </DetailedMovieTextContainer>
      </DetailedMovieContainer2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "150px",
        }}
      >
        <Button onClick={toCastPage}>Open Actors Crew</Button>
        <Button onClick={closeCastPage}>Close Actors Crew</Button>
      </div>
    </DetailedMovieContainer>
  );
};
