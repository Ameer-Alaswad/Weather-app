import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const limitFetchWeatherDataLocalStorage = JSON.parse(
    localStorage.getItem("limitWeatherFetches" || [])
  );
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState(false);
  const [fetchesLimitError, setFetchesLimitError] = useState(false);
  const [trackUserFetches, setTrackUserFetches] = useState(null);
  const [storage, setStorage] = useState(
    limitFetchWeatherDataLocalStorage || []
  );

  return (
    <WeatherContext.Provider
      value={{
        cityInput,
        setCityInput,
        error,
        setError,
        trackUserFetches,
        setTrackUserFetches,
        fetchesLimitError,
        setFetchesLimitError,
        storage,
        setStorage,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
