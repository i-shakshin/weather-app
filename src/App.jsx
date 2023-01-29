import React from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import { useWeatherFetch } from "./hooks/useWeatherFetch";
import "./App.css";

function App() {
  const [weatherData, isLoading, error, fetchData] = useWeatherFetch();
  //  console.log(weatherData.forecast.list);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="container">
        <Search onSearchCity={fetchData} />
        <CurrentWeather data={weatherData.currentWeather} />
        <Forecast data={weatherData.forecast} />
      </div>
    </>
  );
}

export default App;
