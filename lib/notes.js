
const fs = require('fs');

function getNotes(){
  const rawData = fs.readFileSync('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.info('Successfully added note.')
      return data;
    }
  });
  const notes = JSON.parse(rawData);
  return notes;
}

function addNote(note){
  let notes = getNotes();
  notes.push(note);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
    if(err){
      console.error(err)
    } else {
      console.info('Successfully added note.')
    }
  })
  return notes;
}

module.exports = {
  getNotes,
  addNote
}