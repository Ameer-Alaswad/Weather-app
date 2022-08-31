// Material UI
import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
// React stuff
import React, { useContext } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { useNavigate } from "react-router-dom";
// Utils
import { fetchCity } from "../fetch";
import { handleUpdateAndFetchCityLogic } from "../ustils";
// Storage
const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
const kalb = [{ fetchesPerDay: 0, todayDate: date }];
let limitFetchWeatherDataLocalStorage = JSON.parse(
  localStorage.getItem("limitWeatherFetches" || [])
);
// const { fetchesPerDay, todayDate } = limitFetchWeatherDataLocalStorage[0];
if (
  limitFetchWeatherDataLocalStorage === undefined ||
  limitFetchWeatherDataLocalStorage === null
) {
  limitFetchWeatherDataLocalStorage = kalb;
}
export default function UpdateWeatherButton() {
  let navigate = useNavigate();

  const { cityInput, setError, setStorage } = useContext(WeatherContext);
  const handleUpdate = () => {
    // console.log(fetchesPerDay);
    // if (fetchesPerDay >= 5) {
    //   navigate("/");
    //   return alert("Sorry out of limit for the day, Come back tomorrow ");
    // }
    console.log(
      "update",
      JSON.parse(localStorage.getItem("limitWeatherFetches" || []))
    );
    setStorage(JSON.parse(localStorage.getItem("limitWeatherFetches" || [])));

    return handleUpdateAndFetchCityLogic({
      fetchCity,
      cityInput,
      setError,
      navigate,
    });
  };
  return (
    <Button
      style={{ height: "36.5px" }}
      onClick={handleUpdate}
      variant="contained"
      startIcon={<UpdateIcon />}
    >
      Update
    </Button>
  );
}
