const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', function(req, res) {
});

app.post('/api/notes', function(req, res) {
});

app.post('/api/notes/delete', function(req, res) {
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () => 
console.log(`App listening on http://localhost:${PORT}`))
