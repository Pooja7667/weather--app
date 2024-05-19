import React from "react";

const AdditionalDetails = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>Additional Details</h2>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} m/s</p>
    </div>
  );
};

export default AdditionalDetails;
