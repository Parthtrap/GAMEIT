import express from "express";
import { getUserPosts } from "../controllers/post.js";
import { followCommunity, getUser } from "../controllers/user.js";
const router = express.Router();

// GET userinfo()
router.post("/get", getUser)
router.post("/posts", getUserPosts)

// PATCH edituserinfo(email, username)


// PATCH likecommunity(email, communityid)
router.post("/follow", followCommunity);


// PATCH makepost(email, postid)


// PATCH makecomment(email, commentid)



export default router