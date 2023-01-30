import React from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import { useWeatherFetch } from "./hooks/useWeatherFetch";
import { CircularProgress, Container } from "@mui/material";

function App() {
  const [weatherData, isLoading, error, fetchData] = useWeatherFetch();

  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <>
      <Container>
        <Search onSearchCity={fetchData} error={error} />
        <CurrentWeather data={weatherData.currentWeather} />
        <Forecast data={weatherData.forecast} />
      </Container>
    </>
  );
}

export default App;
