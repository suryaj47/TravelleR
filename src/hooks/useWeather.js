import { useState, useEffect, useCallback } from "react";

export const useWeather = (lat, lon) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(
    async (signal) => {
      if (
        lat === null ||
        lon === null ||
        lat === undefined ||
        lon === undefined
      ) {
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`;

        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`Weather fetch failed: ${response.statusText}`);
        }

        const result = await response.json();

        setData({
          temperature: result.current.temperature_2m,
          feelsLike: result.current.apparent_temperature,
          humidity: result.current.relative_humidity_2m,
          windSpeed: result.current.wind_speed_10m,
          isDay: Boolean(result.current.is_day),
          weatherCode: result.current.weather_code,
          raw: result,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to fetch weather data");
        }
      } finally {
        setLoading(false);
      }
    },
    [lat, lon],
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchWeather(controller.signal);

    return () => {
      controller.abort();
    };
  }, [fetchWeather]);

  return { data, loading, error, refetch: () => fetchWeather() };
};
