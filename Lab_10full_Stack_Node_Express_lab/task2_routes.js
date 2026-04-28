const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('<h1>Home Page - Welcome Home!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page - Learn more about us here.</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page - Reach us at contact@example.com</h1>');
});

app.listen(3000, () => console.log('Running at http://localhost:3000'));