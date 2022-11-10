import express from "express";
const router = express.Router();
import { addPost, getPostByID } from "./../controllers/post.js"

// POST postlist(communityid, sort)


// POST post(postid)
router.post("/get", getPostByID);

// POST makepost(userid, communityid)
router.post("/new", addPost);

// PATCH likepost(postid)


// PATCH unlikepost(postid)


// PATCH commentpost(postid, commentid)


// DELETE post(postid)


export default router