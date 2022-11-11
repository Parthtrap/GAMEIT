import express from "express";
import { getUserPosts } from "../controllers/post.js";
import { followCommunity, getUser, unfollowCommunity, updateUserName } from "../controllers/user.js";
const router = express.Router();

// Get User Info
router.post("/get", getUser);

// Get All User Posts
router.post("/posts", getUserPosts);

// Update User Info
router.post("/update", updateUserName);

// Follow Community
router.post("/follow", followCommunity);

// Unfollow Community
router.post("/unfollow", unfollowCommunity);


export default router