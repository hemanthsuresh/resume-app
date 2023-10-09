import { Container, Box, Typography, Button, Link } from "@mui/material";
import React, { useContext } from "react";
import { AppConfigContext } from "../../appConfig";

const HomeComponent = () => {
  const config = useContext(AppConfigContext);
  return (
    <Container
      maxWidth={false}
      style={{
        background: `url(/bg_Resume.png) center / cover no-repeat, linear-gradient(to right, #f5f5f5, #e0e0e0)`,
        minHeight: "85vh",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ height: "100%" }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to {config.siteName}
        </Typography>
        <Link color="primary" href="build">
          <h4>Start Creating Your Resume</h4>
        </Link>
        <Typography variant="h4" paragraph>
          Easily create, manage and share your professional resumes for free.
        </Typography>
        <Container>
          <Typography variant="h6" paragraph>
            With {config.siteName}, you can effortlessly craft top-notch resumes
            that stand out. Our intuitive platform offers a range of templates
            and customization options to help you create a resume that truly
            reflects your skills and experience. Manage multiple versions, keep
            them up-to-date, and share them with prospective employers—all for
            free.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
};
export default HomeComponent;
