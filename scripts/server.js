const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/user");

app.use(express.json());

const URI =
  "mongodb+srv://nala:FQ4bPg3XnqV2P5SR@cluster0.qr5q198.mongodb.net/CardData?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then((result) =>
    app.listen(5000, () => {
      console.log("Server Started on port 5000, connected to MongoDB");
    })
  )
  .catch((err) => console.log(err));

app.get("/get-user-cards", async (req, res) => {});

app.post("/backup-cards", async (req, res) => {
  //this will try to update the cards list for the user given a json
  const userID = req.body.user;
  console.log(userID);
  try {
    if (User.exists({ user: userID })) {
      console.log('user has been found');
      let userData = await User.findOne({ user: userID })
        .then((docs) => {
          console.log("Result :", docs);
        })
        .catch((err) => {
          console.log(err);
        });

        userData.items = req.body.items;
        userData.cardCount = req.body.cardCount;
        userData.cardsAnswered = req.body.cardsAnswered;

      const user = await userData.save()
        .save()
        .then((docs) => {
          console.log("Saved These Values:", docs);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const user = await User.create(req.body);
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
