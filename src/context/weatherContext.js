import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState(false);
  const [trackUserFetches, setTrackUserFetches] = useState(null);

  return (
    <WeatherContext.Provider
      value={{
        cityInput,
        setCityInput,
        error,
        setError,
        trackUserFetches,
        setTrackUserFetches,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
