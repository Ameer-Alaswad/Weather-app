import { useContext, useEffect } from "react";
// styles
import "./DisplayCityWeather.css";
// Data
import weatherData, { defaultWeatherData } from "../assets";
// Components
import DisplayWeatherNextDays from "./DisplayWeatherNextDays";
import DisplayWeatherHours from "./DisplayHoursWeather";
import UpdateWeatherButton from "./UpdateWeatherButton";
// Context
import { WeatherContext } from "../../context/weatherContext";
import {
  outOfFetchesLimitChecker,
  resetDailyLimitFetchesLogic,
  thereIsNoWeatherDataChecker,
} from "../utils";

import { useNavigate } from "react-router-dom";
import GoBackButton from "./GoBackButton";
import { OpenHoursForecast } from "./OpenHoursForecast";
import { ForecastConditionsData } from "./ForecastConditionsData";

const { daysWeatherData } = weatherData;

const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

////////////////////////////////////////////////////////////////////////////
function DisplayCityWeather() {
  let navigate = useNavigate();
  const { setFetchesLimitError, hoursVisible, storage, setStorage } =
    useContext(WeatherContext);
  const cityData = JSON.parse(localStorage.getItem("cityDataInStorage" || []));
  const weatherForecastData = cityData || defaultWeatherData;
  const { otherDays } = daysWeatherData(weatherForecastData);

  ///////////////////////////////////////////////////
  useEffect(() => {
    const limitFetchWeatherDataLocalStorage = JSON.parse(
      localStorage.getItem("limitWeatherFetches" || [])
    );
    resetDailyLimitFetchesLogic(storage, date, setStorage);
    //////////////////////////////////////////////////////////////
    thereIsNoWeatherDataChecker(cityData, navigate, storage);
    //////////////////////////////////////////////////
    outOfFetchesLimitChecker(limitFetchWeatherDataLocalStorage, navigate);
  }, [navigate, setFetchesLimitError, cityData, storage, setStorage]);

  return (
    <div className="display-city-weather-container">
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="buttons-container">
              <GoBackButton />
              <UpdateWeatherButton />
            </div>
            <div className="col-lg-8 grid-margin stretch-card">
              <div className="card card-weather">
                <ForecastConditionsData />
                <div className="card-body p-0">
                  <div className="d-flex weakly-weather">
                    <DisplayWeatherNextDays otherDays={otherDays} />
                  </div>
                </div>
              </div>
              {hoursVisible && (
                <div className="hours-forecast">
                  <DisplayWeatherHours cityData={cityData} />
                </div>
              )}
              <div className="open-hours-forecast-button-container">
                <OpenHoursForecast />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCityWeather;
