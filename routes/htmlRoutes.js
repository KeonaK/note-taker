//include the path module 
// provides functionality to access and interact with the file system
const path = require("path");
//html get methods

module.exports = (app) => {

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
  });

    app.get("/notes", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //  defaults to index.html if a matching route is not found
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};