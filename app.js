const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const routes = require("./routes/routes");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

mongoose
  .connect(
    "mongodb+srv://Chakradhar:Chinnu@143@cluster0.c2li5.mongodb.net/new?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
