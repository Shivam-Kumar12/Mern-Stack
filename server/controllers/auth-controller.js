const User = require("../Models/userModels")
const bcrypt = require("bcryptjs")
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Home page")

  } catch (error) {
    console.log(error);
  }

}
const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: "email already exists" })
    }

    const userCreated = await User.create({ username, email, phone, password })
    res.status(201).json({ message: "registration Successfully", token: await userCreated.generateToken(), userId: userCreated._id.toString() })
  } catch (error) {
    next(error)
    // res.status(500).json("internal server Error")
  }
}
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) {
      return res.status(400).json({ msg: "invalid credentials" })
    }
    // const isValidUser = await bcrypt.compare(password, userExists.password);
    const isValidUser=await userExists.ComparePassword(password)
    if (isValidUser) {
      res.status(201).json(
        {
          msg: "user Logged In",
          token: await userExists.generateToken(),
          userId: userExists._id.toString()
        })
    } else {
      res.status(401).json({ message: "Invalid email and password" })
    }
  } catch (error) {
    res.status(500).json("internal server Error")
  }

};

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login,user }