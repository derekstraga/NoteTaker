var router = require("express").Router();
var dbNotes = require("../db/dbNotes.js");

router.get("/notes", function (req, res){
    dbNotes
    console.log(dbNotes)
    .getNotes()
    .then(notes => res.json(notes));
});

router.post("/notes", function (req, res){
    dbNotes
    .addNotes(req.body)
    .then(note => res.json(note));
});

router.delete("/notes/id", function (req, res){
    dbNotes
    .deleteNotes(req.params.id)
    .then(note => res.json(note))
});

module.exports = router;

