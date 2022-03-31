import User from "../models/User.js";
import generateId from "../helpers/idGenerator.js";
import generateJWT from "../helpers/JWTGenerator.js";

// Creation of User
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

// Authenticate User
const authUser = async (req, res) => {
  const { email, password } = req.body;

  //Check if the user exist
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("This user does not exist");
    return res.status(404).json({ msg: error.message });
  }

  //Check if the user is confirmed
  if (!user.confirmed) {
    const error = new Error("Your account has not been confirmed");
    return res.status(403).json({ msg: error.message });
  }

  // Check the pw of the user
  if (await user.authPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    const error = new Error("Password is Incorrect");
    return res.status(403).json({ msg: error.message });
  }
};

// Validate User
const authenticate = async (req, res) => {
  // We get the token from the params
  const { token } = req.params;
  const confirmedUser = await User.findOne({ token });

  // We validate that is the correct Token
  if (!confirmedUser) {
    const error = new Error("Invalid Token");
    return res.status(403).json({ msg: error.message });
  }

  try {
    confirmedUser.confirmed = true;
    confirmedUser.token = "";
    await confirmedUser.save();
    res.json({ msg: "User confirmed successfully" });
    console.log(confirmedUser);
  } catch (error) {
    console.log(error);
  }
};

export { register, authUser, authenticate };
