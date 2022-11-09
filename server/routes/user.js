import express from "express";
import { addPost } from "../controllers/post.js";
const router = express.Router();

// GET userinfo()
router.get("/:id", (req, res) => {
    console.log(req.params.id);
    res.json({ id: req.params.id })
})

// PATCH edituserinfo(email, username)


// PATCH likecommunity(email, communityid)


// PATCH makepost(email, postid)
router.post("/new", addPost);

// PATCH makecomment(email, commentid)



export default router