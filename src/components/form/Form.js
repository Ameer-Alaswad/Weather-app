import { InputLabel, Input, fabClasses } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import useFetchWeather from "../../hooks/useWeathrFetch";
import React, { useState, useRef, useContext } from "react";
import { FormControl } from "@mui/material";
import axios from "axios";
import { WeatherContext } from "../../context/weatherContext";
export default function Form() {
  const { cityWeather, setCityWeather } = useContext(WeatherContext);
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);
  const fetchCity = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=7aeb059c876c48e29eb50119221608&q=${cityName}&days=5&aqi=no&alerts=no`
      );
      setError(false);
      return res;
    } catch (error) {
      setError(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput === "") return setEmptyInput(true);
    setEmptyInput(false);
    fetchCity(cityInput).then((city) => {
      if (city === undefined) return;
      return setCityWeather([city]);
    });
  };
  const handleInputChange = (e) => {
    setCityInput(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <h1>Weather app</h1>
      <FormControl onSubmit={handleSubmit}>
        <InputLabel htmlFor="my-input">Enter a City</InputLabel>
        <Input
          onChange={handleInputChange}
          id="my-input"
          aria-describedby="my-helper-text"
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </FormControl>
      {emptyInput && <div>plz add something</div>}
      {error && <div>Location does not exist</div>}
    </div>
  );
}
