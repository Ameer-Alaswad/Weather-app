export const handleUpdateAndFetchCityLogic = ({
  fetchCity,
  cityInput,
  setError,
  navigate,
  setTrackUserFetches,
  trackUserFetches,
  setStorage,
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

    if (limitFetchWeatherDataLocalStorage[0]?.fetchesPerDay >= 5) {
      alert("Sorry you passed your limit for today, come back tomorrow!");
      return navigate("/");
    }
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
  });
};
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
export const resetDailyLimitFetchesLogic = (storage, date, setStorage) => {
  if (storage) {
    if (date !== storage[0]?.todayDate) {
      localStorage.setItem(
        "limitWeatherFetches",
        JSON.stringify([{ fetchesPerDay: 0, todayDate: date }])
      );
    }
  }
};

export const thereIsNoWeatherDataChecker = (cityData, navigate) => {
  if (cityData === undefined || cityData === null) {
    setTimeout(() => {
      return alert("Search for a city first!");
    }, 200);
    return navigate("/");
  }
};

export const outOfFetchesLimitChecker = (
  limitFetchWeatherDataLocalStorage,
  navigate,
  storage
) => {
  if (limitFetchWeatherDataLocalStorage) {
    if (limitFetchWeatherDataLocalStorage[0]?.fetchesPerDay >= 5) {
      setTimeout(() => {
        return alert(
          "Sorry you passed your limit for today, come back tomorrow!"
        );
      }, 200);
      return navigate("/");
    }
  }
};

export const generateDate = (date, WEEK_DAYS) => {
  const dayDate = new Date(date);
  let weekDay = WEEK_DAYS[dayDate.getDay()];
  return weekDay;
};
