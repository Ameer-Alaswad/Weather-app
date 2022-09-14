import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WeatherContextProvider } from "../../context/weatherContext";
import Form from "./Form";

test("site title", () => {
  render(
    <BrowserRouter>
      <WeatherContextProvider>
        <Routes>
          <Route path="*" element={<Form />} />
        </Routes>
      </WeatherContextProvider>
    </BrowserRouter>
  );
  const componentWrapper = screen.getByTestId("component wrapper");
  expect(componentWrapper).toBeInTheDocument();

  const formContainer = screen.getByTestId("form-container");
  expect(formContainer).toBeInTheDocument();

  const siteTitle = screen.getByRole("heading");
  expect(siteTitle).toBeInTheDocument();

  const siteImage = screen.getByAltText("form-pic");

  expect(siteImage).toBeInTheDocument();
  expect(siteImage.src).toContain("/form-image.png");

  const textElement = screen.getByText("Weather Forecast").textContent;
  expect(textElement).toMatch("Weather Forecast");
});
