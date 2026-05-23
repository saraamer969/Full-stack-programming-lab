const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Weather endpoint — pass city name in URL
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
    if (error.response && error.response.status === 404) {
      res.status(404).json({ error: "City not found. Please enter a valid city name." });
    } else {
      res.status(500).json({ error: "Something went wrong. Try again later." });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});