import React from "react";
import "./Search.css";

const Search = ({ city, setCity, fetchWeather }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>
    </div>
  );
};

export default Search;
