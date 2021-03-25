const express = require('express');
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const book = require("./model");
const app = express();
const cors = require('cors');
const path = require("path");

require('dotenv').config();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "../client/build")))

const db = process.env.MONGODB_URI;
mongoose.connect(db || "mongodb://localhost/books", { useNewUrlParser: true, useUnifiedTopology: true});

app.get("/api/books", async (req, res) => {
    book.find().then( books => {
        res.json(books);
    }).catch(err => {
        res.status(404).json(err)
    })
})

app.post("/api/books", async (req, res) => {
    const bookSaved = req.body.books;
    book.create(bookSaved).then( bookSaved =>{
        res.json(bookSaved);
    }).catch(err => {
        res.status(404).json(err);
    });
})

app.delete("/api/books/:id", async (req, res) =>{
    const id = req.params.id;
    books.findByIdAndDelete(id, function (err) {
        if(err) console.log(err);
        console.log("Successfully deleted")
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.listen(port, () =>{
    console.log('port running on', port)
})