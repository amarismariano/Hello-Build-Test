import express from "express";
import {
  register,
  authUser,
  authenticate,
} from "../controllers/userController.js";

const router = express.Router();

// Auth, Signin Up and Confirmtion of users
router.post("/", register); // Creates a new User
router.post("/login", authUser);
router.get("/confirm/:token", authenticate);

export default router;
