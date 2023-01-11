const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
app.get("/", (req, res, next) => {
  res.send("<h1>HomePage</h1>");
});

app.listen(3200);

// serve two HTML files of choice for / and users
// practice static serving
