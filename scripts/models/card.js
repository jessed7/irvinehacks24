const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({

    user : { 
        type: Number, 
        required: true
    },
    cardID: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: false
    }
    
})

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;









