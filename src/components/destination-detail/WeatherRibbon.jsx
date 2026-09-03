import React from "react";
import { useWeather } from "../../hooks/useWeather";

const WeatherRibbon = ({ coordinates }) => {
  const { data, loading, error } = useWeather(coordinates.lat, coordinates.lng);

  if (loading)
    return (
      <div className="weather-ribbon loading">Fetching live conditions...</div>
    );
  if (error || !data)
    return <div className="weather-ribbon error">Weather data unavailable</div>;

  return (
    <div className="weather-ribbon">
      <div className="weather-item">
        <span className="weather-label">Currently</span>
        <span className="weather-value">{data.temperature}°C</span>
      </div>
      <div className="weather-item">
        <span className="weather-label">Feels Like</span>
        <span className="weather-value">{data.feelsLike}°C</span>
      </div>
      <div className="weather-item">
        <span className="weather-label">Humidity</span>
        <span className="weather-value">{data.humidity}%</span>
      </div>
    </div>
  );
};

export default WeatherRibbon;
