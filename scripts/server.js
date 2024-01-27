const express = require("express");
const mongoose = require("mongoose");
const app = express();

const URI =
  "mongodb+srv://nala:FQ4bPg3XnqV2P5SR@cluster0.qr5q198.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then((result) =>
    app.listen(8000, () => {
      console.log("Server Started on port 8000");
    })
  )
  .catch((err) => console.log(err));

app.get('/get-card');