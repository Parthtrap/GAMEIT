import express from "express";
const router = express.Router();

// GET userinfo()
router.get("/:id", (req, res) => {
    console.log(req.params.id);
    res.json({ id: req.params.id })
})
// PATCH edituserinfo(email, username)
// PATCH likecommunity(email, communityid)
// PATCH makepost(email, postid)
// PATCH makecomment(email, commentid)

export default router