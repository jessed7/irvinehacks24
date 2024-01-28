const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/user");
const cors = require('cors');


app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
  // Other CORS headers...
  next();
});


const URI =
  "mongodb+srv://nala:FQ4bPg3XnqV2P5SR@cluster0.qr5q198.mongodb.net/CardData?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then((result) =>
    app.listen(5500, () => {
      console.log("Server Started on port 5500, connected to MongoDB");
    })
  )
  .catch((err) => console.log(err));

app.get("/get-user-cards", async (req, res) => {
  try {
    const userID = req.query.user;
    if (await User.exists({ user: userID })) {
      await User.find({ user: userID })
        .exec()
        .then((data) => {
          res.json(data[0]);
          // Further processing with the retrieved data
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      const userData = {
        user: userID,
        items: [],
        cardCount: 0,
        cardsAnswered: 0,
      };
      await User.create(userData);
      res.status(200);
      res.json(userData);
    }
    res.status(200);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/backup-cards", async (req, res) => {
  //this will try to update the cards list for the user given a json
  //const userID = req.body.user;
  try {
    const userID = req.body.user;
    if (await User.exists({ user: userID })) {
      console.log("user has been found: ", userID);
      await User.updateOne(
        { user: userID },
        {
          cardCount: req.body.cardCount,
          cardsAnswered: req.body.cardsAnswered,
          items: req.body.items,
        }
      )
        .then((docs) => {
          console.log("Result :", docs);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await User.create(req.body);
    }
    res.status(200);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
