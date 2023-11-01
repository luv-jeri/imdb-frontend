import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/utils.css";
import { API_KEY, URL } from "./constants";
import axios from "axios";

axios.defaults.baseURL = URL;
axios.defaults.params = {
  api_key: API_KEY,
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
