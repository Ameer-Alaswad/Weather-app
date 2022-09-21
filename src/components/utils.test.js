import { generateDate } from "./ustils";

describe("testing functions", () => {
  test("testing weekday generator", () => {
    expect(
      generateDate("2022-09-23", [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ])
    ).toMatch("Friday");
  });
});
