const path = require('path');
const router = require('express').Router();
const fs = require('fs');

router.get('/notes', function(req, res) {
  console.log(`${req.method} route /api/notes`)
  const rawData = fs.readFileSync('./db/db.json');
  const notes = JSON.parse(rawData);
  res.json(notes);
});

router.post('/notes', function(req, res) {
  console.log(`${req.method} route /api/notes`)
});

router.post('/notes/delete:id', function(req, res) {
  console.log(`${req.method} route /api/notes`)
});


module.exports = router;