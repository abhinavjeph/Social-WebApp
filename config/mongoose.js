const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/getSocial_developement", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// saving the connection in a variable
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
