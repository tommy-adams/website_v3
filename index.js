const express = require("express");
const app = express();

// init view engine
app.set("view engine", "ejs");

// set dirname for images
app.use(express.static(__dirname))

// index
app.get("/", (req, res) => {
  res.render("pages/index");
});

// run server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));