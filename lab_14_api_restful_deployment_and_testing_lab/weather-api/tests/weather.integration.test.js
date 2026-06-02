const request = require("supertest");
const app = require("../app");
const nock = require("nock");

describe("Weather Integration Test", () => {

  test("Fetch weather successfully", async () => {

    nock("https://api.openweathermap.org")
      .get(/.*/)
      .reply(200, {
        name: "Paris",
        main: {
          temp: 20,
          humidity: 65
        },
        weather: [
          {
            description: "cloudy"
          }
        ]
      });

    const response = await request(app)
      .get("/api/weather/Paris");

    expect(response.statusCode).toBe(200);
    expect(response.body.city).toBe("Paris");

  });

});