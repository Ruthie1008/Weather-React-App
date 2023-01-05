import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "c819171fe0abdc14039af4ef5dda283b";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showForecast);
    function showForecast(response) {
      console.log(response);
      setForecast(
        <ul className="forecast">
          <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
          <li>Description: {response.data.weather[0].description}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind: {response.data.wind.speed}km/h</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt={response.data.weather[0].description}
            />
          </li>
        </ul>
      );
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <div>{forecast}</div>
    </div>
  );
}
