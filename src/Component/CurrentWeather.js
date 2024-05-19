import React from "react";

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {data.temp}°C</p>
      <p>Description: {data.description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${data.icon}.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default CurrentWeather;
