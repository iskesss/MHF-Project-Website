import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MyProject from "./pages/MyProject";
import AboutMe from "./pages/AboutMe";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myproject" element={<MyProject />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
