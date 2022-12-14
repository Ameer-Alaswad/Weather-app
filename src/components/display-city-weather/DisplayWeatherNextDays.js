import React from "react";
// Styles
import "./DisplayCityWeather.css";
// Assets
import weatherData from "../assets";
import { generateDate } from "../utils";

export default function DisplayWeatherNextDays({ otherDays }) {
  const { WEATHER_ICONS, WEEK_DAYS } = weatherData;
  return (
    <>
      {otherDays.map((day, i) => {
        const { datetime: daysDate, temp: temperature, icon, tempmin } = day;
        console.log({ daysDate, WEEK_DAYS });
        const weekDays = generateDate(daysDate, WEEK_DAYS);
        console.log("weekDays", weekDays);
        return (
          <div key={i} className="weakly-weather-item">
            <div className="week-days-container">
              <p className="mb-0">{weekDays}</p>
            </div>
            <img
              className="weather-icons-images"
              alt="icon"
              src={WEATHER_ICONS[icon]}
            />
            <p className="mb-0">
              {temperature}&deg;/{tempmin}&deg;
            </p>
          </div>
        );
      })}
    </>
  );
}
