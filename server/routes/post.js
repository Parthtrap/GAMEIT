import express from "express";
const router = express.Router();
import { addPost, getAllPosts, getPostByCommunity, getPostByID } from "./../controllers/post.js"

// GET postlist()
router.get("/get", getAllPosts);

// POST post(postid)
router.post("/get", getPostByID);

//POST post(postCommunity)
router.post("/community", getPostByCommunity);

// POST makepost(userid, communityid)
router.post("/new", addPost);

// PATCH likepost(postid)


// PATCH unlikepost(postid)


// PATCH commentpost(postid, commentid)


// DELETE post(postid)


export default router