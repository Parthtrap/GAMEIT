import express from "express";
import { addCommunity, getCommunities, getCommunity } from "../controllers/community.js";
const router = express.Router();

// PATCH follow(commuinityid)

// PATCH unfollow(communityid)


// POST newcommunity(name, tagline, imgsrc)
router.post("/new", addCommunity);

// GET communities()
router.get("/get", getCommunities);

// POST getCommunity(name)
router.post("/get", getCommunity);

export default router