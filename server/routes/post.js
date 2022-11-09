import express from "express";
const router = express.Router();
import { addPost } from "./../controllers/post.js"

// POST postlist(communityid, sort)


// POST post(postid)


// POST makepost(userid, communityid)
router.post("/new", addPost);

// PATCH likepost(postid)


// PATCH unlikepost(postid)


// PATCH commentpost(postid, commentid)


// DELETE post(postid)


export default router