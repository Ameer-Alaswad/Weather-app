// React stuff
import { WeatherContext } from "../../context/weatherContext";
import React, { useContext, useEffect } from "react";
// styles
import { formPageContainer, siteTitle } from "./formStyles";
import { resetDailyLimitFetchesLogic } from "../ustils";
import { FormInputs } from "./FormInputs";
// Storage
const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

export default function Form() {
  const { storage, setStorage } = useContext(WeatherContext);
  ///////////////////////////////////////////////////////////////////////
  useEffect(() => {
    resetDailyLimitFetchesLogic(storage, date);
  }, [storage, setStorage]);
  //////////////////////////////////////////////////////

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="form-container">
        <h1 style={siteTitle}>Weather Forecast</h1>
        <img style={{ width: "500px" }} src="/form-image.png" alt="form-" />
        <div style={formPageContainer}>
          <FormInputs />
        </div>
      </div>
    </div>
  );
}
