import React, { Suspense } from "react";
import "./App.css";
import { Box } from "@mui/material";
import ResponsiveMenuBar from "./components/Menu/ResponsiveMenuBar";
import { FooterBar } from "./components/Footer/FooterBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "95vh",
        }}
      >
        <ResponsiveMenuBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
      <FooterBar />
    </>
  );
};

export default App;
