import { createContext, useState } from "react";

export const WeatherContext = createContext();
const limitFetchWeatherDataLocalStorage = JSON.parse(
  localStorage.getItem("limitWeatherFetches" || [])
);
export const WeatherContextProvider = ({ children }) => {
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState(false);
  const [fetchesLimitError, setFetchesLimitError] = useState(false);
  const [trackUserFetches, setTrackUserFetches] = useState(null);
  const [hoursVisible, setHoursVisible] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

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
        hoursVisible,
        setHoursVisible,
        emptyInput,
        setEmptyInput,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
