import React from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import { useWeatherFetch } from "./hooks/useWeatherFetch";
import {
  forecastDates,
  forecastDays,
  groupHoursByDate,
} from "./components/utils";
import "./App.css";

function App() {
  const [weatherData, isLoading, error, fetchData] = useWeatherFetch();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // console.log("test", forecastDays(forecastDates(weatherData.forecast)));
  // console.log("test", groupHoursByDate(weatherData.forecast)["2023-01-30"]);
  // console.log("test", forecastDates(weatherData.forecast)[0]);

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
