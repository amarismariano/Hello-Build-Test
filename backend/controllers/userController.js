import User from "../models/User.js";
import generateId from "../helpers/idGenerator.js";

const register = async (req, res) => {
  // Not allowing duplicate users
  const { email } = req.body;
  const userExist = await User.findOne({ email });

  //Validating that the user exist
  if (userExist) {
    const error = new Error("User already registered");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new User(req.body);
    user.token = generateId();
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

const authentication = async (req, res) => {};

export { register, authentication };
