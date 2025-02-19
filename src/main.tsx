import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MoviesContextProvider } from "./contexts/MoviesContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
