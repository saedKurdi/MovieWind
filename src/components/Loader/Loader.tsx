import React from "react";
import { LoaderContainer, StyledCircularProgress } from "./styles";

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <StyledCircularProgress size={80} thickness={4} />
    </LoaderContainer>
  );
};

export default Loader;
