const express = require("express");
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const path = require('path')
const bodyParser = require('body-parser');
//const booksRouter = require

dotenv.config()

const PORT = 3000;
const app = express();


//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(routes)

const bookRouter = require('./routes/booksRoute')
app.use('/books', bookRouter)


const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('successfully connected to the database'))
.catch(err => console.log('Error' + err))



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})