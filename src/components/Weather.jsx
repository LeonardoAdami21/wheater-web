import React from "react";
import "./Weather.css";

const Weather = ({ weather }) => {
  const { main, name, weather: details } = weather;
  const { temp } = main;
  const { description, icon } = details[0];
  return (
    <div className="weather-info">
      <div className="city">{name}</div>
      <div className="temperature">{Math.round(temp)}°C</div>{" "}
      <div className="weather-icon">
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
        />
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Weather;
