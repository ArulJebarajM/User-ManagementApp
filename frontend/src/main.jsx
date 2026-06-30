import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/App.css";
import "./styles/Table.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
<App />
</BrowserRouter>
);