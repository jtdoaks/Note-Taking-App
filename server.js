const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const uuid = require('./uuid');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

app.post("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
    console.info(`${req.method} request was recieved to create a note.`);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            post_id: uuid(),
        };
        notes.push(newNote)
        const noteString = JSon.stringify(notes, null, 2);

        fs.writeFile(`./db.json`, noteString, (err) =>
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






app.listen(PORT, () =>
    console.log(`Now listening at http://localhost:${PORT}`)
);