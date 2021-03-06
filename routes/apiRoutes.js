
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

const fs = require ("fs");
const uuid = require("uuid");
const path = require("path");

let noteDB = require("../db/db.json");
let noteFile= "../db/db.json"


module.exports = function(app){
   
    app.get("/api/notes", (req, res) => {
       return res.json(noteDB);
    });

    app.post("/api/notes", (req,res) => {
        let newNote = req.body;
        //insert uuid to use in the object we will need to create 
        newNote = {
            id: uuid.v4(),
            title: req.body.title,
            text: req.body.text,
        }

        noteDB.push(newNote);
       writeToFile();
      res.json(noteDB);
    

    });
    //should be able to delete by id
    //syntax app.delete (path, callback)
    app.delete("/api/notes/:id",(req,res) => {
       let id = req.params.id;
       //filtering the array for an id if it does not match what is selected
       noteDB = noteDB.filter(note => note.id !== id);
    
       writeToFile();
       //display current array
       res.json(noteDB);
       res.send();
    });
    //put this into a variable 
    // let noteString = JSON.stringify(noteDB);
    //   fs.writeFile(noteFile, noteString, err => {
    //       if(err){
    //          return console.log(err);
    //       }
    //       console.log("An update has been made!");
    //   });

    function writeToFile(){
        let noteString = JSON.stringify(noteDB);
        fs.writeFile(noteFile, noteString, err => {
                  if(err){
                     return console.log(err);
                  }
                  console.log("An update has been made!");
              });
    };

};
