import "./App.css";
import React, { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import axios from "axios";
import { reactWeatherApiKey, reactWeatherApiUrl } from "./env/envoriment";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios
        .get(
          `${reactWeatherApiUrl}?q=${city}&appid=${reactWeatherApiKey}&units=metric`,
        )
        .then((response) => {
          setWeather(response.data);
          setCity("");
          setError(null);
        });
      return response;
    } catch (error) {
      setError("City not found");
      throw new Error(error);
    }
  };

  return (
    <div className="app">
      <h1>Weather Web</h1>
      <Search city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {error && <div className="error">{error}</div>}
      {weather && <Weather weather={weather} />}
    </div>
  );
};

export default App;
