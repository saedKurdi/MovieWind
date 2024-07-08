import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MovieTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: white;
  width: 300px;
  height: 70px;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const MovieImage = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 9px;
  border-radius: 10px;
`;

export { MovieContainer, MovieTitle, MovieImage };
