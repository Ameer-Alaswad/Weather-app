import { render, screen } from "../../test-utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WeatherContextProvider } from "../../context/weatherContext";
import { FormInputs } from "./FormInputs";
import user from "@testing-library/user-event";
describe("testing formInputs component", () => {
  test("Form Input", () => {
    render(
      <BrowserRouter>
        <WeatherContextProvider>
          <Routes>
            <Route path="*" element={<FormInputs />} />
          </Routes>
        </WeatherContextProvider>
      </BrowserRouter>
    );
    const formContainer = screen.queryByTestId("form container");
    expect(formContainer).toBeInTheDocument();
    ///////////////////////////////////////////////////
    const firstErrorMessage = screen.queryByText(/location does not exist/i);
    expect(firstErrorMessage).not.toBeInTheDocument();
    ///////////////////////////////////////////////
    const secondErrorMessageDiv = screen.queryByText(/please type a city/i);
    expect(secondErrorMessageDiv).not.toBeInTheDocument();
    /////////////////////////////////////////////////////
    const form = screen.queryByTestId("form");
    expect(form).toBeInTheDocument();
  });
  test("input", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<FormInputs />} />
        </Routes>
      </BrowserRouter>
    );
    const input = screen.getByRole("textbox", { name: /enter a city/i });
    expect(input).toBeInTheDocument();
  });
  test("input renders empty string", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<FormInputs />} />
        </Routes>
      </BrowserRouter>
    );
    const input = screen.getByRole("textbox", { name: /enter a city/i });
    expect(input).toHaveValue("");
  });
  test("input changes value to string khaled", async () => {
    user.setup();
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<FormInputs />} />
        </Routes>
      </BrowserRouter>
    );
    const input = screen.getByRole("textbox", { name: /enter a city/i });
    await user.type(input, "khaled");
    expect(input).toHaveValue("khaled");
  });
});
