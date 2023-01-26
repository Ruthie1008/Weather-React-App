import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Ruthie1008"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ruthie Neisen
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ruthie1008/Weather-React-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://resonant-axolotl-0f9592.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
