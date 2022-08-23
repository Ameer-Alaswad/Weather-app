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
  fetchCity(cityInput, setError).then((city) => {
    if (city === undefined) return;
    localStorage.setItem("cityDataInStorage", JSON.stringify([city]));
    return navigate("/city");
  });
};
