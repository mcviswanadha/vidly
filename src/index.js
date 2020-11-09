import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
// import Movies from "./components/movies";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
