import axios from "axios";

export const fetchCity = async (cityName, setError) => {
  try {
    const res = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?iconSet=icons1&unitGroup=metric&key=7XMDD3J7K9FE56KUEXUDCLJCR&contentType=json`
    );
    setError(false);
    return res;
  } catch (error) {
    setError(true);
  }
};
