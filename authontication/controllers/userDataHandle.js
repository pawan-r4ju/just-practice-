const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')


dotenv.config()


const userHandle =async (req, res) => {
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
  }

const loginHandle =  async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
  
    if (!user) {
      return res.status(400).send("user not found");
    }
    

    const isMatch = await user.validatePasssword(password);
    if (!isMatch) {
      return res.status(400).send("Password not match");
    }
    const token = jwt.sign({id:user._id},process.env.SECRETKEY,{ expiresIn: '1h' });
    res.cookie('token',token)
    res.status(200).send("login success");
  }

module.exports = {userHandle,loginHandle}