import "./DisplayCityWeather.css";
import React from "react";
import weatherData from "../assets";

export default function DisplayWeatherNextDays({ otherDays }) {
  const { WEATHER_ICONS, WEEK_DAYS } = weatherData;
  return (
    <>
      {otherDays.map((day, i) => {
        const { datetime: daysDate, temp: temperature, icon } = day;
        const dayDate = new Date(daysDate);
        let weekDays = WEEK_DAYS[dayDate.getDay()];

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
