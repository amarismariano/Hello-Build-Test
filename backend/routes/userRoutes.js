import express from "express";
import { register, authentication } from "../controllers/userController.js";

const router = express.Router();

// Auth, Signin Up and Confirmtion of users
router.post("/", register); // Creates a new User
router.post("/login", authentication);

export default router;
