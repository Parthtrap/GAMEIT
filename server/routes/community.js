import express from "express";
import { addCommunity } from "../controllers/community.js";
const router = express.Router();

// PATCH follow(commuinityid)


// PATCH unfollow(communityid)


// POST newcommunity(name, tagline, imgsrc)
router.post("/new", addCommunity);


export default router