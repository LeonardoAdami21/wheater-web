import "./App.css";
import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);
  return (
    <div className="app">
      <h1>Wheater Web</h1>
      <Search city={city} setCity={setCity} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default App;
