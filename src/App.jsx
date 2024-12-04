import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Header from "./components/header";
import Fotter from "./components/footer";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Fotter />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Fotter />
      </>
    ),
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

export default function App() {
  return <RouterProvider router={router} />;
}
