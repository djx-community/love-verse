// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SplashContextProvider } from "./utils/context/SplashScreenContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <SplashContextProvider>
      <App />
    </SplashContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
