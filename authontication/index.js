const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const dbConnection = require("./config/mongoConnection");
const userModel = require("./models/userModel");
const { name } = require("ejs");

dotenv.config();

const PORT = process.env.PORT;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.set("view-engine", "ejs");
server.use(express.static("public"));
server.use(morgan("dev"));

dbConnection();

server.get("/", (req, res) => {
  res.render("index.ejs");
});
server.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const collectedData = await userModel.create({
      userName: name,
      email: email,
      password: password,
    });
    res.status(200).json(collectedData);
  } catch (error) {
    console.log(error);
  }
});

server.listen(PORT, () => {
  console.log("server started at:", PORT);
});
