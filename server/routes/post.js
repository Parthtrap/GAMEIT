import express from "express";
const router = express.Router();
import { addPost, comment, getAllPosts, getPostByCommunity, getPostByID, likePost, unlikePost } from "./../controllers/post.js"

// Get All Posts
router.get("/get", getAllPosts);

// Get Post by ID
router.post("/get", getPostByID);

// Get all Post of a Community
router.post("/community", getPostByCommunity);

// Make a New Post
router.post("/new", addPost);

// PATCH likepost(postid)
router.post("/like", likePost)

// PATCH unlikepost(postid)
router.post("/unlike", unlikePost);

// Comment on a Post
router.post("/comment", comment);

// DELETE post(postid)
// Unable to Implement Yet

export default router