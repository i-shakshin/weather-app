import { useState, useEffect } from "react";
import { API_APPID, API_URL_APPID } from "../api";

export const useWeatherFetch = (city) => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (city) => {
    setIsLoading(true);
    setError(null);
    try {
      const [currentWeatherResponse, forecastResponse] = await Promise.all([
        fetch(
          `${API_URL_APPID}/weather?q=${city}&units=metric&appid=${API_APPID}`
        ),
        fetch(
          `${API_URL_APPID}/forecast?q=${city}&units=metric&appid=${API_APPID}`
        ),
      ]);

      const [currentWeather, forecast] = await Promise.all([
        currentWeatherResponse.json(),
        forecastResponse.json(),
      ]);

      if (!currentWeatherResponse.ok || !forecastResponse.ok) {
        throw new Error(
          currentWeatherResponse.statusText || forecastResponse.statusText
        );
      }

      setWeatherData({
        currentWeather,
        forecast,
      });
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData("New York");
  }, []);

  return [weatherData, isLoading, error, fetchData];
};
