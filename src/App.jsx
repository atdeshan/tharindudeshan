import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Header from "./components/header";
import Fotter from "./components/footer";
import Project from "./components/project";
import "./styles.css";

export default function App() {
  return (
    <Router basename="/tharindudeshan">  {/* Set the basename */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />  {/* Home path */}
        <Route path="/about" element={<About />} />  {/* About path */}
        <Route path="/project" element={<Project />} />  {/* Project path */}
      </Routes>

      <Fotter />
    </Router>
  );
}
