import express from "express";
import { register } from "../controllers/userController.js";

const router = express.Router();

// Auth, Signin Up and Confirmtion of users
router.post("/", register); // Creates a new User

export default router;
