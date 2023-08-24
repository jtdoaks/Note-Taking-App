const route = require('express').Router();
const fs = require("fs");
const path = require("path");
const uuid = require('../uuid');
//pull in db to push to it
const notes = require('../db/db.json');

route.get('/notes', (req, res) =>{

    res.json(notes)
    console.log(notes)
    
}
);

route.post("/notes", (req, res) => {
    // res.sendFile(path.join(__dirname, "./public/notes.html"))
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


module.exports = route;