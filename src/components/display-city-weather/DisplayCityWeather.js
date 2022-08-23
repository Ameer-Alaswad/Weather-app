import { Link } from "react-router-dom";
import "./DisplayCityWeather.css";
import Button from "@mui/material/Button";
import { useState } from "react";
const weatherIcons = {
  snow: "/weather-icons/snow.png",
  rain: "/weather-icons/rain.png",
  fog: "/weather-icons/fog.png",
  wind: "/weather-icons/wind.png",
  cloudy: "/weather-icons/cloudy.png",
  "partly-cloudy-day": "/weather-icons/partly-cloudy-day.png",
  "partly-cloudy-night": "/weather-icons/partly-cloudy-night.png",
  "clear-day": "/weather-icons/clear-day.png",
  "clear-night": "/weather-icons/clear-night.png",
};
const weatherBackground = {
  snow: "/weather-backgrounds/snow.jpg",
  rain: "/weather-backgrounds/rain.jpg",
  fog: "/weather-backgrounds/fog.jpg",
  wind: "/weather-backgrounds/wind.jpg",
  cloudy: "/weather-backgrounds/cloudy.jpg",
  "partly-cloudy-day": "/weather-backgrounds/partly-cloudy-day.jpg",
  "partly-cloudy-night": "/weather-backgrounds/partly-cloudy-night.jpg",
  "clear-day": "/weather-backgrounds/clear-day.jpg",
  "clear-night": "/weather-backgrounds/clear-night.jpg",
};
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
  const cityData = JSON.parse(localStorage.getItem("cityDataInStorage" || []));
  const [hoursDiv, setHoursDiv] = useState(false);
  const firstDayData = cityData[0].data.days[0];
  const { icon: firstDayIcon } = cityData[0].data.days[0];
  const { conditions } = cityData[0].data.currentConditions;
  const { resolvedAddress } = cityData[0].data;
  const { datetime: todayDate, temp } = firstDayData;
  const { days: nextFiveDays } = cityData[0].data;
  const otherDays = nextFiveDays.slice(1, nextFiveDays.length);
  console.log(cityData);
  const dayDate = new Date(todayDate);
  let weekDay = weekday[dayDate.getDay()];
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
                    backgroundImage: `url(${weatherBackground[firstDayIcon]})`,
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
                        <span style={{ fontWeight: "lighter" }}>
                          , {conditions}
                        </span>
                      </h4>

                      <img
                        src={weatherIcons[firstDayIcon]}
                        style={{ height: "100px", width: "100px" }}
                        alt="icons"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="d-flex weakly-weather">
                    {otherDays.map((day, i) => {
                      const {
                        datetime: daysDate,
                        temp: temperature,
                        icon,
                      } = day;
                      console.log(icon);
                      const dayDate = new Date(daysDate);
                      let weekDays = weekday[dayDate.getDay()];

                      return (
                        <div key={i} className="weakly-weather-item">
                          <p className="mb-0">{weekDays}</p>
                          <img
                            style={{ width: "50px", marginTop: "10px" }}
                            alt="icon"
                            src={weatherIcons[icon]}
                          />
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
