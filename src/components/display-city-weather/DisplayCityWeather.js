import React from "react";
import { Link } from "react-router-dom";
import "./DisplayCityWeather.css";
import Button from "@mui/material/Button";
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function DisplayCityWeather() {
  const cityData = JSON.parse(localStorage.getItem("cityDataInStorage"));
  console.log(cityData);
  //   const icon = cityData[0].data.forecast.forecastday[0].day.condition.icon;
  //   const { icon: todayIcon } = cityData[0].data.current.condition;
  const { name: cityName, country } = cityData[0].data.location;
  const { temp_c: tempreture } = cityData[0].data.current;
  const { forecastday } = cityData[0].data.forecast;
  const currentDayDate = forecastday[0].date;
  const currentDay = new Date(forecastday[0].date);
  const otherDays = forecastday.slice(1, forecastday.length);
  let tday = weekday[currentDay.getDay()];
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
                <div className="card-body">
                  {/* <img
                    src={todayIcon}
                    style={{ height: "80px", width: "80px" }}
                    alt="icons"
                  /> */}
                  <div className="weather-date-location">
                    <h3>{tday}</h3>
                    <p className="text-gray">
                      <span className="weather-date">{currentDayDate}</span>
                      <span className="weather-location">
                        {" "}
                        {cityName}, {country}
                      </span>
                    </p>
                  </div>
                  <div className="weather-data d-flex">
                    <div className="mr-auto">
                      <h4 className="display-3">
                        <span className="symbol">{tempreture}&deg;</span>C
                      </h4>
                      <p>Cloudy</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="d-flex weakly-weather">
                    {otherDays.map((day, i) => {
                      const dayDate = new Date(day.date);
                      let weekDays = weekday[dayDate.getDay()];
                      const { icon: daysIcons } = day.day.condition;
                      const { maxtemp_c: temperature } = day.day;
                      return (
                        <div key={i} className="weakly-weather-item">
                          <p className="mb-0">{weekDays}</p>
                          <img src={daysIcons} alt="icons" />
                          <p className="mb-0">{temperature}&deg;</p>
                        </div>
                      );
                    })}
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
