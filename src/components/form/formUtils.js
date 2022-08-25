import { handleUpdateAndFetchCityLogic } from "../ustils";

export const HandleFetchCityLogic = ({
  cityInput,
  setError,
  setEmptyInput,
  fetchCity,
  navigate,
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
  });
};
