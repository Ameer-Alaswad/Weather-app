import Form from "./components/form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayCityWeather from "./components/display-city-weather/DisplayCityWeather";
import ButtonAppBar from "./components/header/header";
import SimpleBottomNavigation from "./components/footer/footer";

function App() {
  const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  console.log(date);
  const limitFetchWeatherDataLocalStorage = localStorage.getItem(
    "limitWeatherFetches" || []
  );
  if (!limitFetchWeatherDataLocalStorage)
    localStorage.setItem(
      "limitWeatherFetches",
      JSON.stringify([{ fetchesPerDay: 0, todayDate: date }])
    );
  return (
    <div
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      className="App"
    >
      <Router>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/city" element={<DisplayCityWeather />} />
        </Routes>
        <SimpleBottomNavigation />
      </Router>
    </div>
  );
}

export default App;
