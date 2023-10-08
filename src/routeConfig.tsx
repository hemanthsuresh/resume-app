import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Page404Component } from "./components/Error/Page404Component";

const Home = React.lazy(() => import("./components/Home/HomeComponent"));
const Build = React.lazy(
  () => import("./components/Resume/ResumeBuilderHome")
);

const routes = [
  { path: "", element: <Home /> },
  { path: "Home", element: <Home /> },
  { path: "Build", element: <Build /> },
];
const appRouter = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Page404Component />,
    children: routes,
  },
]);
export default appRouter;
