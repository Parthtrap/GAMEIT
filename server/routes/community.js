import express from "express";
import { addCommunity, getCommunities, getCommunity } from "../controllers/community.js";
const router = express.Router();

// Add a New Community
router.post("/new", addCommunity);

// Get All Communities
router.get("/get", getCommunities);

// Get A Community by Name
router.post("/get", getCommunity);

export default router