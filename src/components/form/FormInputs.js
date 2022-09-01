// React stuff
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Material Ui
import useMediaQuery from "@mui/material/useMediaQuery";

import { InputLabel, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
// Styles
import {
  errorMessage,
  formContainer,
  formContainerResponsive,
} from "./formStyles";
// Context
import { WeatherContext } from "../../context/weatherContext";
// UTILS
import { HandleFetchCityLogic } from "./formUtils";
import { fetchCity } from "../fetch";
export const FormInputs = () => {
  const matches = useMediaQuery("(max-width:550px)");
  const limitFetchWeatherDataLocalStorage = JSON.parse(
    localStorage.getItem("limitWeatherFetches" || [])
  );
  let navigate = useNavigate();
  const {
    setCityInput,
    error,
    emptyInput,
    cityInput,
    setError,
    setTrackUserFetches,
    trackUserFetches,
    storage,
    setStorage,
    setEmptyInput,
  } = useContext(WeatherContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTrackUserFetches(limitFetchWeatherDataLocalStorage);
    HandleFetchCityLogic({
      cityInput,
      setError,
      setEmptyInput,
      fetchCity,
      navigate,
      setTrackUserFetches,
      trackUserFetches,
      storage,
      setStorage,
    });
    setStorage(limitFetchWeatherDataLocalStorage);
  };
  return (
    <div style={matches ? formContainerResponsive : formContainer}>
      <form onSubmit={handleSubmit}>
        <FormControl
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <InputLabel htmlFor="my-input">Enter a City</InputLabel>
          <Input
            style={{
              marginRight: "10px",
            }}
            onChange={(e) => setCityInput(e.target.value)}
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Search
          </Button>
        </FormControl>
      </form>
      {emptyInput && <div style={errorMessage}>Please type a City</div>}
      {error && <div style={errorMessage}>Location does not exist</div>}
    </div>
  );
};
