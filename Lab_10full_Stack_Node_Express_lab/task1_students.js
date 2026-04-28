const express = require('express');
const app = express();

const students = [
  { id: 1, name: "Nida" },
  { id: 2, name: "Soha" },
  { id: 3, name: "Sarah" },
  { id: 4, name: "Fatima" },
];

app.get('/', (req, res) => {
  const listItems = students.map(s => `<li>${s.id}. ${s.name}</li>`).join('');
  res.send(`
    <h1>Student List</h1>
    <ul>${listItems}</ul>
  `);
});

app.listen(3000, () => console.log('Running at http://localhost:3000'));