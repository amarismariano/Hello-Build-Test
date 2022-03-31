import jwt from "jsonwebtoken";
import User from "../models/User.js";

const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //We get only the token without the "Bearer"
      token = req.headers.authorization.split(" ")[1];

      //We Verify the Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //We search for the user with the same id/token
      req.user = await User.findById(decoded.id).select("_id name email");

      // Then we pass to the next middleware
      return next();
    } catch (error) {
      return res.status(404).json({ msg: "Error " });
    }
  }

  if (!token) {
    const error = new Error("Invalid Token");
    res.status(401).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
