import styled from "styled-components";

const DetailedMovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: "#202c3c";
  padding: 140px 0px;
`;

const DetailedMovieContainer2 = styled.div`
  display: flex;
  gap: 45px;
  justify-content: center;
  align-items: center;
`;

const DetailedMovieImage = styled.img`
  width: 280px;
  height: 380px;
  border-radius: 6px;
`;

const DetailedMovieTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 550px;
`;

const DetailedMovieTitleYear = styled.p`
  color: red;
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const DetailedMovieDurationAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DetailedMovieClockIcon = styled.i`
  color: gray;
  font-size: 15px;
`;

const DetailedMovieDurationText = styled.p`
  font-size: 18px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: red;
`;

const DetailedMovieRatingAndStar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DetailedMovieStarIcon = styled.i`
  color: gray;
  font-size: 15px;
`;

const DetailedMovieRatingText = styled.p`
  font-size: 18px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: red;
`;

const DetailedMovieOverview = styled.p`
  color: red;
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const DetailedMovieOverviewText = styled.p`
  color: black;
  font-size: 18px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const DetailedMovieAuthorAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DetailedMovieAuthorText = styled.p`
  font-size: 15px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: red;
`;

const DetailedMovieAuthorIcon = styled.i`
  color: gray;
  font-size: 15px;
`;

const DetailedMovieBackButton = styled.button`
  background-color: gray;
  padding: 10px 15px;
  border: 0;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
`;

export {
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
};
