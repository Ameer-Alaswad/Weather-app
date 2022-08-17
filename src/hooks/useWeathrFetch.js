import { useState, useEffect } from "react";
import axios from "axios";

const params = {
  access_key: "58d722be7c8b5983920b4fafbd4077e0",
  query: "Berlin",
};
const useFetchWeather = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchCity = async (cityName) => {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=7aeb059c876c48e29eb50119221608&q=${cityName}&days=5&aqi=no&alerts=no`
    );
    return await setData(res);
  };
  return { error, data, fetchCity };
};

export default useFetchWeather;
