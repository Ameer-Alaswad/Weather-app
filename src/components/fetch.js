import axios from "axios";

export const fetchCity = async ({
  cityInput,
  setError,
  setTrackUserFetches,
  trackUserFetches,
}) => {
  const cityNameFromStorage = JSON.parse(
    localStorage.getItem("cityDataInStorage" || [])
  );
  const city = cityInput || cityNameFromStorage[0]?.data.address;
  // setTrackUserFetches(limitFetchWeatherDataLocalStorage);
  // const addFetch = trackUserFetches.map((add) => {
  //   add.fetchesPerDay = add.fetchesPerDay + 1;
  //   return {
  //     fetchesPerDay: add.fetchesPerDay,
  //     todayDate: add.todayDate,
  //   };
  // });
  try {
    const res = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?iconSet=icons1&unitGroup=metric&key=7XMDD3J7K9FE56KUEXUDCLJCR&contentType=json`
    );
    // localStorage.setItem("limitWeatherFetches", JSON.stringify(addFetch));

    setError(false);
    return res;
  } catch (error) {
    // setError(true);
  }
};
