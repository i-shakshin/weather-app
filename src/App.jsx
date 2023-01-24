import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import "./App.css";

function App() {
  const handleOnSearchCity = (city) => {
    console.log(city);
  };

  return (
    <>
      <div className="container">
        <Search onSearchCity={handleOnSearchCity} />
        <CurrentWeather />
      </div>
    </>
  );
}

export default App;
