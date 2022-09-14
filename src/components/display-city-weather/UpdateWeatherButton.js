// Material UI
import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
// React stuff
import React, { useContext } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { useNavigate } from "react-router-dom";
// Utils
import { fetchCity } from "../fetch";
import { handleUpdateAndFetchCityLogic } from "../utils";

export default function UpdateWeatherButton() {
  let navigate = useNavigate();

  const { cityInput, setError, setStorage } = useContext(WeatherContext);
  const handleUpdate = () => {
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
