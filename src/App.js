import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Maggie24-tech"
            target="_blank"
            rel="noreferrer"
          >
            Magdalene Nsiah
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Maggie24-tech/React-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
