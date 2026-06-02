const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

// News endpoint — pass country code in URL (e.g., us, gb, pk)
app.get("/api/news/:country", async (req, res) => {
  const country = req.params.country;
  const apiKey = process.env.NEWS_API_KEY;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&pageSize=5`
    );

    const articles = response.data.articles;

    if (!articles || articles.length === 0) {
      return res.status(404).json({ error: "No news found for this country code." });
    }

    const news = articles.map((article) => ({
      title: article.title,
      source: article.source.name,
      url: article.url,
      publishedAt: article.publishedAt
    }));

    res.json({
      country: country.toUpperCase(),
      totalResults: news.length,
      news
    });

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch news. Check your API key or country code."
    });
  }
});

module.exports = app;