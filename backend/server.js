const express = require("express");
const mongoose = require("mongoose")
const dotenv = require('dotenv')


dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express();


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(routes)

const bookRouter = require('./routes/booksRoute')
app.use('/books', bookRouter)


const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('successfully connected to the database'))
.catch(err => console.log('Error' + err))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }
  

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})