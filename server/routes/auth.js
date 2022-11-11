import express from "express";
const router = express.Router();
import { verifyUser, addUser } from "../controllers/authController.js"

// Log In
router.post("/login", verifyUser);

// Sign Up
router.post("/signup", addUser);

// Forgot Password
// Unable to Implement Yet


// Reset Password
// Unable to Implement Yet


export default router