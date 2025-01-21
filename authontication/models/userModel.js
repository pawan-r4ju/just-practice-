const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userShema = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userShema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userShema.methods.validatePasssword = async function (userPassword){
  try {
    return await bcrypt.compare(userPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const userModel = mongoose.model("userInfo", userShema);

module.exports = userModel;
