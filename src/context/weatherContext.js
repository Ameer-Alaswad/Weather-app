import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [cityInput, setCityInput] = useState("");

  return (
    <WeatherContext.Provider
      value={{
        cityInput,
        setCityInput,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
