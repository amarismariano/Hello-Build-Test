import express from "express";
import {
  register,
  authUser,
  authenticate,
  forgotPassword,
} from "../controllers/userController.js";

const router = express.Router();

// Auth, Signin Up and Confirmtion of users
router.post("/", register); // Creates a new User
router.post("/login", authUser);
router.get("/confirm/:token", authenticate);
router.post("/forgot-password", forgotPassword);

export default router;
