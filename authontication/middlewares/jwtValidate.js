const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const jwtAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("unauthorized");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    req.user = decoded
    next();
  } catch (error) {
    res.status(403).send("invalid token");
  }
};


module.exports = jwtAuth
