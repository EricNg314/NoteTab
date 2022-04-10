const path = require('path');
const router = require('express').Router();
const { getNotes, addNote } = require('../../lib/notes');
const fs = require('fs');
const {v4: uuid } = require('uuid');


router.get('/notes', function(req, res) {
  console.log(`${req.method} route /api/notes`)
  const notes = getNotes();
  res.json(notes);
});

router.post('/notes', function(req, res) {
  const {title, text} = req.body
  const id = uuid()
  const newNote = {id, title, text}
  addNote(newNote)

  const response = {
    status: 'success'
  }
  res.json(response);
  console.log(`${req.method} route /api/notes`)
});

router.post('/notes/delete:id', function(req, res) {
  console.log(`${req.method} route /api/notes`)
});


module.exports = router;