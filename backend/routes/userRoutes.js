import express from "express";
import {
  register,
  authUser,
  authenticate,
  forgotPassword,
  checkToken,
  newPassword,
} from "../controllers/userController.js";

const router = express.Router();

// Auth, Signin Up and Confirmtion of users
router.post("/", register); // Creates a new User
router.post("/login", authUser);
router.get("/confirm/:token", authenticate);
router.post("/forgot-password", forgotPassword);
router.route("/forgot-password/:token").get(checkToken).post(newPassword);

export default router;
