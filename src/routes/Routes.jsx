import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Home, About, Projects } from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<Home />} />
        </Route>
        <Route path="/about">
          <Route index path="/about" element={<About />} />
        </Route>
        <Route path="/projects">
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
