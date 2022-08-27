export const handleUpdateAndFetchCityLogic = ({
  fetchCity,
  cityInput,
  setError,
  navigate,
  setTrackUserFetches,
  trackUserFetches,
}) => {
  fetchCity({
    cityInput,
    setError,
    setTrackUserFetches,
    trackUserFetches,
  }).then((city) => {
    if (city === undefined) return;
    const limitFetchWeatherDataLocalStorage = JSON.parse(
      localStorage.getItem("limitWeatherFetches" || [])
    );
    // const addFetch = limitFetchWeatherDataLocalStorage.map((add) => {
    //   add.fetchesPerDay = add.fetchesPerDay + 1;
    //   return {
    //     fetchesPerDay: add.fetchesPerDay,
    //     todayDate: add.todayDate,
    //   };
    // });

    if (limitFetchWeatherDataLocalStorage[0]?.fetchesPerDay > 5) {
      alert("Sorry you passed your limit for today, come back tomorrow!");
      return navigate("/");
    } else {
      const addFetch = limitFetchWeatherDataLocalStorage.map((add) => {
        add.fetchesPerDay = add.fetchesPerDay + 1;
        return {
          fetchesPerDay: add.fetchesPerDay,
          todayDate: add.todayDate,
        };
      });
      localStorage.setItem("limitWeatherFetches", JSON.stringify(addFetch));
      localStorage.setItem("cityDataInStorage", JSON.stringify([city]));
      return navigate("/city");
    }
  });
};
