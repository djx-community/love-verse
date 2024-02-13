import React from "react";
import { Routes, Route } from "react-router-dom";
import PagePreview from "./pages/PagePreview";
import PageHome from "./pages/PageHome";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => {
  return (
    <div className="container vh-100 px-4 px-md-0">
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<PageHome />} /> {/* Home page route */}
        <Route path="preview" element={<PagePreview />} /> {/* Preview page route */}
        <Route path="*" element={<PageNotFound />} /> {/* Catch-all route */}
      </Routes>
    </div>
  );
};

export default App;
