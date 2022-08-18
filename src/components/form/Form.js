import { InputLabel, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
// import useFetchWeather from "../../hooks/useWeathrFetch";
import React, { useState, useContext } from "react";
import { FormControl } from "@mui/material";
import axios from "axios";
import { WeatherContext } from "../../context/weatherContext";
import { useNavigate } from "react-router-dom";
export default function Form() {
  let navigate = useNavigate();
  const { setCityWeather } = useContext(WeatherContext);
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);
  const fetchCity = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=7aeb059c876c48e29eb50119221608&q=${cityName}&days=6&aqi=no&alerts=no`
      );
      setError(false);
      return res;
    } catch (error) {
      setError(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput === "") {
      setError(false);
      return setEmptyInput(true);
    }
    setEmptyInput(false);
    fetchCity(cityInput).then((city) => {
      if (city === undefined) return;
      setCityWeather([city]);
      localStorage.setItem("cityDataInStorage", JSON.stringify([city]));
      return navigate("/city");
    });
  };
  const handleInputChange = (e) => {
    setCityInput(e.target.value);
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Weather app
      </h1>
      <div
        style={{
          display: "flex",
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "150px",
            width: "400px",
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <FormControl
            style={{
              display: "flex",
              flexDirection: "row",
            }}
            onSubmit={handleSubmit}
          >
            <InputLabel htmlFor="my-input">Enter a City</InputLabel>
            <Input
              style={{
                marginRight: "10px",
              }}
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
          {emptyInput && (
            <div
              style={{
                position: "absolute",
                top: "110px",
              }}
            >
              Please type a City
            </div>
          )}
          {error && (
            <div
              style={{
                position: "absolute",
                top: "110px",
              }}
            >
              Location does not exist
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
