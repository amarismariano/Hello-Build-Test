import express from "express";
import {
  register,
  authUser,
  authenticate,
  forgotPassword,
  checkToken,
  newPassword,
  profile,
} from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Auth, Signin Up and Confirmtion of users
router.post("/", register); // Creates a new User
router.post("/login", authUser); // Authenticate
router.get("/confirm/:token", authenticate); // Validate the token and confirm the user
router.post("/forgot-password", forgotPassword); // Help to create a token for the new password
router.route("/forgot-password/:token").get(checkToken).post(newPassword); // Checks the new token and create the new password

router.get("/profile", checkAuth, profile);

export default router;
