import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WeatherContextProvider } from "./context/weatherContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>
);

reportWebVitals();
