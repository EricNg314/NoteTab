
const fs = require('fs');

function getNotes(){
  const rawData = fs.readFileSync('./db/db.json');
  const notes = JSON.parse(rawData);
  return notes;
}

module.exports = {
  getNotes
}