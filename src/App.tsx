import React, { Suspense } from "react";
import "./App.css";
import { Container } from "@mui/material";
import ResponsiveMenuBar from "./components/Menu/ResponsiveMenuBar";
import { FooterBar } from "./components/Footer/FooterBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: "95%",
          height: "80vh",
          overflowY: "auto",
        }}
      >
        <ResponsiveMenuBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <FooterBar />
    </>
  );
};

export default App;