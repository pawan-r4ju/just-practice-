const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const dbConnection = require("./config/mongoConnection");
const userModel = require("./models/userModel");
const ejs = require("ejs");
const { userHandle, loginHandle } = require("./controllers/userDataHandle");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwtAuth = require("./middlewares/jwtValidate");

dotenv.config();

const PORT = process.env.PORT;
const server = express();

server.use(cookieParser());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.set("view-engine", "ejs");
server.use(express.static("public"));
server.use(morgan("dev"));

dbConnection();

server.get("/", (req, res) => {
  res.render("index.ejs");
});
server.post("/", userHandle);
server.get("/login", (req, res) => {
  res.render("login.ejs");
});
server.post("/login", loginHandle);
server.get("/protected", jwtAuth, (req, res) => {
  res.send("acsess success");
});

server.listen(PORT, () => {
  console.log("server started at:", PORT);
});
