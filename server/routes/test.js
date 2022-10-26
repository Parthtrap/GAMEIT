import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    console.log("Hello");
    res.send("working...")
})

export default router