import Form from "./components/form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayCityWeather from "./components/display-city-weather/DisplayCityWeather";
import ButtonAppBar from "./components/header/header";
import SimpleBottomNavigation from "./components/footer/footer";

function App() {
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
      </Router>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
