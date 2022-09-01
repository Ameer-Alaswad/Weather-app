import React from "react";
// Styles
import "./DisplayCityWeather.css";
// Assets
import weatherData from "../assets";
import { generateDate } from "../ustils";

export default function DisplayWeatherNextDays({ otherDays }) {
  const { WEATHER_ICONS, WEEK_DAYS } = weatherData;
  return (
    <>
      {otherDays.map((day, i) => {
        const { datetime: daysDate, temp: temperature, icon } = day;
        const weekDays = generateDate(daysDate, WEEK_DAYS);

        return (
          <div key={i} className="weakly-weather-item">
            <p className="mb-0">{weekDays}</p>
            <img
              className="weather-icons-images"
              alt="icon"
              src={WEATHER_ICONS[icon]}
            />
            <p className="mb-0">{temperature}&deg;</p>
          </div>
        );
      })}
    </>
  );
}
