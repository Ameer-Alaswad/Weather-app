// React stuff
import { WeatherContext } from "../../context/weatherContext";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
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
// Component
export default function Form() {
  let navigate = useNavigate();
  const { cityInput, setCityInput, error, setError } =
    useContext(WeatherContext);
  const [emptyInput, setEmptyInput] = useState(false);
  ///////////////////////////////////////////////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    HandleFetchCityLogic({
      cityInput,
      setError,
      setEmptyInput,
      fetchCity,
      navigate,
    });
  };
  /////////////////////////////////////////////////////////////////
  return (
    <div>
      <h1 style={siteTitle}>Weather Forecast</h1>
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
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Search
              </Button>
            </FormControl>
          </form>
          {emptyInput && <div style={errorMessage}>Please type a City</div>}
          {error && <div style={errorMessage}>Location does not exist</div>}
        </div>
      </div>
    </div>
  );
}
// hwb(25deg 8% 26%)
// rgb(38 157 245)
