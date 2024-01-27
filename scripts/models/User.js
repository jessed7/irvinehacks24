const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
    {
       id : Number,
       prompt: String,
       answer: String,
       numRight: Number,
       numWrong: Number
    }
);

const userSchema = new Schema({
  //each mongoDB document will contain the user, and that user contains
  user: String,
  items: [cardSchema],
  cardCount: Number,
  cardsAnswered: Number,
});

const user = mongoose.model("User", userSchema);
module.exports = user;

