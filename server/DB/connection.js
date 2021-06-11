const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({
  path: path.resolve("config.env"),
});
mongoose.connect(
  `${process.env.DB_ADMIN}@${process.env.DB_CLUSTER}${process.env.DB_NAME}`
);
mongoose.connection.on("open", () => {
  console.log("DB start");
});

module.exports = mongoose;
