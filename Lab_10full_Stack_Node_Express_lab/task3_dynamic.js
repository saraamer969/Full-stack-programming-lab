const express = require('express');
const app = express();

app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Hello, ${name}!</h1><p>Welcome to your profile page.</p>`);
});

app.listen(3000, () => console.log('Running at http://localhost:3000'));