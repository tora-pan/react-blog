const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./_routes/authentication");
const userRoute = require("./_routes/users");
const bodyParser = require("body-parser");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.bodyParser());

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("5000", () => {
  console.log("The backend is up and running!");
});
