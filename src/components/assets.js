const daysWeatherData = (cityData) => {
  const firstDayData = cityData[0].data.days[0];
  const { icon: firstDayIcon } = cityData[0].data.days[0];
  const { conditions } = cityData[0].data.currentConditions;
  const { resolvedAddress, days: nextFiveDays } = cityData[0].data;
  const { datetime: todayDate, temp } = firstDayData;
  const otherDays = nextFiveDays.slice(1, nextFiveDays.length);
  return {
    firstDayIcon,
    conditions,
    resolvedAddress,
    todayDate,
    temp,
    otherDays,
  };
};
const WEATHER_ICONS = {
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
const WEATHER_BACKGROUNDS = {
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
const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weatherData = {
  WEATHER_ICONS,
  WEATHER_BACKGROUNDS,
  WEEK_DAYS,
  daysWeatherData,
};
export default weatherData;
