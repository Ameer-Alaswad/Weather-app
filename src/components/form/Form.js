import { InputLabel, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import useFetchWeather from "../../hooks/useWeathrFetch";
import React, { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [cityName, setCityName] = useState("");
  useFetchWeather(cityName);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(inputValue);
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
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
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}
