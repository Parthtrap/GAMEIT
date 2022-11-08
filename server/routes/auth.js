import express from "express";
const router = express.Router();
import { verifyUser, addUser } from "../controllers/authController.js"

// POST login(email, password)
router.post("/login", verifyUser);
router.post("/signup", addUser);

// POST signup(username, email, password, dob, gender)


// POST forgotpassword(email)


// PATCH resetpassword(email, password)


export default router