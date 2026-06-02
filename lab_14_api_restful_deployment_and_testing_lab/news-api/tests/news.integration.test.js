const request = require("supertest");
const app = require("../app");
const nock = require("nock");

describe("News Integration Test", () => {

  test("Get US headlines", async () => {

    nock("https://newsapi.org")
      .get(/.*/)
      .reply(200, {
        articles: [
          {
            title: "News 1",
            source: {
              name: "CNN"
            },
            url: "https://cnn.com",
            publishedAt: "2025-01-01"
          }
        ]
      });

    const response = await request(app)
      .get("/api/news/us");

    expect(response.statusCode).toBe(200);

  });

});