const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const DB_URL = process.env.DB_URL;

const dbConnection = () => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("mongo connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConnection;
