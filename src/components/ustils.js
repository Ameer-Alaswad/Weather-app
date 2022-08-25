export const handleUpdateAndFetchCityLogic = ({
  fetchCity,
  cityInput,
  setError,
  navigate,
}) => {
  fetchCity(cityInput, setError).then((city) => {
    if (city === undefined) return;
    localStorage.setItem("cityDataInStorage", JSON.stringify([city]));
    return navigate("/city");
  });
};
