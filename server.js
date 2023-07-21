const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const userDetailRoutes = require("./routes/userDetailRoutes");

const metaCvRoutes = require("./routes/metaCvRoutes");

const app = express();
app.use(express.json());

const dbUri =
  "mongodb+srv://ictekin:12345@cluster0.dmhpt.gcp.mongodb.net/humanas-task-api";

mongoose
  .connect(dbUri, { useNewUrlParser: true })
  .then((result) => {
    console.log("connected");

    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(authRoutes);
app.use(userDetailRoutes);
app.use(metaCvRoutes);
