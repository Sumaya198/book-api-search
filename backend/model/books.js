const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleBooks = new Schema({
    id:{type: String},
    title:{type: String},
    authors: {type: String},
    description: {type: String},
    image: {type: String}, 
    link: {type: String},

    
},
{
    timestamps: true,
})

const Books = mongoose.model('Books', googleBooks);

module.exports = Books;

