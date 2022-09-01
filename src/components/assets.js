const daysWeatherData = (cityData) => {
  const firstDayData = cityData[0]?.data?.days[0];
  const { icon: firstDayIcon } = cityData[0].data.days[0];
  const { conditions } = cityData[0].data.currentConditions;
  const { resolvedAddress, days: nextFiveDays } = cityData[0].data;
  const { datetime: todayDate, temp } = firstDayData;
  const otherDays = nextFiveDays.slice(1, 7);
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

export const defaultWeatherData = [
  {
    data: {
      address: "berlin",
      currentConditions: {
        conditions: "Partially cloudy",
        datetime: "20:15:45",
        icon: "partly-cloudy-night",
        temp: 19.4,
      },
      days: [
        {
          datetime: "2022-08-30",
          icon: "partly-cloudy-day",
          temp: 17.3,
          hours: [
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
            { datetime: "00:00:00", icon: "partly-cloudy-night", temp: 16 },
          ],
        },
        { datetime: "2022-08-30", icon: "partly-cloudy-day", temp: 17.3 },
        { datetime: "2022-08-30", icon: "partly-cloudy-day", temp: 17.3 },
        { datetime: "2022-08-30", icon: "partly-cloudy-day", temp: 17.3 },
        { datetime: "2022-08-30", icon: "partly-cloudy-day", temp: 17.3 },
      ],
    },
  },
];
