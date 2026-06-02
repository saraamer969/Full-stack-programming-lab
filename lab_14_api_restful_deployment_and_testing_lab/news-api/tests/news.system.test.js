const request = require("supertest");
const app = require("../app");

describe("News System Test", () => {

  test("Invalid country code", async () => {

    const response = await request(app)
      .get("/api/news/xyz");

    expect(response.statusCode).toBeGreaterThanOrEqual(400);

  });

});