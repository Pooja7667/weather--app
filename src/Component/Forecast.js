import React from "react";

const Forecast = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>5-Day Forecast</h2>
      <ul>
        {data.map((day, index) => (
          <li key={index}>
            <p>{day.date}</p>
            <p>Temperature: {day.temp}°C</p>
            <p>Description: {day.description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.icon}.png`}
              alt="weather icon"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
