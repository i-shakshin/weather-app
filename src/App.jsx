import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import "./App.css";

// .then((response) => response.json())
//       .then((data) =>
//         console.log("lat, lon ", [data.coord.lat, data.coord.lon])

function App() {
  const [coordinates, setCoordinates] = useState("");
  const [current, setCurrent] = useState("");
  const handleOnSearchCity = (city) => {
    console.log(city);

    const coordinatesURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${String(
      coordinates.lat
    )}&lon=${String(coordinates.lon)}&appid=${process.env.REACT_APP_API_KEY}`;
    const fetchWeather = async (endpoint) => {
      try {
        const result = await (await fetch(endpoint)).json();
        return result;
      } catch (error) {
        console.log("ошибка fetch", error);
      }
    };

    fetchWeather(coordinatesURL).then((res) => {
      setCoordinates({ ...res.coord });

      fetchWeather(currentWeatherURL).then((res) => {
        setCurrent({ ...res });
      });
    });

    // const { lat, lon } = showData();
    console.log(coordinates);
    console.log("cuurent", current);
    // console.log(lon);
  };

  return (
    <>
      <div className="container">
        <Search onSearchCity={handleOnSearchCity} />
        <CurrentWeather data={current} />
      </div>
    </>
  );
}

export default App;
