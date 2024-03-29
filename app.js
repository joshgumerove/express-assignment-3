const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3200);

// serve two HTML files of choice for / and users
// practice static serving
