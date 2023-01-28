import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("New York");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [currentWeatherResponse, forecast] = await Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
          ).then((res) => res.json()),
        ]);

        if (!currentWeatherResponse.ok) {
          throw new Error(currentWeatherResponse.statusText);
        }

        const currentWeather = await currentWeatherResponse.json();

        setWeatherData({
          currentWeather,
          forecast,
        });
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchData();
    //  console.log(weatherData.forecast.list);
  }, [city]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Город не найден {error.message}</p>;
  }

  return (
    <>
      <div className="container">
        <Search onSearchCity={setCity} />
        <CurrentWeather data={weatherData.currentWeather} />
        <Forecast data={weatherData.forecast} />
      </div>
    </>
  );
}

export default App;
