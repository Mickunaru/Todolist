import express from "express";
const PORT = 3000;

const app = express();

let noteList = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
})

app.post("/submit", (req, res, next) => {
  if (req.body.title && req.body.description) {
    noteList.push({title: req.body.title, description: req.body.description});
  }
  res.render("index.ejs", {notes: noteList});
})

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });

