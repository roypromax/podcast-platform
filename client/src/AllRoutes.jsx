import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Login from "./pages/Login";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
