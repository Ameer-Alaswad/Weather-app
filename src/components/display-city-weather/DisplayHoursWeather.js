import "./DisplayCityWeather.css";
import React from "react";
import weatherData from "../assets";

export default function DisplayWeatherHours({ cityData }) {
  const { WEATHER_ICONS } = weatherData;
  const { hours } = cityData[0].data.days[0];
  const today = new Date();
  const timeNow = today.getHours();

  return (
    <>
      {hours.map((day, i) => {
        const { datetime, icon, temp } = day;
        let time2Nums = datetime.slice(0, 2);
        const time4Nums = datetime.slice(0, 5);
        if (timeNow <= Number(time2Nums)) {
          return (
            <div className="hour" key={i}>
              <p className="mb-0">{time4Nums}</p>
              <img
                className="weather-icons-images"
                alt="icon"
                src={WEATHER_ICONS[icon]}
              />
              <p className="mb-0">{temp}&deg;</p>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
