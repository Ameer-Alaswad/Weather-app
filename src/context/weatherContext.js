import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [cityWeather, setCityWeather] = useState(null);

  return (
    <WeatherContext.Provider value={{ cityWeather, setCityWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
