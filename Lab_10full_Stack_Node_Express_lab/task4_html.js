const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Express Page</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 30px; background: #f4f4f4; }
          h1 { color: #333; }
          ul { background: white; padding: 20px; border-radius: 8px; }
          li { margin: 8px 0; }
        </style>
      </head>
      <body>
        <h1>Welcome to My Express App</h1>
        <p>This is a simple HTML page served using Express.js in Node.js.</p>
        <ul>
          <li>Fast and lightweight</li>
          <li>Easy routing</li>
          <li>Runs on Node.js</li>
        </ul>
      </body>
    </html>
  `);
});

app.listen(3000, () => console.log('Running at http://localhost:3000'));