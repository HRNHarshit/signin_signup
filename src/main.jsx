import React from "react";
import ReactDOM from "react-dom/client";
// App
import App from "./App.jsx";
// CSS
import "./index.css";
// react-router-dom
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
