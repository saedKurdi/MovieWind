import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

// Styled container for centering content
const StyledContainer = styled(Container)({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

// Styled image for illustrative purposes
const StyledImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
});

// Styled heading for the error message
const StyledHeading = styled(Typography)({
  marginBottom: "1rem",
});

const NotFoundPage: React.FC = () => {
  return (
    <StyledContainer>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <StyledImage
            src="https://via.placeholder.com/600x400.png?text=404+Page"
            alt="Page Not Found"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledHeading variant="h3">Oops! Page Not Found</StyledHeading>
          <Typography variant="body1">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem" }}
          >
            Go to Home
          </Button>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default NotFoundPage;
