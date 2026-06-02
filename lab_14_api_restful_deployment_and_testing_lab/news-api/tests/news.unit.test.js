const request = require("supertest");
const app = require("../app");
const axios = require("axios");

jest.mock("axios");

describe("News Unit Test", () => {

  test("Should return news articles", async () => {

    axios.get.mockResolvedValue({
      data: {
        articles: [
          {
            title: "Breaking News",
            source: {
              name: "BBC"
            },
            url: "https://bbc.com",
            publishedAt: "2025-01-01"
          }
        ]
      }
    });

    const response = await request(app)
      .get("/api/news/us");

    expect(response.statusCode).toBe(200);
    expect(response.body.news[0].title)
      .toBe("Breaking News");
  });

  test("Should handle API failure", async () => {

    axios.get.mockRejectedValue(new Error("API Error"));

    const response = await request(app)
      .get("/api/news/us");

    expect(response.statusCode).toBe(500);
    expect(response.body.error)
      .toBe("Failed to fetch news. Check your API key or country code.");
  });

});