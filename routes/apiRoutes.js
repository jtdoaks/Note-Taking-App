const route = require('express').Router();
const fs = require("fs");
const path = require("path");
const uuid = require('../uuid');
const notes = require('../db/db.json');

route.get('/notes', (req, res) =>{
    fs.readFile(`./db/db.json`, (err, data) => {
        res.json(JSON.parse(data))
    })
});

route.post("/notes", (req, res) => {
    
    console.info(`${req.method} request was recieved to create a note.`);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        notes.push(newNote)
        const noteString = JSON.stringify(notes, null, 2);

        fs.writeFile(`./db/db.json`, noteString, (err) =>
            err
                ? console.error(err)
                : console.log(`Note for ${newNote.title} has been written to db.json file`)
        );
        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response)
        res.status(201).json(response);
    } else {
        res.status(500).json('Error is creating note.');
    };
});


route.delete('/notes/:id', (req, res) => {
   const oldNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')))
   const deleter = oldNotes.filter(note => note.id !== req.params.id)
   fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(deleter))
    res.json(deleter)
});



module.exports = route;