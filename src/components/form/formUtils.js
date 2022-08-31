import { handleUpdateAndFetchCityLogic } from "../ustils";

export const HandleFetchCityLogic = ({
  cityInput,
  setError,
  setEmptyInput,
  fetchCity,
  navigate,
  setTrackUserFetches,
  trackUserFetches,
  storage,
}) => {
  if (cityInput === "") {
    setError(false);
    return setEmptyInput(true);
  }
  setEmptyInput(false);
  handleUpdateAndFetchCityLogic({
    fetchCity,
    cityInput,
    setError,
    navigate,
    setTrackUserFetches,
    trackUserFetches,
    storage,
  });
};
