import React, { useState } from "react";
import SearchBar from "./Component/SearchBar";
import CurrentWeather from "./Component/CurrentWeather";
import Forecast from "./Component/Forecast";
import AdditionalDetails from "./Component/AdditionalDetails";
import axios from "axios";
import "./App.css"

const API_KEY = "55ca4bf3871a1b90d5163940de18ae9c";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (location) => {
    setLoading(true);
    setError(null);

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
      );

      setCurrentWeather({
        temp: weatherResponse.data.main.temp,
        description: weatherResponse.data.weather[0].description,
        icon: weatherResponse.data.weather[0].icon,
        humidity: weatherResponse.data.main.humidity,
        windSpeed: weatherResponse.data.wind.speed,
      });

      const forecastList = forecastResponse.data.list
        .filter((item, index) => index % 8 === 0)
        .map((item) => ({
          date: item.dt_txt,
          temp: item.main.temp,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        }));

      setForecast(forecastList);
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>WeatherWise</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <CurrentWeather data={currentWeather} />
          <Forecast data={forecast} />
          <AdditionalDetails data={currentWeather} />
        </>
      )}
    </div>
  );
};

export default App;