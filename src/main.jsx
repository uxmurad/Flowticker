import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/scss/style.scss";

import MainLayout from "./pages/MainLayout";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Strategies from "./pages/Strategies";
import Contact from "./pages/Contact";
import Marketplace from "./pages/MarketPlace";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";
import StrategiesDetails from "./pages/StrategiesDetails";
import CreateStrategies from "./pages/CreateStrategies";
import Help from "./pages/Help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/strategies",
        element: <Strategies />,
      },
      {
        path: "/create-strategies",
        element: <CreateStrategies />,
      },
      {
        path: "/strategies-details",
        element: <StrategiesDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/subscribe",
        element: <Subscribe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
