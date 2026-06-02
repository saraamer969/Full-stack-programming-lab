const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/api/weather/:city", async (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;

    res.json({
      city: data.name,
      temperature: data.main.temp + " °C",
      condition: data.weather[0].description,
      humidity: data.main.humidity + "%"
    });

  } catch (error) {
    res.status(500).json({ error: "Error fetching weather" });
  }
});

module.exports = app;