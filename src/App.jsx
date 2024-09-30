import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import MyParts from "./pages/MyParts";
import NoPage from "./pages/NoPage";
import SuggestBuild from "./pages/SuggestBuild";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myparts" element={<MyParts />} />
        <Route path="/suggestbuild" element={<SuggestBuild />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
