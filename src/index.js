import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MoviesProvider } from "./Context";
ReactDOM.render(
  <MoviesProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </MoviesProvider>,
  document.getElementById("root")
);