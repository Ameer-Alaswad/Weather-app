import Form from "./components/form/Form";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayCityWeather from "./components/display-city-weather/DisplayCityWeather";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/city" element={<DisplayCityWeather />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
