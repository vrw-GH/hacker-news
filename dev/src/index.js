import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

let urlBase = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);

ReactDOM.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>,
  rootElement
);
