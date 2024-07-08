// Loader.styles.ts
import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

// Styled container for centering content
export const LoaderContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

// Styled circular progress spinner
export const StyledCircularProgress = styled(CircularProgress)({
  color: "#3f51b5", // Adjust color as needed
});
