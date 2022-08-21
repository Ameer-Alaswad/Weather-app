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
  const cityData = JSON.parse(localStorage.getItem("cityDataInStorage" || []));
  const firstDayData = cityData[0].data.days[0];
  const { conditions } = cityData[0].data.currentConditions;
  const { resolvedAddress } = cityData[0].data;
  const { datetime: todayDate, temp } = firstDayData;
  const { days: nextFiveDays } = cityData[0].data;
  const otherDays = nextFiveDays.slice(1, 6);
  console.log(otherDays);
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
                <div className="card-body">
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

                      {/* <img
                        src={todayIcon}
                        style={{ height: "100px", width: "100px" }}
                        alt="icons"
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="d-flex weakly-weather">
                    {otherDays.map((day, i) => {
                      const { datetime: daysDate, temp: tempreture } = day;
                      const dayDate = new Date(daysDate);
                      let weekDays = weekday[dayDate.getDay()];

                      return (
                        <div key={i} className="weakly-weather-item">
                          <p className="mb-0">{weekDays}</p>
                          {/* <img  alt="icons" /> */}
                          <p className="mb-0">{tempreture}&deg;</p>
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
