const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log(`${req.method} route /`)
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', function(req, res) {
  console.log(`${req.method} route /notes`)
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', function(req, res) {
  console.log(`${req.method} route /api/notes`)
  const rawData = fs.readFileSync('./db/db.json');
  const notes = JSON.parse(rawData);
  res.json(notes);
});

app.post('/api/notes', function(req, res) {
  console.log(`${req.method} route /api/notes`)
});

app.post('/api/notes/delete', function(req, res) {
  console.log(`${req.method} route /api/notes`)
});



app.listen(PORT, () => 
console.log(`App listening on http://localhost:${PORT}`))
