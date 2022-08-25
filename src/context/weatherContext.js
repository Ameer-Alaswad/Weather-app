import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState(false);

  return (
    <WeatherContext.Provider
      value={{
        cityInput,
        setCityInput,
        error,
        setError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
