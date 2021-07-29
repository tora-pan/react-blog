const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(console.log("Connected to mongoDB")).catch((err) => console.log(err));

app.listen("5000", () => {
  console.log("The backend is up and running!");
});
