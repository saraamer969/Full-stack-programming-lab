const request = require("supertest");
const app = require("../app");

describe("Weather System Test", () => {

  test("Invalid city", async () => {

    const response = await request(app)
      .get("/api/weather/invalidcity123");

    expect(response.statusCode).toBeGreaterThanOrEqual(400);

  });

});