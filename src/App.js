import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
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
            href="https://github.com/Maggie24-tech/React-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on
          <a href="https://reacweatherapp.netlify.app"> Netlify </a>
        </footer>
      </div>
    </div>
  );
}
