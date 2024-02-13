import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PagePreview from "./pages/PagePreview";
import PageHome from "./pages/PageHome";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => {
  return (
    <div className="container vh-100 px-4 px-md-0">
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="preview" element={<PagePreview />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
