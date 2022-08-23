import { Link } from "react-router-dom";
// styles
import "./DisplayCityWeather.css";
// Material UI
import Button from "@mui/material/Button";
// Data
import weatherData from "../assets";
// Components
import DisplayWeatherNextDays from "./DisplayWeatherNextDays";
const { WEATHER_ICONS, WEATHER_BACKGROUNDS, WEEK_DAYS } = weatherData;
////////////////////////////////////////////////////////////////////////////
function DisplayCityWeather() {
  const { firstDayIcon, conditions, resolvedAddress, todayDate, temp } =
    weatherData.weatherDisplayData;
  const dayDate = new Date(todayDate);
  let weekDay = WEEK_DAYS[dayDate.getDay()];
  return (
    <div>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <Link style={{ textDecoration: "none" }} to="/">
              <Button style={{ marginBottom: "10px" }} variant="contained">
                Go back
              </Button>{" "}
            </Link>
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
                    <DisplayWeatherNextDays />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCityWeather;
