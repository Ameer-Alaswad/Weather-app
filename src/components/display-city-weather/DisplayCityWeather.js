import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// styles
import "./DisplayCityWeather.css";
// Material UI
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// Data
import weatherData from "../assets";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// Components
import DisplayWeatherNextDays from "./DisplayWeatherNextDays";
import DisplayWeatherHours from "./DisplayHoursWeather";
import UpdateWeatherButton from "./UpdateWeatherButton";
// Context
import { WeatherContext } from "../../context/weatherContext";

const { WEATHER_ICONS, WEATHER_BACKGROUNDS, WEEK_DAYS, daysWeatherData } =
  weatherData;
////////////////////////////////////////////////////////////////////////////
function DisplayCityWeather() {
  const { setCityInput, setTrackUserFetches, trackUserFetches } =
    useContext(WeatherContext);
  const [hoursVisible, setHoursVisible] = useState(false);
  const cityData = JSON.parse(localStorage.getItem("cityDataInStorage" || []));
  const {
    firstDayIcon,
    conditions,
    resolvedAddress,
    todayDate,
    temp,
    otherDays,
  } = daysWeatherData(cityData);
  ////////////////////////////////////

  const dayDate = new Date(todayDate);
  let weekDay = WEEK_DAYS[dayDate.getDay()];
  return (
    <div className="display-city-weather-container">
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="buttons-container">
              <Link style={{ textDecoration: "none" }} to="/">
                <Button
                  onClick={() => setCityInput("")}
                  style={{ marginBottom: "5px" }}
                  variant="contained"
                  startIcon={<ArrowBackIcon />}
                >
                  Go back
                </Button>{" "}
              </Link>
              <UpdateWeatherButton />
            </div>
            <div className="col-lg-8 grid-margin stretch-card">
              <div className="card card-weather">
                <div
                  className="card-body"
                  style={{
                    backgroundImage: `url(${WEATHER_BACKGROUNDS[firstDayIcon]})`,
                  }}
                >
                  <div className="weather-date-location">
                    <h3>{weekDay}</h3>
                    <p className="text-gray">
                      <span className="weather-date">{todayDate}</span>
                      <span className="weather-location">
                        {" "}
                        {resolvedAddress}
                      </span>
                    </p>
                  </div>
                  <div className="weather-data d-flex">
                    <div className="mr-auto">
                      <h4 className="display-3">
                        <span className="symbol">{temp}&deg;</span>C
                        <span className="condition">, {conditions}</span>
                      </h4>

                      <img
                        src={WEATHER_ICONS[firstDayIcon]}
                        className="first-day-icon"
                        alt="icons"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="d-flex weakly-weather">
                    <DisplayWeatherNextDays otherDays={otherDays} />
                  </div>
                </div>
              </div>
              {hoursVisible && (
                <div className="hours-forecast">
                  <DisplayWeatherHours cityData={cityData} />
                </div>
              )}
              <div className="open-hours-forecast-button-container">
                <Button
                  onClick={() => setHoursVisible(!hoursVisible)}
                  variant="contained"
                  endIcon={
                    hoursVisible ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                  }
                >
                  Hours
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCityWeather;
