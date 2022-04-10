const path = require('path');
const router = require('express').Router();
const { getNotes } = require('../../lib/notes');
const fs = require('fs');

router.get('/notes', function(req, res) {
  console.log(`${req.method} route /api/notes`)
  const notes = getNotes();
  res.json(notes);
});

router.post('/notes', function(req, res) {
  const notes = getNotes();



  console.log(`${req.method} route /api/notes`)
});

router.post('/notes/delete:id', function(req, res) {
  console.log(`${req.method} route /api/notes`)
});


module.exports = router;