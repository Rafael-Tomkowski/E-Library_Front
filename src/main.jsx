import React from "react";
import ReactDOM from "react-dom/client";
import RegisterCostumer from "./pages/RegisterCostumer";
import LoginCostumer from "./pages/Login";
import BookShelf from "./pages/bookShelf";
import RegisterBook from "./pages/RegisterBook";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";
import EditBook from "./pages/EditBook";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ChakraProvider } from "@chakra-ui/react";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/editbook/:id',
    element: <EditBook />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/registercostumer',
    element: <RegisterCostumer />
  },
  {
    path: '/bookshelf',
    element: <BookShelf />
  },
  {
    path: '/registerbook',
    element: <RegisterBook />
  },
  {
    path: '/login',
    element: <LoginCostumer />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </React.StrictMode>
);