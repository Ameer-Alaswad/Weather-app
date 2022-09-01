// React Stuff
import React, { useContext } from "react";
// Context
import { WeatherContext } from "../../context/weatherContext";
// Material Ui
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "@mui/material/Button";

export const OpenHoursForecast = () => {
  const { setHoursVisible, hoursVisible } = useContext(WeatherContext);

  return (
    <div className="open-hours-forecast-button-container">
      <Button
        onClick={() => setHoursVisible(!hoursVisible)}
        variant="contained"
        endIcon={hoursVisible ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      >
        Hours
      </Button>
    </div>
  );
};
