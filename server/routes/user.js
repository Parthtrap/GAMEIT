import express from "express";
import { getUser } from "../controllers/user.js";
const router = express.Router();

// GET userinfo()
router.post("/get", getUser)

// PATCH edituserinfo(email, username)


// PATCH likecommunity(email, communityid)


// PATCH makepost(email, postid)


// PATCH makecomment(email, commentid)



export default router