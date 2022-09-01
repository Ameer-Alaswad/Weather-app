// React stuff
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Material Ui
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// Context
import { WeatherContext } from "../../context/weatherContext";

export default function GoBackButton() {
  const { setCityInput, setStorage } = useContext(WeatherContext);
  //////////////////////////////////////////////////////////////////////////////
  const handleGoBackToFormComponent = () => {
    setStorage(JSON.parse(localStorage.getItem("limitWeatherFetches" || [])));
    return setCityInput("");
  };
  ///////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button
          onClick={handleGoBackToFormComponent}
          style={{ marginBottom: "5px" }}
          variant="contained"
          startIcon={<ArrowBackIcon />}
        >
          Go back
        </Button>{" "}
      </Link>
    </>
  );
}
