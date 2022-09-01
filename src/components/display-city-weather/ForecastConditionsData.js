import React from "react";
// assets
import weatherData, { defaultWeatherData } from "../assets";
import { generateDate } from "../ustils";
// Styles
import "./DisplayCityWeather.css";

export const ForecastConditionsData = () => {
  const { WEATHER_ICONS, WEATHER_BACKGROUNDS, WEEK_DAYS, daysWeatherData } =
    weatherData;
  const cityData = JSON.parse(localStorage.getItem("cityDataInStorage" || []));
  const weatherForecastData = cityData || defaultWeatherData;
  const { firstDayIcon, conditions, resolvedAddress, todayDate, temp } =
    daysWeatherData(weatherForecastData);
  const weekDay = generateDate(todayDate, WEEK_DAYS);
  return (
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
          <span className="weather-location"> {resolvedAddress}</span>
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
  );
};
