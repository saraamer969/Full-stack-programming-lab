const request = require("supertest");
const app = require("../app");
const axios = require("axios");

jest.mock("axios");

describe("Weather API Unit Test", () => {

  test("Should return weather data", async () => {

    axios.get.mockResolvedValue({
      data: {
        name: "London",
        main: {
          temp: 25,
          humidity: 70
        },
        weather: [
          {
            description: "clear sky"
          }
        ]
      }
    });

    const response = await request(app)
      .get("/api/weather/London");

    expect(response.statusCode).toBe(200);

    expect(response.body.city).toBe("London");
    expect(response.body.temperature).toBe("25 °C");
  });

test("Should handle API failure", async () => {

  axios.get.mockRejectedValue(new Error("API Error"));

  const response = await request(app)
    .get("/api/weather/London");

  expect(response.statusCode).toBe(500);
});

});