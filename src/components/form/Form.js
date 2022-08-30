// React stuff
import { WeatherContext } from "../../context/weatherContext";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
// functions
import { fetchCity } from "../fetch";
import { HandleFetchCityLogic } from "./formUtils";
// Material UI
import { InputLabel, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
// styles
import {
  errorMessage,
  formContainer,
  formPageContainer,
  siteTitle,
} from "./formStyles";
import { resetDailyLimitFetchesLogic } from "../ustils";

// Storage
const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
const limitFetchWeatherDataLocalStorage = JSON.parse(
  localStorage.getItem("limitWeatherFetches" || [])
);
export default function Form() {
  let navigate = useNavigate();
  const {
    cityInput,
    setCityInput,
    error,
    setError,
    setTrackUserFetches,
    trackUserFetches,
    fetchesLimitError,
  } = useContext(WeatherContext);
  const [emptyInput, setEmptyInput] = useState(false);

  ///////////////////////////////////////////////////////////////////////
  useEffect(() => {
    resetDailyLimitFetchesLogic(limitFetchWeatherDataLocalStorage, date);
  }, []);
  //////////////////////////////////////////////////////
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
    });
  };
  /////////////////////////////////////////////////////////////////

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="form-container">
        <h1 style={siteTitle}>Weather Forecast</h1>
        <img style={{ width: "500px" }} src="/form-image.png" alt="form-" />
        <div style={formPageContainer}>
          <div style={formContainer}>
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
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Search
                </Button>
                <Button
                  onClick={() => {
                    localStorage.setItem(
                      "limitWeatherFetches",
                      JSON.stringify([
                        {
                          fetchesPerDay: 0,
                          todayDate: "2022/08/29",
                        },
                      ])
                    );
                  }}
                  variant="contained"
                >
                  Search
                </Button>
              </FormControl>
            </form>
            {emptyInput && <div style={errorMessage}>Please type a City</div>}
            {error && <div style={errorMessage}>Location does not exist</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
// hwb(25deg 8% 26%)
